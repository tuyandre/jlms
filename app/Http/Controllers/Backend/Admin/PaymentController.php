<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use App\Models\BankPayment;
use Illuminate\Http\Request;
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
                    ->with(['route' => route('admin.orders.show', ['order' => $q->id])])->render();

                if ($q->status == 0) {
                    $reject_order = view('backend.datatable.action-reject')
                        ->with(['route' => route('admin.orders.complete', ['order' => $q->id])])
                        ->render();
                    $complete_order = view('backend.datatable.action-accept')
                        ->with(['route' => route('admin.orders.complete', ['order' => $q->id])])
                        ->render();
                    $view .= $complete_order;
                    $view .= $reject_order;
                }

                if ($q->status == 0) {
                    $delete = view('backend.datatable.action-delete')
                        ->with(['route' => route('admin.orders.destroy', ['order' => $q->id])])
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
}
