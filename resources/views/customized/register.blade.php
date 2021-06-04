@extends('customized.shared.master')

@section('title','APPLY')
@section('css')
    <link rel="stylesheet" href="{{asset('customization/frontend/css/welcomeForm.css')}}" />
    <link rel="stylesheet" href="{{asset('customization/frontend/css/apply.css')}}" />
@endsection
@section('content')

    <div class="slider-area" style="min-height: 90%">
        <div class="slider-active">
            <div class="slider-all">
                <div class="slider-text-wrapper">
                    <div class="table">
                        <div class="table-cell">


                            <div class="container" style="margin-top: 40px;">
                                <form action="{{route('application.jsms.submitApplication')}}" method="post" class="form-basic form-horizontal" style="background-color: #ffffff;padding-top: 50px" name="studentReg" id="studentReg">
                                    @csrf
                                    <h3>General Information</h3>
                                    <section>

                                        <label for="idNo">National ID No <font style="color: crimson">*</font></label>
                                        <input id="idNo" name="idNo" type="text" class="form-control required">
                                        <label for="program">Program <font style="color: crimson">*</font></label>

                                        <select name="program" id="program" class="form-control required" data-validation="required">
                                            <option value="">-Select Program-</option>
                                            <option value="CAT" >CAT</option>
                                            <option value="CPA" >CPA</option>
                                        </select>


                                        <label for="educationLevel">Education Level <font style="color: crimson">*</font></label>

                                        <select name="educationLevel" id="educationLevel" class="form-control required">
                                            <option value="">-Choose Education Level-</option>
                                            <option value="PHD" >PHD</option>
                                            <option value="Masters" >Masters</option>
                                            <option value="Bachelors" >Bachelors</option>
                                            <option value="Diploma" >Diploma</option>
                                            <option value="Secondary High School" >Secondary School Sertificate</option>
                                            <option value="Others" >Others</option>
                                        </select>

                                        <label for="country">Country Of Residence <font style="color: crimson">*</font></label>
                                        <?php
                                        $countries=\App\Models\Country::all();
                                        ?>
                                        <select name="country" id="country" class="form-control required" data-validation="required">
                                            <option value="">-Choose your country-</option>
                                            @foreach($countries as $country)
                                            <option value="{{$country->country_name}}" >{{$country->country_name}}</option>
                                            @endforeach
                                        </select>

                                        <label for="city">City<font style="color: crimson">*</font></label>

                                        <input type="text" class="form-control required" name="city" id="city" placeholder="City">
                                        <label for="city">How Did You Learn About Us? <font style="color: crimson">*</font></label>
                                        <select name="learnAboutUs" id="select" style="width: 100%" class="form-control required">
                                            <option value="">- Select Value -</option>
                                            <option value="YouContactedMe" >You Contacted Me</option>
                                            <option value="Search Engine" >Search Engine</option>
                                            <option value="Social Network" >Social Network</option>
                                            <option value="Advertisement" >Advertisement</option>
                                            <option value="Friend" >Friend</option>
                                            <option value="Event" >Event</option>
                                            <option value="ForumOrBlog" >ForumOrBlog</option>
                                            <option value="Other" >Other</option>
                                        </select>
                                    </section>

                                    <h3>Bio Information</h3>
                                    <section>

                                        <label for="fname">First Name <font style="color: crimson">*</font></label>

                                        <input type="text" name="firstName" class="form-control required" id="fname" placeholder="First Name">


                                        <label for="lname">Last Name <font style="color: crimson">*</font></label>

                                        <input type="text" name="lastName" class="form-control required" id="lname" placeholder="Last Name">

                                        <label for="oname">Other Name</label>

                                        <input type="text" name="otherName" class="form-control " id="oname" placeholder="Other Name">


                                        <label for="dob">Date.Of.Birth <font style="color: crimson">*</font></label>

                                        <input type="date" name="dateOfBirth" id="dob" class="form-control required" placeholder="MM/DD/YYYY">


                                        <label for="passportPhoto">Passport Photo <font style="color: crimson">*</font></label>

                                        <input id="passport" type="file" name="passport" title=" " class="form-control input-ghost custom-file-input required">
                                        <input id="passportPhoto" type="text" name="passportPhoto" class="required hidd">

                                        <p id="photoAnchor" style="color: #00aaee">Choose File And Click Upload</p>

                                        <div style="display: none" id="passportDiv">
                                            <img alt="Passport photo" id='preview' src="" />
                                            <span class="input-group-btn">
                                                <button class="btn btn-default passportUpload" type="button">Upload</button>
                                            </span>
                                        </div>

                                        <label>
                                            <p style="text-align: left;margin-top: 10px"><b>Allowed file types: png, jpg (Max 2MBs). Max width 200 pixels</b>
                                            </p></label><br/>



                                        <label for="gender">Gender <font style="color: crimson">*</font></label>

                                        <select name="gender" id="gender" class="form-control required" style="width: 100%">
                                            <option value="">- Select Gender -</option>
                                            <option value="Male" >Male</option>
                                            <option value="Female" >Female</option>
                                        </select>


                                        <label for="nationality">Nationality <font style="color: crimson">*</font></label>

                                        <select name="nationality" id="nationality" class="form-control required" style="width: 100%" data-validation="required">
                                            <option value="">-Choose your country-</option>
                                            @foreach($countries as $country)
                                                <option value="{{$country->country_name}}" >{{$country->country_name}}</option>
                                            @endforeach
                                        </select>

                                    </section>

                                    <h3>Sponsorship And Contact</h3>
                                    <section>
                                        <label for="address">Student Address <font style="color: crimson">*</font></label>

                                        <input type="text" name="address" class="form-control required" id="address" placeholder="Your Address">

                                        <label for="email">Student Email Address <font style="color: crimson">*</font></label>

                                        <input type="email" name="email" class="form-control required email" id="email" placeholder="youremail@domain.com">


                                        <label for="contact1">Student Tel No1<font style="color: crimson">*</font></label>

                                        <input type="text" name="phoneNo" class="form-control required" id="contact1" placeholder="eg... +250 754678564">


                                        <label for="contact2">Phone No2 <font style="color: crimson">(Optional)</font></label>


                                        <input type="text" name="phoneNo2" class="form-control" id="contact2" placeholder="eg... +250 754678564">

                                        <label for="sponsorshipType"><b style="font-size: 17px">Sponsorship <font style="color: crimson">*</font>
                                            </b></label>

                                        <select name="sponsorshipType" id="sponsorshipType" class="form-control sponsor required">
                                            <option value="">-Choose Sponsorship-</option>
                                            <option value="SelfSponsored" selected>Self Sponsored</option>
                                            {{--<option value="Parent" >Parent</option>--}}
                                            {{--<option value="Guardian" >Guardian</option>--}}
                                            {{--<option value="WorkPlace" >WorkPlace</option>--}}
                                            <option value="Sponsored" >Sponsored</option>
                                            <option value="Others" >Others</option>
                                        </select>
                                        <div id="sponsorDetails" style="display: none">

                                            <label>Sponsor Names <font style="color: crimson">*</font></label>

                                            <input type="text" name="sponsorNameReg" class="form-control" id="sponsor_names" placeholder="Sponsor Names">

                                            <select name="sponsorID" id="sponsorNameMis" class="form-control sponsor">
                                            </select>

                                            <div id="sponsorTypeDetail">
                                            <label for="emailSponsor">Sponsor Email <font style="color: crimson">*</font></label>


                                            <input type="email" name="sponsorEmail" class="form-control email" id="emailSponsor" placeholder="sponsor@domain.com">

                                            <label for="contactSponsor">Sponsor Contact/Phone <font style="color: crimson">*</font></label>

                                            <input type="text" name="sponsorContact" class="form-control" id="contactSponsor" placeholder="+250 754678564">
                                            </div>
                                        </div>

                                    </section>

                                    <h3>Academic History</h3>
                                    <section>

                                        <div class="form-group" style="margin-top: 10px">
                                            <label class="col-md-4 control-label"></label>

                                            {{--<div class="col-md-6">--}}
                                                {{--<button type="button" id="add_document" style="width: 100px;margin: 0px;height: 40px;padding: 0!important;" class="btn btn-info repeater-button pull-left">--}}
                                                    {{--<span class="fa fa-plus"></span> Add More--}}
                                                {{--</button>--}}
                                            {{--</div>--}}
                                        </div>

                                        <div id="educationRecords_0">
                                            <label for="org">Subject/Faculty <font style="color: crimson">*</font></label>

                                            <input type="text" name="educationRecordAttachment.0.name" class="form-control required" id="org" placeholder="Subject/Faculty">

                                            <label for="x">Name Of Institution <font style="color: crimson">*</font></label>


                                            <input type="text" id='x' name="educationRecordAttachment.0.institution" class="form-control required" placeholder="Institution Name">

                                            <label>Certificate Obtained</label>
                                            <input name="recordFile_0" id="recordFile_0" type="file" class="custom-file-input required">
                                            <button class="btn btn-info educationUploadBtn required" id="educationUpload_0" style="display: none" type="button">Upload</button>
                                            <input type="text" id='file_0' name="educationRecordAttachment.0.file" class="file-doc required hidd">

                                            <p id="file_name_0" class="file_name" style="color: #00aaee">Choose File And Click Upload</p>

                                            <p style="text-align: left;margin-top: 10px"><b><font
                                                        style="color: crimson">*</font> Allowed file types:
                                                </b> png, jpeg, jpg, pdf, doc, docx (Max 5MBs)
                                            </p>


                                            <button type="button" style="width: 50px;margin: 0px;height: 40px;padding: 0;margin-top: 10px" title="Delete" class="repeater-button  btn btn-danger removeac">
                                                <span class="fa fa-minus-square"></span>
                                            </button>
                                            <hr>
                                        </div>

                                        <div id="new_item_details1" class="new_item_details1">
                                        </div>
                                        <label for="educationLevel">Professional Course History  (<font style="color: crimson">Optional</font>)
                                        </label>

                                        <input type="text" name="professionalCourse" class="form-control" id="proCourse" placeholder="Course Attended">
                                        <label for="proAttachment">Certificate Obtained</label>
                                        <input name="proAttachment" id="proAttachment" type="file" class="custom-file-input">

                                        <input id="professionalAttachment" type="text" class=" required hidd" name="professionalAttachment">

                                        <p id="professional_name" style="color: #00aaee">Choose File And Click Upload</p>
                                        <button class="btn btn-default proUpload" type="button" style="display: none">Upload</button>

                                    </section>

                                    <h3>Make Payment</h3>
                                    <section>
                                        <label for="payment">Select Payment Method <font style="color: crimson">*</font></label>
                                        <select name="payment" id="payment" class="form-control required payment">
                                            <option value="">-Select-</option>
                                            <option value="BankDeposit" selected>Bank Deposit</option>
                                            <option value="MobileMoneyDeposit">Mobile Money</option>
                                            <option value="SponsorDeposit">Sponsor Deposit</option>
                                        </select>

                                        <div id="bankDeposit">
                                            <label>Payment Date<font style="color: crimson">*</font></label>

                                            <input type="date" name="bankDepositDate" class="form-control required" id="bankDepositDate" placeholder="MM/DD/YYYY">

                                            <label for="refNoB">Ref No.<font style="color: crimson">*</font></label>

                                            <input type="text" name="bankDepositPaymentRefNo" class="form-control required" id="refNoB" placeholder="Payment Ref No">

                                            <label for="lname">Account No.<font style="color: crimson">*</font></label>


                                            <div class="form-row-radio" style="text-align: left;margin-bottom: 2px;">

                                                <label for="studentRadio" style="margin-top: 10px;margin-bottom: 0px;text-align: left">
                                                    <input type="radio" style="min-width: 5px;height: auto ;display: inline-block"
                                                           name="accountNumber"
                                                           id="studentRadio" value="00040-0335616-29"/>
                                                    <span style="margin-bottom: 5px;text-align: left">000-400335616-29 (Bank of Kigali Account)
                        </span>
                                                </label>
                                                <br>



