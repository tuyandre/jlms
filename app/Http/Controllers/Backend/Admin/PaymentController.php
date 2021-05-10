<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Helpers\General\EarningHelper;
use App\Http\Controllers\Controller;
use App\Models\BankPayment;
use App\Models\Bundle;
use App\Models\MobilePayment;
use App\Models\Order;
use Hashids\Hashids;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Yajra\DataTables\Facades\DataTables;

class PaymentController extends Controller
{
    public function bankDeposit(){
        return view("backend.transactions.bankDeposit");
    }
    public function bankDepositGetData(Request $request){
        $bank=BankPayment::with(['User'])
            ->orderBy('updated_at', 'desc')
            ->get();

//        return response()->json(['result' => $bank], 200);
        return DataTables::of($bank)
            ->addIndexColumn()
            ->addColumn('actions', function ($q) use ($request) {
                $view = "";

                $view = view('backend.datatable.action-view')
                    ->with(['route' => route('admin.transactions.showBankPayment', ['order' => $q->id])])->render();

                if ($q->status == 0) {
//                    $reject_order = view('backend.datatable.action-reject')
//                        ->with(['route' => route('admin.orders.complete', ['order' => $q->id])])
//                        ->render();
                    $complete_order = view('backend.datatable.action-accept')
                        ->with(['route' => route('admin.orders.complete', ['order' => $q->order_id])])
                        ->render();
                    $view .= $complete_order;
//                    $view .= $reject_order;
                }

                if ($q->status == 0) {
                    $delete = view('backend.datatable.action-delete')
                        ->with(['route' => route('admin.orders.destroy', ['order' => $q->order_id])])
                        ->render();

                    $view .= $delete;
                }

                return $view;

            })
            ->addColumn('depositor', function ($q) {
                return $q->bankDepositorNames;
            })
            ->addColumn('user_name', function ($q) {
                return $q->user->full_name;
            })
            ->addColumn('branch', function ($q) {
                return $q->branch;
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
            ->editColumn('amount', function ($q) {
                return  floatval($q->bankDepositAmount);
            })
            ->rawColumns(['items', 'actions'])
            ->make();

    }
    public function completeBankDeposit(Request $request){
        $bank = BankPayment::findOrfail($request->bank_id);
        $bank->status = 1;
        $bank->save();

        $order = Order::findOrfail($bank->order_id);
        $order->status = 1;
        $order->save();

        (new EarningHelper)->insert($order);

        //Generating Invoice
        generateInvoice($order);

        foreach ($order->items as $orderItem) {
            //Bundle Entries
            if($orderItem->item_type == Bundle::class){
                foreach ($orderItem->item->courses as $course){
                    $course->students()->attach($order->user_id);
                }
            }
            $orderItem->item->students()->attach($order->user_id);
        }
        return back()->withFlashSuccess(trans('alerts.backend.general.updated'));
    }
    public function showBankPayment($id)
    {
        $order = BankPayment::with(['Order'])->findOrFail($id);
//        $order = MobilePayment::findOrFail($id);
        return view('backend.transactions.bank_deposit_detail', compact('order'));
    }
    public function destroyBankPayment($id){
        $bank = BankPayment::findOrFail($id);
        $bank->delete();


        $order = Order::findOrFail($bank->order_id);
        $order->items()->delete();
        $order->delete();

        return redirect()->route('admin.orders.index')->withFlashSuccess(trans('alerts.backend.general.deleted'));

    }


    public function viewBankReceipt(Request $request){
        if (auth()->check()) {
            $hashid = new Hashids('',5);
            $order_id = $hashid->decode($request->code);
            $order_id = array_first($order_id);

            $order = BankPayment::findOrFail($order_id);
            if (auth()->user()->isAdmin() || ($order->user_id == auth()->user()->id)) {
                return response()->file(public_path() . "/students/payments/" . $order->bankAttachment);

            }
        }
        return abort(404);
    }
    public function downloadBankReceipt(Request $request){
        if (auth()->check()) {
            $hashid = new Hashids('',5);
            $order_id = $hashid->decode($request->order);
            $order_id = array_first($order_id);

            $order = BankPayment::findOrFail($order_id);
            if (auth()->user()->isAdmin() || ($order->user_id == auth()->user()->id)) {
                $file = public_path() . "/students/payments/" . $order->bankAttachment;
                return Response::download($file);
            }
        }
        return abort(404);
    }

    public function mobileDeposit(){
        return view("backend.transactions.mobilePayments");
    }
    public function mobilePaymentGetData(Request $request){
        $mobile=MobilePayment::with(['User'])
            ->orderBy('updated_at', 'desc')
            ->get();

//        return response()->json(['result' => $bank], 200);
        return DataTables::of($mobile)
            ->addIndexColumn()
            ->addColumn('actions', function ($q) use ($request) {
                $view = "";

                $view = view('backend.datatable.action-view')
                    ->with(['route' => route('admin.transaction.showMobilePayment', ['order' => $q->id])])->render();

                if ($q->status == 0) {
//                    $reject_order = view('backend.datatable.action-reject')
//                        ->with(['route' => route('admin.orders.complete', ['order' => $q->id])])
//                        ->render();
                    $complete_order = view('backend.datatable.action-accept')
                        ->with(['route' => route('admin.orders.complete', ['order' => $q->order_id])])
                        ->render();
                    $view .= $complete_order;
//                    $view .= $reject_order;
                }

                if ($q->status == 0) {
                    $delete = view('backend.datatable.action-delete')
                        ->with(['route' => route('admin.orders.destroy', ['order' => $q->order_id])])
                        ->render();

                    $view .= $delete;
                }

                return $view;

            })
            ->addColumn('depositor', function ($q) {
                return $q->mobileMoneyDepositorNames;
            })
            ->addColumn('user_name', function ($q) {
                return $q->user->full_name;
            })
            ->addColumn('phone', function ($q) {
                return $q->mobileMoneyPhoneNumber;
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
            ->editColumn('amount', function ($q) {
                return  floatval($q->mobileMoneyAmount);
            })
            ->rawColumns(['items', 'actions'])
            ->make();

    }
    public function showMobilePayment($id)
    {
        $order = MobilePayment::with(['Order'])->findOrFail($id);
//        $order = MobilePayment::findOrFail($id);
        return view('backend.transactions.momo_payment_detail', compact('order'));
    }
    public function completeMobilePayment(Request $request){
        $mobile = MobilePayment::findOrfail($request->momo);
        $mobile->status = 1;
        $mobile->save();

        $order = Order::findOrfail($mobile->order_id);
        $order->status = 1;
        $order->save();

        (new EarningHelper)->insert($order);

        //Generating Invoice
        generateInvoice($order);

        foreach ($order->items as $orderItem) {
            //Bundle Entries
            if($orderItem->item_type == Bundle::class){
                foreach ($orderItem->item->courses as $course){
                    $course->students()->attach($order->user_id);
                }
            }
            $orderItem->item->students()->attach($order->user_id);
        }
        return back()->withFlashSuccess(trans('alerts.backend.general.updated'));
    }
    public function destroyMobilePayment($id){
        $mobile = MobilePayment::findOrFail($id);
        $mobile->delete();


        $order = Order::findOrFail($mobile->order_id);
        $order->items()->delete();
        $order->delete();

        return redirect()->route('admin.orders.index')->withFlashSuccess(trans('alerts.backend.general.deleted'));

    }



//    public function offlinePayment(){
//        return view("backend.transactions.offlinePayment");
//    }
}
