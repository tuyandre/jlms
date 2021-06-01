<div class="row">
    <div class="col">
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
                <tr>
                    <th>@lang('labels.frontend.user.profile.avatar')</th>
                    <td><img src="{{ $user->picture }}" height="100px" class="user-profile-image" /></td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6 col-lg-6 col-xs-6">
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
                <tr>
                    <th>@lang('labels.frontend.user.profile.name')</th>
                    <td>{{ $user->name }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.nid')</th>
                    <td>{{ $user->nid }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.education')</th>
                    <td>{{ $user->education }}</td>
                </tr>

                <tr>
                    <th>@lang('labels.frontend.user.profile.phone')</th>
                    <td>{{ $user->phone }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.address')</th>
                    <td>{{ $user->address }}</td>
                </tr>
                <tr>
                    <th>Dat of Birth</th>
                    <td>{{ $user->dob }}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{{ $user->country }}</td>
                </tr>

                <tr>
                    <th>@lang('labels.frontend.user.profile.created_at')</th>
                    <td>{{ timezone()->convertToLocal($user->created_at) }} ({{ $user->created_at->diffForHumans() }})</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="col-md-6 col-lg-6 col-xs-6">
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">

                <tr>
                    <th>@lang('labels.frontend.user.profile.email')</th>
                    <td>{{ $user->email }}</td>
                </tr>
                <tr>
                    <th>UserName</th>
                    <td>{{ $user->username }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.program')</th>
                    <td>{{ $user->program }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.sponsorship')</th>
                    <td>{{ $user->sponsorship }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.city')</th>
                    <td>{{ $user->city }}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{{ $user->gender }}</td>
                </tr>
                <tr>
                    <th>Residence</th>
                    <td>{{ $user->residence }}</td>
                </tr>
                <tr>
                    <th>@lang('labels.frontend.user.profile.last_updated')</th>
                    <td>{{ timezone()->convertToLocal($user->updated_at) }} ({{ $user->updated_at->diffForHumans() }})</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">


        @if($logged_in_user->hasRole('teacher'))
            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.status')</th>
                <td>{!! $logged_in_user->status_label !!}</td>
            </tr>
            <tr>
                <th>@lang('labels.backend.general_settings.user_registration_settings.fields.gender')</th>
                <td>{!! $logged_in_user->gender !!}</td>
            </tr>
            @php
                $teacherProfile = $logged_in_user->teacherProfile?:'';
                $payment_details = $logged_in_user->teacherProfile?json_decode($logged_in_user->teacherProfile->payment_details):new stdClass();
            @endphp
            <tr>
                <th>@lang('labels.teacher.facebook_link')</th>
                <td>{!! $teacherProfile->facebook_link !!}</td>
            </tr>
            <tr>
                <th>@lang('labels.teacher.twitter_link')</th>
                <td>{!! $teacherProfile->twitter_link !!}</td>
            </tr>
            <tr>
                <th>@lang('labels.teacher.linkedin_link')</th>
                <td>{!! $teacherProfile->linkedin_link !!}</td>
            </tr>
            <tr>
                <th>@lang('labels.teacher.payment_details')</th>
                <td>{!! $teacherProfile->payment_method !!}</td>
            </tr>
            @if($payment_details)
                @if($teacherProfile->payment_method == 'bank')
                <tr>
                    <th>@lang('labels.teacher.bank_details.name')</th>
                    <td>{!! $payment_details->bank_name !!}</td>
                </tr>
                <tr>
                    <th>@lang('labels.teacher.bank_details.bank_code')</th>
                    <td>{!! $payment_details->ifsc_code !!}</td>
                </tr>
                {{--<tr>--}}
                    {{--<th>@lang('labels.teacher.bank_details.account')</th>--}}
                    {{--<td>{!! $payment_details->account_number !!}</td>--}}
                {{--</tr>--}}
                {{--<tr>--}}
                    {{--<th>@lang('labels.teacher.bank_details.holder_name')</th>--}}
                    {{--<td>{!! $payment_details->account_name !!}</td>--}}
                {{--</tr>--}}
                @else
                {{--<tr>--}}
                    {{--<th>@lang('labels.teacher.paypal_email')</th>--}}
                    {{--<td>{!! $payment_details->paypal_email !!}</td>--}}
                {{--</tr>--}}
                @endif
            @endif
        @endif



        @if(config('registration_fields') != NULL)
            @php
                $fields = json_decode(config('registration_fields'));
            @endphp
            @foreach($fields as $item)
                <tr>
                    <th>{{__('labels.backend.general_settings.user_registration_settings.fields.'.$item->name)}}</th>
                    <td>{{$user[$item->name]}}</td>
                </tr>
            @endforeach
        @endif
    </table>
</div>
