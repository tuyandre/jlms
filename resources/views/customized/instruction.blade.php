
@extends('customized.shared.master')

@section('title','INSTRUCTION')
@section('css')
    <link rel="stylesheet" href="{{asset('customization/frontend/css/instructions.css')}}" />
@endsection
@section('content')

    <div class="slider-area" style="min-height: 90%">
        <div class="slider-active">
            <div class="slider-all">
                <div class="slider-text-wrapper">
                    <div class="table">
                        <div class="table-cell">


                            <div class="container" style="margin-top: 40px;">

                                <form action="#" method="post" class="form-basic form-horizontal how" style=" border:dotted 2px #2395ec;background-color: #ffffff;padding-top: 50px">

                                    <div class="form-title-row">
                                        <h1>Application Requirements</h1>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <ol type="1">
                                                <li style="font-weight: bold">Passport photo size image

                                                    <ol type="i">
                                                        <li>Image type - png, jpg, jpeg</li>
                                                        <li>Maximum image size - 2MBs</li>
                                                        <li>Maximum Pixel size - (200 x 200) Pixels</li>

                                                    </ol>

                                                <li style="font-weight: bold">National ID</li>
                                                <li style="font-weight: bold">Payment details
                                                    <ol type="i">
                                                        <li>Copy of payment slip if mode of payment is not mobile money</li>
                                                        <li>Payment slip file type - jpeg,jpg, png, pdf, docx,doc</li>
                                                        <li>Maximum file size - 5MBs</li>

                                                    </ol>

                                                <li style="font-weight: bold">Academic History
                                                    <ol type="i">
                                                        <li>Previous academic certificates and or, transcrips</li>
                                                        <li>File type - jpeg,jpg, png, pdf, docx,doc</li>
                                                        <li>Maximum file size - 5MBs</li>

                                                    </ol>
                                                </li>
                                            </ol>

                                            <center>
                                                <a href="{{route('frontend.jsms.apply')}}" class="btn btn-info" style="margin-top: 10px">
                                                    Continue &nbsp; <span class="fa fa-arrow-circle-right"></span>
                                                </a>
                                            </center>




                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>


                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



@endsection
@section('js')



@endsection