{{--                                                <label for="ecoRadio" style="margin-top: 10px;margin-bottom: 0px;text-align: left">--}}
{{--                                                    <input type="radio" style="min-width: 5px;height: auto;display: inline-block" id="ecoRadio"--}}
{{--                                                           name="accountNumber" value="110-04413101-72"/>--}}
{{--                                                    <span>110-04413101-72 (Ecobank Account)</span>--}}
{{--                                                </label>--}}
{{--                                                <br>--}}



                                                <label for="haha" style="margin-top: 10px;margin-bottom: 0px;text-align: left">
                                                    <input type="radio" style="min-width: 5px;height: auto;text-align: left;display: inline-block"
                                                           id="haha"
                                                           name="accountNumber" value="0011013802846601"/>
                                                    <span>001-10138028466-01 (Ecobank USD Account)</span>
                                                </label>
                                                <br>



{{--                                                <label for="kigali" style="margin-top: 10px;margin-bottom: 0px;text-align: left">--}}
{{--                                                    <input type="radio" style="min-width: 5px;height: auto;display: inline-block" id="kigali"--}}
{{--                                                           name="accountNumber"--}}
{{--                                                           value="000-400607372-09"/>--}}
{{--                                                    <span>000-400607372-09 (Bank of Kigali Building fees Account)</span>--}}
{{--                                                </label>--}}
                                            </div>



                                            <label for="branch">Bank Branch<font style="color: crimson">*</font></label>

                                            <input type="text" name="branch" data-validation="required" class="form-control required" id="branch" placeholder="Bank Branch">

                                            <label for="depositor">Depositor Names<font style="color: crimson">*</font></label>

                                            <input type="text" name="bankDepositorNames" class="form-control required" id="depositor" placeholder="Name Of Depositor">

                                            <label for="amount">Amount Deposit (frw)<font style="color: crimson">*</font></label>

                                            <input type="number" value=50000 min=50000 name="bankDepositAmount" class="form-control required">


                                            <p>
                                                <font style="color: crimson;size: 20px">*</font>Attach a scanned Copy of the payment slip. (Max 5MBs)
                                            </p>

                                            <label for="bankDepositFile"></label>


                                            <input id="bankDepositFile" type="file" name="bankSlip" class="custom-file-input required">
                                            <input id="bankAttachment" type="text" class="required hidd" name="bankAttachment">

                                            <p id="file_name_bank" style="color: #00aaee">Choose File And Click Upload</p>
                                            <button class="btn btn-default bankUpload" style="display: none" type="button">Upload</button>

                                            <p style="text-align: left;margin-top: 10px"><b>Allowed file types:</b> png, jpeg, jpg, pdf, doc, docx
                                            </p>

                                        </div>

                                        <div id="sponsorDeposit" style="display: none">

                                            <label>Payment Date<font style="color: crimson">*</font></label>

                                            <input type="date" name="sponsorDepositDate" id="sponsorDepositDate" class="form-control required" placeholder="MM/DD/YYYY">
                                            {{--<label>Sponsor Type</label>--}}
                                            {{--<select name="sponsorType" id="sponsorType" class="form-control sponsor required">--}}
                                                {{--<option value="">-Choose Sponsorship-</option>--}}
                                                {{--<option value="SelfSponsored" selected>Self Sponsored</option>--}}
                                            {{----}}
                                                {{--<option value="Others" >Others</option>--}}
                                            {{--</select>--}}
                                            <div class="required" style="display: block" id="sponsorNameDiv">
                                                <label>Sponsor Name</label>
                                                <?php
                                                $sponsors=\App\Models\Sponsorship::all();
                                                ?>
                                                <select name="sponsorName" id="sponsorName" class="form-control sponsor required">
                                                    <option value="" selected>Select Sponsor Name</option>
                                                    <option value="0">Use Current Sponsor Information</option>
                                                 @foreach($sponsors as $sponsor)
                                                    <option value="{{$sponsor->id}}" >{{$sponsor->sponsor_name}}</option>
                                                     @endforeach
                                                </select>
                                            </div>

                                            <label>Ref No.<font style="color: crimson">*</font></label>

                                            <input type="text" class="form-control required" name="sponsorDepositPaymentRefNo" placeholder="Payment Ref No">

                                            <div class="required" style="display: block" id="depositorNameDiv">
                                                <label for="depositor">Depositor's Names<font style="color: crimson">*</font></label>
                                                <input type="text" name="sponsorDepositorNames" class="form-control required" placeholder="Depositor's Name">
                                            </div>

                                            <label>Amount (frw)<font style="color: crimson">*</font></label>

                                            <input type="number" name="sponsorDepositAmount" value=50000 min=50000 class="form-control required" placeholder="Amount">


                                            <p>
                                                <font style="color: crimson;size: 20px">*</font>Attach a scanned Copy of the payment slip. (Max 5MBs)
                                            </p>

                                            <input id="sponsorDepositFile" class="custom-file-input required" name="sponsorDepositAttachment" type="file">
                                            <input id="sponsorAttachment" type="text" class="required hidd" name="sponsorAttachment">

                                            <p id="file_name_sponsor" style="color: #00aaee">Choose File And Click Upload</p>
                                            <button class="btn btn-default sponsorUpload" style="display: none" type="button">Upload</button>

                                            <p style="text-align: left;margin-top: 10px"><b>Allowed file types:</b> png, jpeg, jpg, pdf, doc, docx
                                            </p>

                                        </div>

                                        <div id="mobileDeposit" style="display: none">
                                            <label for="mobileDate">Payment Date<font style="color: crimson">*</font></label>

                                            <input type="date" class="form-control required" id="mobileDate" name="mobileMoneyDate" placeholder="MM/DD/YYYY">

                                            <label for="mobileRef">Ref No.<font style="color: crimson">*</font></label>

                                            <input type="text" id="mobileRef" class="form-control required" name="mobileMoneyPaymentRefNo" placeholder="Payment Ref No">


                                            <label for="mobileMoneyDepositorNames">Depositor's Name<font style="color: crimson">*</font></label>

                                            <input type="text" name="mobileMoneyDepositorNames" class="form-control required" id="mobileMoneyDepositorNames" placeholder="Depositor's Name">


                                            <label>MM Service Provider<font style="color: crimson">*</font></label>

                                            <select name="serviceProvider" id="select2" style="width: 100%" class="form-control required">
                                                <option value="">-Select Service Provider-</option>
                                                <option value="MTNMobileMoney" >MTN Mobile Money</option>
                                                <option value="AirtelMoney" >Airtel Money</option>
{{--                                                <option value="RTL" >RTL</option>--}}
                                            </select>

                                            <label for="phone">MM Phone Number.<font style="color: crimson">*</font></label>

                                            <input type="text" name="mobileMoneyPhoneNumber" class="form-control required" id="phone" placeholder="eg... +250 754678564">

                                            <label for="amount">Amount (frw)</label>

                                            <input type="number" name="mobileMoneyAmount" value=50000 min=50000 data-validation="required" class="form-control" id="amount" placeholder="Amount">

                                        </div>

                                    </section>

                                    <h3>Terms & Conditions</h3>
                                    <section>
                                        <p>Once you submit your application and payment made successfully, your application will go through the review process by our team. <br> If all goes well, you will receive a confirmation email to the E-Address
                                            you provided on this form with an admission letter. Further instructions will be provided in that email.
                                        </p>

                                        <div class="checkboxTest checkbox-primary">
                                            {{--<input type="hidden" name="_agree" />--}}

                                            <label class="checkbox_container">
                                            <input type="checkbox" name="agree" id="agree" class="required agree_checkbox" />
                                                <span class="checkmark" id="checkmark"></span>
                                            </label>
                                            <label for="checkmark" style="text-align: left;margin-left: 40px !important;"><b>
                                                    I hereby certify that all the information on this form
                                                    is true and I agree to abide by the rules and regulations of JDD & ASSOCIATES Ltd</b>

                                            </label>
                                            <br>
                                        </div>

                                        <div id="progress-div" style="display: none">
                                            <div id="progress-bar" style="width: 0%;" class="alert alert-success">

                                            </div>
                                        </div>

                                        <div id="loader-icon" style="display:none;text-align: center"><img src="{{asset('customization/frontend/img/loading.gif')}}" style="height: 100px !important;" /></div>
                                    </section>
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
    <script type="text/javascript" src="{{asset('customization/frontend/js/application.js')}}" ></script>
@endsection
