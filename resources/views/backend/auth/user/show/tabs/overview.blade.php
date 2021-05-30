<div class="row">
    <div class="col">
        <div class="table-responsive">
        <table class="table table-hover ">
            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.avatar')</th>
                <td><img src="{{ $user->picture }}" class="user-profile-image" /></td>
            </tr>
        </table>
        </div>
    </div>
</div>
<hr>
<div class="row" style="text-align: center !important;">
    <div class="col-md-4 offset-4">
        <h2 style="text-align: center !important;"> <strong style="color: seagreen;"> {{$user->name}}  </strong>DETAIL</h2>
        {{--<p>{{$user}}</p>--}}
    </div>

</div>
<hr>

<div class="row">
<div class="col-md-6 col-lg-6 col-xl-6 col-xs-6">
    <div class="table-responsive">
        <table class="table table-hover table-no-bordered">
            <tr>
                <th>First Name</th>
                <td>{{ $user->first_name }}</td>
            </tr>
            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.email')</th>
                <td>{{ $user->email }}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{{ $user->gender }}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{{ $user->address }}</td>
            </tr>
            <tr>
                <th>Program</th>
                <td>{{ $user->program }}</td>
            </tr>
            <tr>
                <th>Identity</th>
                <td>{{ $user->nid }}</td>
            </tr>
            <tr>
                <th>User Id</th>
                <td>{{ $user->username }}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>{{ $user->country }}</td>
            </tr>
            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.status')</th>
                <td>{!! $user->status_label !!}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.timezone')</th>
                <td>{{ $user->timezone }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.last_login_at')</th>
                <td>
                    @if($user->last_login_at)
                        {{ timezone()->convertToLocal($user->last_login_at) }}
                    @else
                        N/A
                    @endif
                </td>
            </tr>
        </table>
    </div>
</div><!--table-responsive-->


<div class="col-md-6 col-lg-6 col-xl-6 col-xs-6">
    <div class="table-responsive">
        <table class="table table-hover table-no-bordered">
            <tr>
                <th>Last Name</th>
                <td>{{ $user->last_name }}</td>
            </tr>
            <tr>
                <th>Telephone</th>
                <td>{{ $user->phone }}</td>
            </tr>

            <tr>
                <th>Date of Birth</th>
                <td>{{ $user->dob }}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{{ $user->city }}</td>
            </tr>
            <tr>
                <th>Education</th>
                <td>{{ $user->education }}</td>
            </tr>
            <tr>
                <th>SponsorShip</th>
                <td>{{ $user->sponsorship }}</td>
            </tr>
            <tr>
                <th>Source of Information</th>
                <td>{{ $user->information }}</td>
            </tr>
            <tr>
                <th>Residence Country</th>
                <td>{{ $user->residence }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.confirmed')</th>
                <td>{!! $user->confirmed_label !!}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.timezone')</th>
                <td>{{ $user->timezone }}</td>
            </tr>
            <tr>
                <th>@lang('labels.backend.access.users.tabs.content.overview.last_login_ip')</th>
                <td>{{ $user->last_login_ip ?? 'N/A' }}</td>
            </tr>
        </table>
    </div>
</div><!--table-responsive-->



</div>