@extends('backend.layouts.app')
@section('title', __('labels.backend.orders.title').' | '.app_name())

@section('content')

    <div class="card">

        <div class="card-header">
            <h3 class="page-title mb-0 float-left">@lang('labels.backend.orders.title')</h3>
            @if($order->order->invoice != "")
                @if(Auth::user()->isAdmin())
                    @php
                        $hashids = new \Hashids\Hashids('',5);
                             $order_id = $hashids->encode($order->order_id);
                    @endphp

                    <div class="float-right">
                        <a class="btn btn-success" target="_blank" href="{{route('admin.invoices.view', ['code' => $order_id])}}">
                            @lang('labels.backend.orders.view_invoice')
                        </a>
                        <a class="btn btn-primary" href="{{route('admin.invoice.download',['order'=>$order_id])}}">
                            @lang('labels.backend.orders.download_invoice')
                        </a>
                    </div>
                @endif
            @endif
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <th>@lang('labels.backend.orders.fields.reference_no')</th>
                            <td>
                                {{$order->reference_no}}
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.ordered_by')</th>
                            <td>
                                Name    : <b>{{$order->user->name}}</b><br>
                                Email   : <b>{{$order->user->email}}</b>
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.items')</th>
                            <td>
                                @foreach($order->order->items as $key=>$item)
                                    @php $key++ @endphp
                                    {{$key.'. '.$item->item->title}}<br>
                                @endforeach
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.amount')</th>
                            <td>{{ number_format($order->order->amount).' '.$appCurrency['symbol'] }}</td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.payment_type.title')</th>
                            <td>

                                @if($order->order->payment_type == 0)
                                    {{trans('labels.backend.orders.fields.payment_type.bank') }}
                                @elseif($order->order->payment_type == 1)
                                    {{trans('labels.backend.orders.fields.payment_type.mobile')}}
                                @else
                                    {{trans('labels.backend.orders.fields.payment_type.offline')}}
                                @endif

                            </td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.payment_status.title')</th>
                            <td>

                                @if($order->status == 0)
                                    {{trans('labels.backend.orders.fields.payment_status.pending') }}
                                    <a class="btn btn-xs mb-1 mr-1 btn-success text-white" style="cursor:pointer;"
                                       onclick="$(this).find('form').submit();">
                                        {{trans('labels.backend.orders.complete')}}
                                        <form action="{{route('admin.orders.complete', ['order' => $order->order_id])}}"
                                              method="POST" name="complete" style="display:none">
                                            @csrf
                                        </form>
                                    </a>
                                @elseif($order->status == 1)
                                    {{trans('labels.backend.orders.fields.payment_status.completed')}}
                                @else
                                    {{trans('labels.backend.orders.fields.payment_status.failed')}}
                                @endif

                            </td>
                        </tr>

                        <tr>
                            <th>Payment Date</th>
                            <td>{{ $order->mobileMoneyDate }}</td>
                        </tr>
                        <tr>
                            <th>Depositor/Payer Name</th>
                            <td>{{ $order->mobileMoneyDepositorNames }}</td>
                        </tr>
                        <tr>
                            <th>Telephone Number</th>
                            <td>{{ $order->mobileMoneyPhoneNumber }}</td>
                        </tr>
                        <tr>
                            <th>Reference Number</th>
                            <td>{{ $order->mobileMoneyPaymentRefNo }}</td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.date')</th>
                            <td>{{ $order->created_at->format('d M, Y | h:i A') }}</td>
                        </tr>


                    </table>
                </div>
            </div><!-- Nav tabs -->
            @if(Auth::user()->isAdmin())
                <a href="{{ route('admin.orders.index') }}" class="btn btn-default border">@lang('strings.backend.general.app_back_to_list')</a>
            @else
                <a href="{{ route('admin.payments') }}" class="btn btn-default border">@lang('strings.backend.general.app_back_to_list')</a>
            @endif
        </div>
    </div>
@stop