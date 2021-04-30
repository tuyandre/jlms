@component('mail::message')
    # Hello **{{ $user->name }}**

    You are receiving this email because your Registration received successful for your account.

    Your Information Credential are detailed below:<br>

    Full Name **{{ $user->name }}** <br>
    Email **{{ $user->name }}** <br>
    Password **{{ $user->email }}**


    <br>
    Please this link for login <a class="btn btn-info" style="font-weight:bold;" href="{{url('/jsms/login')}}">LOGIN</a>
    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
