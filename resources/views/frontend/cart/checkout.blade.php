@extends('frontend.layouts.app'.config('theme_layout'))
@section('title', trans('labels.frontend.cart.payment_status').' | '.app_name())

@push('after-styles')
    <style>
        input[type="radio"] {
            display: inline-block !important;
        }

        .course-rate li {
            color: #ffc926 !important;
        }

        #applyCoupon {
            box-shadow: none !important;
            color: #fff !important;
            font-weight: bold;
        }

        #coupon.warning {
            border: 1px solid red;
        }

        .purchase-list .in-total {
            font-size: 18px;
        }

        #coupon-error {
            color: red;
        }
        .in-total:not(:first-child):not(:last-child){
            font-size: 15px;
        }

    </style>

    <script src='https://js.stripe.com/v2/' type='text/javascript'></script>
@endpush
@section('content')

    <!-- Start of breadcrumb section
        ============================================= -->
    <section id="breadcrumb" class="breadcrumb-section relative-position backgroud-style">
        <div class="blakish-overlay"></div>
        <div class="container">
            <div class="page-breadcrumb-content text-center">
                <div class="page-breadcrumb-title">
                    <h2 class="breadcrumb-head black bold"><span>@lang('labels.frontend.cart.checkout')</span></h2>
                </div>
            </div>
        </div>
    </section>
    <!-- End of breadcrumb section
        ============================================= -->


    <!-- Start of Checkout content
        ============================================= -->
    <section id="checkout" class="checkout-section">
        <div class="container">
            <div class="section-title mb45 headline text-center">
                <span class="subtitle text-uppercase">@lang('labels.frontend.cart.your_shopping_cart')</span>
                <h2>@lang('labels.frontend.cart.complete_your_purchases')</h2>
            </div>
            <div class="checkout-content">
                @if(session()->has('danger'))
                    <div class="alert alert-dismissable alert-danger fade show">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        {!! session('danger')  !!}
                    </div>
                @endif
                <div class="row">
                    <div class="col-md-9">
                        <div class="order-item mb30 course-page-section">
                            <div class="section-title-2  headline text-left">
                                <h2>@lang('labels.frontend.cart.order_item')</h2>
                            </div>

                            <div class="course-list-view table-responsive">
                                <table class="table">

                                    <thead>
                                    <tr class="list-head text-uppercase">
                                        <th>@lang('labels.frontend.cart.product_name')</th>
                                        <th>@lang('labels.frontend.cart.product_type')</th>
                                        <th>@lang('labels.frontend.cart.starts')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if(count($courses) > 0)
                                        @foreach($courses as $course)
                                            <tr class="position-relative">

                                                <td>
                                                    <a style="right: 3%;" class="text-danger position-absolute"
                                                       href="{{route('cart.remove',['course'=>$course])}}"><i
                                                                class="fa fa-times"></i></a>
                                                    <div class="course-list-img-text">
                                                        <div class="course-list-img"
                                                             @if($course->course_image != "") style="background-image: url({{asset('storage/uploads/'.$course->course_image)}})" @endif >

                                                        </div>
                                                        <div class="course-list-text">
                                                            <h3>
                                                                <a href="{{ route('courses.show', [$course->slug]) }}">{{$course->title}}</a>
                                                            </h3>
                                                            <div class="course-meta">
                                                                <span class="course-category bold-font"><a
                                                                            href="#">@if($course->free == 1)
                                                                            <span>{{trans('labels.backend.bundles.fields.free')}}</span>
                                                                        @else
                                                                            <span> {{$appCurrency['symbol'].' '.$course->price}}</span>
                                                                        @endif</a></span>
                                                                <span class="bold-font">{{$course->category->name}}</span>
                                                                <div class="course-rate ul-li">
                                                                    <ul>
                                                                        @for($i=1; $i<=(int)$course->rating; $i++)
                                                                            <li><i class="fas fa-star"></i></li>
                                                                        @endfor
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="course-type-list">
                                                        <span>{{class_basename($course)}}</span>
                                                    </div>
                                                </td>
                                                <td>{{($course->start_date != "") ? $course->start_date : 'N/A'}}</td>
                                            </tr>
                                        @endforeach
                                    @else
                                        <tr>
                                            <td colspan="4">@lang('labels.frontend.cart.empty_cart')</td>
                                        </tr>
                                    @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        @if(count($courses) > 0)
                            @if(  (config('payment_offline_active') == 0)  &&(config('payment_bank_active') == 0) )
                                <div class="order-payment">
                                    <div class="section-title-2 headline text-left">
                                        <h2>@lang('labels.frontend.cart.no_payment_method')</h2>
                                    </div>
                                </div>
                            @else
                                <div class="order-payment">
                                    <div class="section-title-2  headline text-left">
                                        <h2>@lang('labels.frontend.cart.order_payment')</h2>
                                    </div>
                                    <div id="accordion">
                                        @if(config('payment_bank_active') == 1)
                                                <div class="payment-method w-100 mb-0">
                                                    <div class="payment-method-header">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="method-header-text">
                                                                    <div class="radio">
                                                                        <label>
                                                                            <input data-toggle="collapse"
                                                                                   href="#collapsePaymentBank" type="radio"
                                                                                   name="paymentMethod" value="0">
                                                                            @lang('labels.frontend.cart.bank_payment')
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="check-out-form collapse disabled" id="collapsePaymentBank"
                                                         data-parent="#accordion">
                                                        <p> @lang('labels.frontend.cart.bank_payment_note')</p>
                                                        <p>{{ config('payment_bank_instruction')  }}</p>
                                                        <form accept-charset="UTF-8"
                                                              action="{{route('cart.bank.payment')}}"
                                                              class="require-validation"
                                                              id="bank-payment-form"
                                                              enctype="multipart/form-data"
                                                              method="POST">

                                                            <div style="margin:0;padding:0;display:inline">
                                                                <input name="utf8" type="hidden"
                                                                       value="✓"/>
                                                                @csrf
                                                            </div>


                                                            <div class="payment-info">
                                                                <label class=" control-label">Depositor Name
                                                                    :</label>
                                                                <input type="text" autocomplete='off'
                                                                       class="form-control required "
                                                                       placeholder="Enter Depositor Name"
                                                                       value="" name="depositor_name" >
                                                            </div>
                                                            <div class="payment-info">
                                                                <label class=" control-label">Ref No.
                                                                    :</label>
                                                                <input autocomplete='off' type="text"
                                                                       class="form-control required "
                                                                       placeholder="Enter reference number for Bank Receipt"
                                                                       value="" name="bankDepositPaymentRefNo">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Bank Branch
                                                                    :</label>
                                                                <input type="text" class="form-control  required"
                                                                       placeholder="Enter Bank Branch"
                                                                       value="" name="bankBranch">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Deposit Amount
                                                                    :</label>
                                                                <input type="number" class="form-control  required"
                                                                       placeholder="Enter Amount"
                                                                       value="" name="bankDepositAmount">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Payment Date
                                                                    :</label>
                                                                <input type="date" class="form-control  required"
                                                                       value="" name="bankDepositDate">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Upload Receipt
                                                                    :</label>
                                                                <input type="file" class="form-control  required" required name="file" accept="image/*,.pdf">
                                                            </div>

                                                            <button type="submit"
                                                                    class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">
                                                                @lang('labels.frontend.cart.pay_now') <i
                                                                        class="fas fa-caret-right"></i>
                                                            </button>
                                                            <div class="row mt-3">
                                                                <div class="col-12 error form-group d-none">
                                                                    <div class="alert-danger alert">
                                                                        @lang('labels.frontend.cart.stripe_error_message')
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
{{--                                                        <form method="post" action="{{route('cart.offline.payment')}}">--}}
{{--                                                            @csrf--}}
{{--                                                            <button type="submit"--}}
{{--                                                                    class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">--}}
{{--                                                                @lang('labels.frontend.cart.request_assistance') <i--}}
{{--                                                                        class="fas fa-caret-right"></i>--}}
{{--                                                            </button>--}}
{{--                                                        </form>--}}
                                                    </div>
                                                </div>
                                            @endif
                                        @if(config('payment_offline_active') == 1)
                                            <div class="payment-method w-100 mb-0">
                                                <div class="payment-method-header">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="method-header-text">
                                                                <div class="radio">
                                                                    <label>
                                                                        <input data-toggle="collapse"
                                                                               href="#collapsePaymentThree" type="radio"
                                                                               name="paymentMethod" value="2">
                                                                        @lang('labels.frontend.cart.offline_payment')
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="check-out-form collapse disabled" id="collapsePaymentThree"
                                                     data-parent="#accordion">
                                                    <p> @lang('labels.frontend.cart.offline_payment_note')</p>
                                                    <p>{{ config('payment_offline_instruction')  }}</p>
                                                    <form method="post" action="{{route('cart.offline.payment')}}">
                                                        @csrf
                                                        <button type="submit"
                                                                class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">
                                                            @lang('labels.frontend.cart.request_assistance') <i
                                                                    class="fas fa-caret-right"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        @endif

                                        @if(config('payment_momo_active') == 1)
                                                <div class="payment-method w-100 mb-0">
                                                    <div class="payment-method-header">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="method-header-text">
                                                                    <div class="radio">
                                                                        <label>
                                                                            <input data-toggle="collapse"
                                                                                   href="#collapsePaymentMomo" type="radio"
                                                                                   name="paymentMethod" value="1">
                                                                            @lang('labels.frontend.cart.momo_payment')
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="check-out-form collapse disabled" id="collapsePaymentMomo"
                                                         data-parent="#accordion">
                                                        <p> @lang('labels.frontend.cart.momo_payment_note')</p>
                                                        <p>{{ config('payment_momo_instruction')  }}</p>
                                                        <form accept-charset="UTF-8"
                                                              action="{{route('cart.mobile.payment')}}"
                                                              class="require-validation"
                                                              id="mobile-payment-form"
                                                              method="POST">

                                                            <div style="margin:0;padding:0;display:inline">
                                                                <input name="utf8" type="hidden"
                                                                       value="✓"/>
                                                                @csrf
                                                            </div>


                                                            <div class="payment-info">
                                                                <label class=" control-label"> Mobile Depositor Name
                                                                    :</label>
                                                                <input type="text" autocomplete='off'
                                                                       class="form-control required "
                                                                       placeholder="Enter Depositor Name"
                                                                       value="" name="mobileMoneyDepositorNames" >
                                                            </div>
                                                            <div class="payment-info">
                                                                <label class=" control-label">Ref No.
                                                                    :</label>
                                                                <input autocomplete='off' type="text"
                                                                       class="form-control required "
                                                                       placeholder="Enter reference number for Mobile payment sms"
                                                                       value="" name="mobileMoneyPaymentRefNo">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Mobile Phone
                                                                    :</label>
                                                                <input type="text" class="form-control  required"
                                                                       placeholder="Enter Mobile phone used for Paying "
                                                                       value="" name="mobileMoneyPhoneNumber">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Deposit Amount
                                                                    :</label>
                                                                <input type="number" class="form-control  required"
                                                                       placeholder="Enter Amount"
                                                                       value="" name="mobileMoneyAmount">
                                                            </div>
                                                            <div class="payment-info ">
                                                                <label class=" control-label">Payment Date
                                                                    :</label>
                                                                <input type="date" class="form-control  required"
                                                                       value="" name="mobileMoneyDate">
                                                            </div>

                                                            <button type="submit"
                                                                    class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">
                                                                @lang('labels.frontend.cart.pay_now') <i
                                                                        class="fas fa-caret-right"></i>
                                                            </button>
                                                            <div class="row mt-3">
                                                                <div class="col-12 error form-group d-none">
                                                                    <div class="alert-danger alert">
                                                                        @lang('labels.frontend.cart.stripe_error_message')
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        {{--                                                        <form method="post" action="{{route('cart.offline.payment')}}">--}}
                                                        {{--                                                            @csrf--}}
                                                        {{--                                                            <button type="submit"--}}
                                                        {{--                                                                    class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">--}}
                                                        {{--                                                                @lang('labels.frontend.cart.request_assistance') <i--}}
                                                        {{--                                                                        class="fas fa-caret-right"></i>--}}
                                                        {{--                                                            </button>--}}
                                                        {{--                                                        </form>--}}
                                                    </div>
                                                </div>
                                            @endif

                                            <div class="payment-method w-100 mb-0">
                                                <div class="payment-method-header">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="method-header-text">
                                                                <div class="radio">
                                                                    <label>
                                                                        <input data-toggle="collapse"
                                                                               href="#collapsePaymentSponsor" type="radio"
                                                                               name="paymentMethod" value="0">
                                                                        @lang('labels.frontend.cart.sponsor_payment')
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="check-out-form collapse disabled" id="collapsePaymentSponsor"
                                                     data-parent="#accordion">
                                                    <p> @lang('labels.frontend.cart.sponsor_payment_note')</p>
                                                    <p>{{ config('payment_sponsor_instruction')  }}</p>
                                                    <form accept-charset="UTF-8"
                                                          action="{{route('cart.sponsor.payment')}}"
                                                          class="require-validation"
                                                          id="bank-payment-form"
                                                          enctype="multipart/form-data"
                                                          method="POST">

                                                        <div style="margin:0;padding:0;display:inline">
                                                            <input name="utf8" type="hidden"
                                                                   value="✓"/>
                                                            @csrf
                                                        </div>

                                                        <div class="payment-info">
                                                            <label class=" control-label">Sponsor Name
                                                                :</label>
                                                            <?php
                                                            $sponsors=\App\Models\Sponsorship::all();
                                                            ?>
                                                            <select name="sponsorName" class="form-control required">
                                                                <option value="" selected>Select Sponsor Name</option>
                                                                @foreach($sponsors as $sponsor)
                                                                    <option value="{{$sponsor->id}}" >{{$sponsor->sponsor_name}}</option>
                                                                @endforeach
                                                            </select>
                                                        </div>
                                                        <div class="payment-info">
                                                            <label class=" control-label">Ref No.
                                                                :</label>

                                                            <input autocomplete='off' type="text"
                                                                   class="form-control required "
                                                                   placeholder="Enter reference number for Sponsor Receipt or Sponsor name"
                                                                   value="" name="sponsorDepositPaymentRefNo">
                                                        </div>
                                                        <div class="payment-info">
                                                            <label class=" control-label">Deposit Amount
                                                                :</label>
                                                            <input type="number" class="form-control  required"
                                                                   placeholder="Enter Amount"
                                                                   value="" name="sponsorDepositAmount">
                                                        </div>
                                                        <div class="payment-info ">
                                                            <label class=" control-label">Payment Date
                                                                :</label>
                                                            <input type="date" class="form-control  required"
                                                                   value="" name="sponsorDepositDate">
                                                        </div>
                                                        <div class="payment-info ">
                                                            <label class=" control-label">Upload Receipt/Document
                                                                :</label>
                                                            <input type="file" class="form-control  required" required name="file" accept="image/*,.pdf">
                                                        </div>

                                                        <button type="submit"
                                                                class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">
                                                            @lang('labels.frontend.cart.pay_now') <i
                                                                    class="fas fa-caret-right"></i>
                                                        </button>
                                                        <div class="row mt-3">
                                                            <div class="col-12 error form-group d-none">
                                                                <div class="alert-danger alert">
                                                                    @lang('labels.frontend.cart.stripe_error_message')
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    {{--                                                        <form method="post" action="{{route('cart.offline.payment')}}">--}}
                                                    {{--                                                            @csrf--}}
                                                    {{--                                                            <button type="submit"--}}
                                                    {{--                                                                    class="text-white genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">--}}
                                                    {{--                                                                @lang('labels.frontend.cart.request_assistance') <i--}}
                                                    {{--                                                                        class="fas fa-caret-right"></i>--}}
                                                    {{--                                                            </button>--}}
                                                    {{--                                                        </form>--}}
                                                </div>
                                            </div>
                                    </div>

                                    <div class="terms-text pb45 mt25">
                                        <p>@lang('labels.frontend.cart.confirmation_note')</p>
                                    </div>
                                </div>
                            @endif
                        @endif
                    </div>

                    <div class="col-md-3">
                        <div class="side-bar-widget first-widget">
                            <h2 class="widget-title text-capitalize">@lang('labels.frontend.cart.order_detail')</h2>
                            <div class="sub-total-item">
                                @if(count($courses) > 0)
                                    <div class="purchase-list py-3 ul-li-block">
                                        @include('frontend.cart.partials.order-stats')
                                    </div>
                                @else
                                    <div class="purchase-list mt15 ul-li-block">

                                        <div class="in-total text-uppercase">@lang('labels.frontend.cart.total') <span>{{$appCurrency['symbol']}}
                                                0.00</span></div>
                                    </div>

                                @endif
                            </div>
                        </div>
                        @if($global_featured_course != "")
                            <div class="side-bar-widget">
                                <h2 class="widget-title text-capitalize">@lang('labels.frontend.blog.featured_course')</h2>
                                <div class="featured-course">
                                    <div class="best-course-pic-text relative-position pt-0">
                                        <div class="best-course-pic relative-position "
                                             style="background-image: url({{asset('storage/uploads/'.$global_featured_course->course_image)}})">

                                            @if($global_featured_course->trending == 1)
                                                <div class="trend-badge-2 text-center text-uppercase">
                                                    <i class="fas fa-bolt"></i>
                                                    <span>@lang('labels.frontend.badges.trending')</span>
                                                </div>
                                            @endif
                                            @if($global_featured_course->free == 1)
                                                <div class="trend-badge-3 text-center text-uppercase">
                                                    <i class="fas fa-bolt"></i>
                                                    <span>@lang('labels.backend.courses.fields.free')</span>
                                                </div>
                                            @endif

                                        </div>
                                        <div class="best-course-text" style="left: 0;right: 0;">
                                            <div class="course-title mb20 headline relative-position">
                                                <h3>
                                                    <a href="{{ route('courses.show', [$global_featured_course->slug]) }}">{{$global_featured_course->title}}</a>
                                                </h3>
                                            </div>
                                            <div class="course-meta">
                                                <span class="course-category"><a
                                                            href="{{route('courses.category',['category'=>$global_featured_course->category->slug])}}">{{$global_featured_course->category->name}}</a></span>
                                                <span class="course-author">{{ $global_featured_course->students()->count() }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End  of Checkout content
        ============================================= -->

@endsection

@push('after-scripts')
    @if(config('services.stripe.active') == 1)
        <script type="text/javascript" src="{{asset('js/stripe-form.js')}}"></script>
    @endif
    <script>
        $(document).ready(function () {
            $(document).on('click', 'input[type="radio"]:checked', function () {
                $('#accordion .check-out-form').addClass('disabled')
                $(this).closest('.payment-method').find('.check-out-form').removeClass('disabled')
            })

            $(document).on('click', '#applyCoupon', function () {
                var coupon = $('#coupon');
                if (!coupon.val() || (coupon.val() == "")) {
                    coupon.addClass('warning');
                    $('#coupon-error').html("<small>{{trans('labels.frontend.cart.empty_input')}}</small>").removeClass('d-none')
                    setTimeout(function () {
                        $('#coupon-error').empty().addClass('d-none')
                        coupon.removeClass('warning');

                    }, 5000);
                } else {
                    $('#coupon-error').empty().addClass('d-none')
                    $.ajax({
                        method: 'POST',
                        url: "{{route('cart.applyCoupon')}}",
                        data: {
                            _token: '{{csrf_token()}}',
                            coupon: coupon.val()
                        }
                    }).done(function (response) {
                        if (response.status === 'fail') {
                            coupon.addClass('warning');
                            $('#coupon-error').removeClass('d-none').html("<small>" + response.message + "</small>");
                            setTimeout(function () {
                                $('#coupon-error').empty().addClass('d-none');
                                coupon.removeClass('warning');

                            }, 5000);
                        } else {
                            $('.purchase-list').empty().html(response.html)
                            $('#applyCoupon').removeClass('btn-dark').addClass('btn-success')
                            $('#coupon-error').empty().addClass('d-none');
                            coupon.removeClass('warning');
                        }
                    });

                }
            });


            $(document).on('click','#removeCoupon',function () {
                $.ajax({
                    method: 'POST',
                    url: "{{route('cart.removeCoupon')}}",
                    data: {
                        _token: '{{csrf_token()}}',
                    }
                }).done(function (response) {
                    $('.purchase-list').empty().html(response.html)
                });
            })

        })
    </script>

@endpush
