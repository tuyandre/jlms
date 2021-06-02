@component('mail::message')
    # Hello **{{ $user->name }}**

    You are receiving this email because your Registration received successful for your account.

    Your Information Credential you will receive in next email after confirmation Payment:<br>

    Full Name **{{ $user->name }}** <br>
    Email **{{ $user->email }}** <br>


    <br>
    Please this link for login <a class="btn btn-info" style="font-weight:bold;" href="{{url('/')}}">Visit Website</a>
    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
