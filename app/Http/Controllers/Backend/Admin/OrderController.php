<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Helpers\General\EarningHelper;
use App\Models\Auth\User;
use App\Models\BankPayment;
use App\Models\Bundle;
use App\Models\Course;
use App\Models\MobilePayment;
use App\Models\Order;
use App\Models\SponsorshipPayment;
use App\Notifications\Frontend\Auth\StudentApprovedOrder;
use App\Notifications\Frontend\Auth\WelcomeStudent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Notification;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Response;


class OrderController extends Controller
{

    /**
     * Display a listing of Orders.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::get();
        return view('backend.orders.index', compact('orders'));
    }

    /**
     * Display a listing of Orders via ajax DataTable.
     *
     * @return \Illuminate\Http\Response
     */
    public function getData(Request $request)
    {
        if (request('offline_requests') == 1) {

            $orders = Order::query()->where('payment_type', '=', 3)->orderBy('updated_at', 'desc');
        } else {
            $orders = Order::query()->orderBy('updated_at', 'desc');
        }

        return DataTables::of($orders)
            ->addIndexColumn()
            ->addColumn('actions', function ($q) use ($request) {
                $view = "";

                $view = view('backend.datatable.action-view')
                    ->with(['route' => route('admin.orders.show', ['order' => $q->id])])->render();

                if ($q->status == 0) {
                    $complete_order = view('backend.datatable.action-complete-order')
                        ->with(['route' => route('admin.orders.complete', ['order' => $q->id])])
                        ->render();
                    $view .= $complete_order;
                }

                if ($q->status == 0) {
                    $delete = view('backend.datatable.action-delete')
                    ->with(['route' => route('admin.orders.destroy', ['order' => $q->id])])
                    ->render();

                    $view .= $delete;
                }

                return $view;

            })
            ->addColumn('items', function ($q) {
                $items = "";
                foreach ($q->items as $key => $item) {
                    if ($item->item_type=="Registration") {
                        $items .="Registration Fees";
                    }
                else{
                    if($item->item != null){
                        $key++;
                        $items .= $key . '. ' . $item->item->title . "<br>";
                    }

                }}
                return $items;
            })
            ->addColumn('user_email', function ($q) {
                return $q->user->email;
            })
            ->addColumn('date', function ($q) {
                return $q->updated_at->diffforhumans();
            })
            ->addColumn('payment', function ($q) {
                if ($q->status == 0) {
                    $payment_status = trans('labels.backend.orders.fields.payment_status.pending');
                } elseif ($q->status == 1) {
                    $payment_status = trans('labels.backend.orders.fields.payment_status.completed');
                } else {
                    $payment_status = trans('labels.backend.orders.fields.payment_status.failed');
                }
                return $payment_status;
            })
            ->editColumn('price', function ($q) {
                return '$' . floatval($q->price);
            })
            ->rawColumns(['items', 'actions'])
            ->make();
    }

    /**
     * Complete Order manually once payment received.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function complete(Request $request)
    {
        $order = Order::findOrfail($request->order);
        $order->status = 1;
        $order->save();
//        $students=User::find($order->user_id);
//        return response()->json(['passport' => $students], 200);

        if($order->payment_type==0){
            $bank=BankPayment::where('order_id','=',$order->id)->first();
            $bank->status=1;
            $bank->save();

        }
        if($order->payment_type==1){
            $mobile=MobilePayment::where('order_id','=',$order->id)->first();
            $mobile->status=1;
            $mobile->save();
        }
        if($order->payment_type==2){
            $sponsor=SponsorshipPayment::where('order_id','=',$order->id)->first();
            $sponsor->status=1;
            $sponsor->save();
        }
        (new EarningHelper)->insert($order);

        //Generating Invoice
        generateInvoice($order);

        foreach ($order->items as $orderItem) {
            //Bundle Entries
            if ($orderItem->item_type!="Registration") {
                if ($orderItem->item_type == Bundle::class) {
                    foreach ($orderItem->item->courses as $course) {
                        $course->students()->attach($order->user_id);
                    }
                }
                $orderItem->item->students()->attach($order->user_id);
            }
        }
        try{
        $students=User::find($order->user_id);
        Notification::send($students, new StudentApprovedOrder($students));
        $message="Welcome "." ".$students->full_name." " ."Your Order Approved check Invoice in your account";
        $this->sendMessage($students->phone,$message);
        } catch (\Exception $e) {
            \Log::info($e->getMessage() . ' for order ' . $order->id);
        }
        return back()->withFlashSuccess(trans('alerts.backend.general.updated'));
    }

    /**
     * Show Order from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::findOrFail($id);
        return view('backend.orders.show', compact('order'));
    }

    /**
     * Remove Order from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $order = Order::findOrFail($id);
        $order->items()->delete();
        $order->delete();
        if($order->payment_type==0){
            $bank=BankPayment::where('order_id','=',$order->id)->first();
            $bank->delete();

        }
        if($order->payment_type==1){
            $mobile=MobilePayment::where('order_id','=',$order->id)->first();
            $mobile->delete();
        }
        if($order->payment_type==2){
            $sponsor=SponsorshipPayment::where('order_id','=',$order->id)->first();
            $sponsor->delete();
        }
        return redirect()->route('admin.orders.index')->withFlashSuccess(trans('alerts.backend.general.deleted'));
    }

    /**
     * Delete all selected Orders at once.
     *
     * @param Request $request
     */
    public function massDestroy(Request $request)
    {
        if (!Gate::allows('course_delete')) {
            return abort(401);
        }
        if ($request->input('ids')) {
            $entries = Order::whereIn('id', $request->input('ids'))->get();
            foreach ($entries as $entry) {
                if ($entry->status = 1) {
                    foreach ($entry->items as $item) {
                        $item->course->students()->detach($entry->user_id);
                    }
                    $entry->items()->delete();
                    $entry->delete();
                }
            }
        }
    }

    public function sendMessage($phone,$message){
        $data = array(
            "sender"=>'+250788866742',
            "recipients"=>$phone,
            "message"=>$message
        ,);
        $url = "https://www.intouchsms.co.rw/api/sendsms/.json";
        $data = http_build_query($data);
        $username="tuyandre20";
        $password="kamana1234567";

        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
        curl_setopt($ch,CURLOPT_POST,true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch,CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    }
}
