<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700" rel="stylesheet">

    <title>JDD AUDITORS : Student Card</title>
    <style>
        body {
            margin: 0 auto;
            padding: 0;
            background: white;
        }

        .left {
            left: 25px;
        }

        /*.right {*/
        /*    right: 25px;*/
        /*}*/

        .center {
            text-align: center;
        }

        /*.bottom {*/
        /*    position: absolute;*/
        /*    bottom: 25px;*/
        /*}*/

        #gradient {
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 150px;
        }

        #gradient:after {
            content: "";
            position: absolute;
            background: limegreen;
            /*background: #E9E2D0;*/
            left: 50%;
            margin-top: -67.5px;
            margin-left: -270px;
            padding-left: 20px;
            border-radius: 5px;
            width: 650px;
            height: 400px;
            z-index: -1;
        }

        #card {
            position: absolute;
            width: 600px;
            height: 350px;
            padding: 25px;
            padding-top: 15px;
            padding-bottom: 25px;
            left: 50%;
            top: 67.5px;
            margin-left: -250px;
            /*background: lightskyblue;*/
            background: #E9E2D0;
            box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
            z-index: 5;
        }

        #card img {
            width: 150px;
            float: left;
            border-radius: 5px;
            margin-right: 20px;
            /*-webkit-filter: sepia(1);*/
            /*-moz-filter: sepia(1);*/
            /*filter: sepia(1);*/
        }

        #card h2 {
            font-family: courier;
            color: #333;
            margin: 0 auto;
            padding: 0;
            font-size: 15pt;
        }

        #card p {
            font-family: Arial, sans-serif;
            color: #000;
            font-size: 11px;
        }

        #card span {
            font-family: Arial, sans-serif;
            font-size: 14px;
        }
    </style>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
<div id="gradient"></div>
<div id="card">
    <div class="row">
        <div class="col-md-6 offset-3">
            <img src="{{asset('/images/company.png')}}"/>

        </div>
{{--        <div class="col-md-8">--}}
{{--            <h3> <b>JDD & ASSOCIATES Ltd</b></h3>--}}
{{--        </div>--}}
    </div>
        <img src="{{asset('/students/passport/passport.png')}}"/>
{{--    <img style="width: 150px !important; height: 150px !important; " src="{{public_path('/storage/'.$data['photo'])}}"/>--}}
    <h2><b>STUDENT CARD</b></h2><p style="height: 5px"></p>
    <hr>
    <p>
        <b>NAMES:</b><span>Andre</span><br>
        <b>Reg No:</b><span>hdhdh</span><br>
        <b>PROGRAM:</b><span>CAT</span><br>
        <b>TELEPHONE:</b><span>0788744</span><br>
        <b>ISSUE DATE:</b><span>2021-3-2</span><br>
        <b>EXPIRATION DATE:</b><span>2021-23-12</span><br>
    </p>
    <div class="row">
        <div class="col-md-5">

        </div>
        <div class="col-md-7">
            <b>Registration Office</b><br>
            <b>www.jddauditors.com</b>
            {{--    </span>--}}
        </div>
    </div>



</div>
</body>
</html>