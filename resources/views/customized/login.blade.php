<!doctype html>
<html lang="zxx" class="no-js">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>JDD AUDITORS</title>
    <link rel="shortcut icon" href="{{asset('customization/frontend/img/logo.png')}}" type="image/x-icon" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{asset('customization/fontawesome/css/all.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/fontawesome/css/all.min.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/frontend/css/welcome.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/bootstrap/dist/css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/bootstrap/dist/css/bootstrap.min.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/frontend/css/welcomeForm.css')}}" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<style>
    html {
        height: 100%;
        width: 100%;
        -ms-overflow-style: none;
        clear: both;
    }

    ::-webkit-scrollbar {
        display: none;
        width: 0 !important
    }

    .slider-area {
        margin: auto;
        height: 100%;
        width: 100%;
        overflow: auto;
        padding-right: 20px;
        right: 0;
        overflow-x: hidden;
        background-image: none;
    }

    label {
        display: inline-block;
        line-height: 30px;
    }
</style>

<body>
<![endif]-->
<!-- Body main wrapper start -->
<div class="wrapper" style="height: 100vh;">
    <!-- Start of header area -->

    <div class="slider-area" style="background: white;">
        <div class="slider-active">
            <div class="slider-all">
                <div class="slider-text-wrapper">
                    <div class="table">
                        <div class="table-cell">
                            <div id="container" style="margin-top: 80px;margin-left: 20px">
                                <div class="form">
                                    <center style="margin-bottom: 20px">
                                        <a href="{{url('/')}}">     <img src="{{asset('customization/frontend/img/logo.png')}}" style="width: 125px !important;" /></a>
                                    </center>

                                    <ul class="nav nav-tabs new-session-tabs">
                                        <li class="active" style="width: 50%"><a href="#login" data-toggle="tab">Log In</a></li>
                                        <li style="width: 50%">
                                            <a href="{{route('frontend.instructions')}}">Apply</a>
                                        </li>


                                    </ul>

                                    <div class="tab-content">

                                        <div class="tab-pane fade in active login-pane" id="login">
                                         <form action="{{route('frontend.auth.login.post')}}" method="POST" id="loginForm" enctype="multipart/form-data">
                                                @csrf
                                                <label  for="username">Username</label>

                                                <input type="text" class="form-control @error('email') is-invalid @enderror" style="height: 40px;background: rgb(240, 255, 1456);" value="{{ old('email') }}" required autocomplete="email" autofocus name="email" id="username"/>

                                             @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                             <span class="error-response text-danger"></span>
                                             <span class="success-response text-success">{{(session()->get('flash_success'))}}</span>
                                             <br>
                                             <span id="login-email-error" class="text-danger"></span>
                                                <label for="password">Password</label>

                                                <input type="password" class="form-control @error('password') is-invalid @enderror" style="height: 40px;background: rgb(240, 255, 1456);"
                                                       name="password" id="password" required autocomplete="current-password"/>
                                                @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                     <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                                <span id="login-password-error" class="text-danger"></span>
                                                <label>

                                                    <input type="checkbox" name="remember" style="margin-right: 10px;"
                                                        {{ old('remember') ? 'checked' : '' }}>Remember Me

                                                </label>
                                                <br>



                                                <p class="forgot col-sm-12">
                                                    @if (Route::has('password.request'))
                                                    <a href="{{ route('password.request') }}">Forgot Password?</a></p>
                                                @endif
                                                <div class="form-group" style="margin-bottom: 49px;">

                                                    <div class="col-md-4 ">
                                                    </div>

                                                    <div class="col-md-4">
                                                        <button type="submit" style="width: 100%;height: 40px;background: #2395ec;color: #FFFFFF">
                                                            Login &nbsp; <span class="fa fa-arrow-circle-right"></span>
                                                        </button>
                                                    </div>

                                                    <div class="col-md-4 pull-right">

                                                    </div>

                                                </div>

                                            </form>
                                        </div>

                                    </div><!-- tab-content -->

                                </div> <!-- /form -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- start scrollUp
        ============================================ -->
    <div id="toTop">
        <i class="fa fa-chevron-up"></i>
    </div>

</div>
</body>
<script>
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        var $this = $(this);
        $('.success-response').empty();
        $('.error-response').empty();

        $.ajax({
            type: $this.attr('method'),
            url: $this.attr('action'),
            data: $this.serializeArray(),
            dataType: $this.data('type'),
            success: function (response) {
                $('#login-email-error').empty();
                $('#login-password-error').empty();
                $('#login-captcha-error').empty();

                if (response.errors) {
                    if (response.errors.email) {
                        $('#login-email-error').html(response.errors.email[0]);
                    }
                    if (response.errors.password) {
                        $('#login-password-error').html(response.errors.password[0]);
                    }

                    var captcha = "g-recaptcha-response";
                    if (response.errors[captcha]) {
                        $('#login-captcha-error').html(response.errors[captcha][0]);
                    }
                }
                if (response.success) {
                    $('#loginForm')[0].reset();
                    if (response.redirect == 'back') {
                        location.reload();
                    } else {
                        window.location.href = "{{route('admin.dashboard')}}"
                    }
                }
            },
            error: function (jqXHR) {
                var response = $.parseJSON(jqXHR.responseText);
                console.log(jqXHR)
                if (response.message) {
                    $('#login').find('span.error-response').html(response.message)
                }
            }
        });
    });
</script>
<script type="text/javascript" src="{{asset('customization/fontawesome/js/all.js')}}" ></script>
<script type="text/javascript" src="{{asset('customization/fontawesome/js/all.min.js')}}" ></script>
<script type="text/javascript" src="{{asset('customization/bootstrap/dist/js/bootstrap.js')}}" ></script>
<script type="text/javascript" src="{{asset('customization/bootstrap/dist/js/bootstrap.min.js')}}" ></script>
{{--<script type="text/javascript" src="{{asset('customization/frontend/js/welcome.js')}}" ></script>--}}
{{--<script type="text/javascript" src="{{asset('customization/frontend/js/application.js')}}" ></script>--}}
<script>
    (function () {
        document.forms['loginForm'].elements['username'].focus();
    })();
</script>

</html>
