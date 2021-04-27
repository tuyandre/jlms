<!doctype html>
<html lang="zxx" class="no-js">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>JDD AUDITORS</title>
    <link rel="shortcut icon" href="{{asset('frontend/img/logo.png')}}" type="image/x-icon" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{asset('fontawesome/css/all.css')}}" />
    <link rel="stylesheet" href="{{asset('fontawesome/css/all.min.css')}}" />
    <link rel="stylesheet" href="{{asset('frontend/css/welcome.css')}}" />
    <link rel="stylesheet" href="{{asset('bootstrap/dist/css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{asset('bootstrap/dist/css/bootstrap.min.css')}}" />
    <link rel="stylesheet" href="{{asset('frontend/css/welcomeForm.css')}}" />
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
                                        <img src="{{asset('frontend/img/logo.png')}}" style="width: 125px !important;" />
                                    </center>

                                    <ul class="nav nav-tabs new-session-tabs">
                                        <li class="active" style="width: 50%"><a href="#login" data-toggle="tab">Staff Sign Up</a></li>
                                    </ul>

                                    <div class="tab-content">

                                        <div class="tab-pane fade in active login-pane" id="login">

                                            <form action="{{ route('register') }}" method="POST" id="loginForm">
                                                @csrf
                                                <label  for="name">Full Name</label>

                                                <input type="text" class="form-control @error('name') is-invalid @enderror" style="height: 40px;background: rgb(240, 255, 1456);" value="{{ old('name') }}" required autocomplete="name" autofocus name="name" id="name"/>
                                                @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                                <label  for="email">Email</label>
                                                <input type="email" class="form-control @error('email') is-invalid @enderror" style="height: 40px;background: rgb(240, 255, 1456);" value="{{ old('email') }}" required autocomplete="email" autofocus name="email" id="email"/>
                                                @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                                <label for="password">Password</label>
                                                <input type="password" class="form-control @error('password') is-invalid @enderror" style="height: 40px;background: rgb(240, 255, 1456);"
                                                       name="password" id="password" required autocomplete="current-password"/>
                                                @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                     <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror



                                                <label for="password-confirm">Confirm Password</label>
                                                <input type="password" class="form-control" style="height: 40px;background: rgb(240, 255, 1456);"
                                                       name="password_confirmation" id="password-confirm" required autocomplete="new-password"/>
                                                <br>

                                                <div class="form-group" style="margin-bottom: 49px;">
                                                    <br><hr>
                                                    <div class="col-md-4 ">
                                                        <a href="{{route('frontend.auth.adminLogin')}}" class="btn btn-info"  style="width: 100%;height: 40px;background: #2395ec;color: #FFFFFF">
                                                            Log In &nbsp; <span class="fa fa-lock-open"></span>
                                                        </a>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <button type="submit" style="width: 100%;height: 40px;background: #2395ec;color: #FFFFFF">
                                                            Register &nbsp; <span class="fa fa-arrow-circle-right"></span>
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
<script type="text/javascript" src="{{asset('fontawesome/js/all.js')}}" ></script>
<script type="text/javascript" src="{{asset('fontawesome/js/all.min.js')}}" ></script>
<script type="text/javascript" src="{{asset('bootstrap/dist/js/bootstrap.js')}}" ></script>
<script type="text/javascript" src="{{asset('bootstrap/dist/js/bootstrap.min.js')}}" ></script>
<script type="text/javascript" src="{{asset('frontend/js/welcome.js')}}" ></script>
<script type="text/javascript" src="{{asset('frontend/js/application.js')}}" ></script>
<script>
    (function () {
        document.forms['loginForm'].elements['username'].focus();
    })();
</script>

</html>
