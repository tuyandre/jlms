<!doctype html>
<html lang="zxx" class="no-js">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="shortcut icon" href="{{asset('customization/frontend/img/logo.png')}}" type="image/x-icon" />
    <title>@yield('title') | JDD AUDITORS</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="layout" content="main" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('customization/fontawesome/css/all.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/fontawesome/css/all.min.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/frontend/css/welcome.css')}}" />
{{--    <link rel="stylesheet" href="{{asset('bootstrap/dist/css/bootstrap.css')}}" />--}}
{{--    <link rel="stylesheet" href="{{asset('bootstrap/dist/css/bootstrap.min.css')}}" />--}}
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript">
        icparContext = '2021jdd-portal'
    </script>
    @yield('css')

</head>
@yield('innerCss')
<body>
<!-- Body main wrapper start -->
<div class="wrapper" style="height: 100vh;">


    @include('customized.shared.header')

    @yield('content')

    @include('customized.shared.footer')


</div>


<!-- start scrollUp
    ============================================ -->
<div id="toTop">
    <i class="fa fa-chevron-up"></i>
</div>

@yield('js')
<!--style-customizer start -->
<script type="text/javascript" src="{{asset('customization/fontawesome/js/all.js')}}" ></script>
<script type="text/javascript" src="{{asset('customization/fontawesome/js/all.min.js')}}" ></script>
{{--<script type="text/javascript" src="{{asset('bootstrap/dist/js/bootstrap.js')}}" ></script>--}}
{{--<script type="text/javascript" src="{{asset('bootstrap/dist/js/bootstrap.min.js')}}" ></script>--}}
</body>
</html>
