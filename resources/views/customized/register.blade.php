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
                                            <option value="Others" >Others</option>
                                        </select>

                                        <label for="country">Country Of Residence <font style="color: crimson">*</font></label>
                                        <select name="country" id="country" class="form-control required" data-validation="required">
                                            <option value="">-Choose your country-</option>
                                            <option value="afg" >Afghanistan</option>
                                            <option value="alb" >Albania</option>
                                            <option value="dza" >Algeria</option>
                                            <option value="asm" >American Samoa</option>
                                            <option value="and" >Andorra</option>
                                            <option value="ago" >Angola</option>
                                            <option value="aia" >Anguilla</option>
                                            <option value="ata" >Antarctica</option>
                                            <option value="atg" >Antigua and Barbuda</option>
                                            <option value="arg" >Argentina</option>
                                            <option value="arm" >Armenia</option>
                                            <option value="abw" >Aruba</option>
                                            <option value="aus" >Australia</option>
                                            <option value="aut" >Austria</option>
                                            <option value="aze" >Azerbaijan</option>
                                            <option value="bhs" >Bahamas</option>
                                            <option value="bhr" >Bahrain</option>
                                            <option value="bgd" >Bangladesh</option>
                                            <option value="brb" >Barbados</option>
                                            <option value="blr" >Belarus</option>
                                            <option value="bel" >Belgium</option>
                                            <option value="blz" >Belize</option>
                                            <option value="ben" >Benin</option>
                                            <option value="bmu" >Bermuda</option>
                                            <option value="btn" >Bhutan</option>
                                            <option value="bol" >Bolivia</option>
                                            <option value="bes" >Bonaire, Sint Eustatius and Saba</option>
                                            <option value="bih" >Bosnia and Herzegovina</option>
                                            <option value="bwa" >Botswana</option>
                                            <option value="bvt" >Bouvet Island</option>
                                            <option value="bra" >Brazil</option>
                                            <option value="iot" >British Indian Ocean Territory</option>
                                            <option value="vgb" >British Virgin Islands</option>
                                            <option value="brn" >Brunei Darussalam</option>
                                            <option value="bgr" >Bulgaria</option>
                                            <option value="bfa" >Burkina Faso</option>
                                            <option value="bdi" >Burundi</option>
                                            <option value="khm" >Cambodia</option>
                                            <option value="cmr" >Cameroon</option>
                                            <option value="can" >Canada</option>
                                            <option value="cpv" >Cape Verde</option>
                                            <option value="cym" >Cayman Islands</option>
                                            <option value="caf" >Central African</option>
                                            <option value="tcd" >Chad</option>
                                            <option value="chl" >Chile</option>
                                            <option value="chn" >China</option>
                                            <option value="cxr" >Christmas Island</option>
                                            <option value="cck" >Cocos (Keeling) Islands</option>
                                            <option value="col" >Colombia</option>
                                            <option value="com" >Comoros</option>
                                            <option value="cok" >Cook Islands</option>
                                            <option value="cri" >Costa Rica</option>
                                            <option value="hrv" >Croatia</option>
                                            <option value="cub" >Cuba</option>
                                            <option value="cuw" >Curaçao</option>
                                            <option value="cyp" >Cyprus</option>
                                            <option value="cze" >Czech Republic</option>
                                            <option value="civ" >Côte d&#39;Ivoire</option>
                                            <option value="prk" >Democratic People&#39;s Republic of Korea</option>
                                            <option value="dnk" >Denmark</option>
                                            <option value="dji" >Djibouti</option>
                                            <option value="dma" >Dominica</option>
                                            <option value="dom" >Dominican Republic</option>
                                            <option value="ecu" >Ecuador</option>
                                            <option value="egy" >Egypt</option>
                                            <option value="slv" >El Salvador</option>
                                            <option value="gnq" >Equatorial Guinea</option>
                                            <option value="eri" >Eritrea</option>
                                            <option value="est" >Estonia</option>
                                            <option value="eth" >Ethiopia</option>
                                            <option value="flk" >Falkland Islands</option>
                                            <option value="fro" >Faroe Islands</option>
                                            <option value="fsm" >Federated States of Micronesia</option>
                                            <option value="fji" >Fiji</option>
                                            <option value="fin" >Finland</option>
                                            <option value="fra" >France</option>
                                            <option value="guf" >French Guiana</option>
                                            <option value="pyf" >French Polynesia</option>
                                            <option value="atf" >French Southern Territories</option>
                                            <option value="gab" >Gabon</option>
                                            <option value="gmb" >Gambia</option>
                                            <option value="geo" >Georgia</option>
                                            <option value="deu" >Germany</option>
                                            <option value="gha" >Ghana</option>
                                            <option value="gib" >Gibraltar</option>
                                            <option value="grc" >Greece</option>
                                            <option value="grl" >Greenland</option>
                                            <option value="grd" >Grenada</option>
                                            <option value="glp" >Guadeloupe</option>
                                            <option value="gum" >Guam</option>
                                            <option value="gtm" >Guatemala</option>
                                            <option value="gin" >Guinea</option>
                                            <option value="gnb" >Guinea-Bissau</option>
                                            <option value="guy" >Guyana</option>
                                            <option value="hti" >Haiti</option>
                                            <option value="hmd" >Heard Island and McDonald Islands</option>
                                            <option value="hnd" >Honduras</option>
                                            <option value="hkg" >Hong Kong</option>
                                            <option value="hun" >Hungary</option>
                                            <option value="isl" >Iceland</option>
                                            <option value="ind" >India</option>
                                            <option value="idn" >Indonesia</option>
                                            <option value="irq" >Iraq</option>
                                            <option value="irl" >Ireland</option>
                                            <option value="irn" >Islamic Republic of Iran</option>
                                            <option value="imn" >Isle of Man</option>
                                            <option value="isr" >Israel</option>
                                            <option value="ita" >Italy</option>
                                            <option value="jam" >Jamaica</option>
                                            <option value="jpn" >Japan</option>
                                            <option value="jor" >Jordan</option>
                                            <option value="kaz" >Kazakhstan</option>
                                            <option value="ken" >Kenya</option>
                                            <option value="kir" >Kiribati</option>
                                            <option value="kwt" >Kuwait</option>
                                            <option value="kgz" >Kyrgyzstan</option>
                                            <option value="lao" >Lao People&#39;s Democratic Republic</option>
                                            <option value="lva" >Latvia</option>
                                            <option value="lbn" >Lebanon</option>
                                            <option value="lso" >Lesotho</option>
                                            <option value="lbr" >Liberia</option>
                                            <option value="lby" >Libyan Arab Jamahiriya</option>
                                            <option value="lie" >Liechtenstein</option>
                                            <option value="ltu" >Lithuania</option>
                                            <option value="lux" >Luxembourg</option>
                                            <option value="mac" >Macao</option>
                                            <option value="mdg" >Madagascar</option>
                                            <option value="mwi" >Malawi</option>
                                            <option value="mys" >Malaysia</option>
                                            <option value="mdv" >Maldives</option>
                                            <option value="mli" >Mali</option>
                                            <option value="mlt" >Malta</option>
                                            <option value="mhl" >Marshall Islands</option>
                                            <option value="mtq" >Martinique</option>
                                            <option value="mrt" >Mauritania</option>
                                            <option value="mus" >Mauritius</option>
                                            <option value="myt" >Mayotte</option>
                                            <option value="mex" >Mexico</option>
                                            <option value="mco" >Monaco</option>
                                            <option value="mng" >Mongolia</option>
                                            <option value="mne" >Montenegro</option>
                                            <option value="msr" >Montserrat</option>
                                            <option value="mar" >Morocco</option>
                                            <option value="moz" >Mozambique</option>
                                            <option value="mmr" >Myanmar</option>
                                            <option value="nam" >Namibia</option>
                                            <option value="nru" >Nauru</option>
                                            <option value="npl" >Nepal</option>
                                            <option value="nld" >Netherlands</option>
                                            <option value="ncl" >New Caledonia</option>
                                            <option value="nzl" >New Zealand</option>
                                            <option value="nic" >Nicaragua</option>
                                            <option value="ner" >Niger</option>
                                            <option value="nga" >Nigeria</option>
                                            <option value="niu" >Niue</option>
                                            <option value="nfk" >Norfolk Island</option>
                                            <option value="mnp" >Northern Mariana Islands</option>
                                            <option value="nor" >Norway</option>
                                            <option value="pse" >Occupied Palestinian Territory</option>
                                            <option value="omn" >Oman</option>
                                            <option value="pak" >Pakistan</option>
                                            <option value="plw" >Palau</option>
                                            <option value="pan" >Panama</option>
                                            <option value="png" >Papua New Guinea</option>
                                            <option value="pry" >Paraguay</option>
                                            <option value="per" >Peru</option>
                                            <option value="phl" >Philippines</option>
                                            <option value="pcn" >Pitcairn</option>
                                            <option value="pol" >Poland</option>
                                            <option value="prt" >Portugal</option>
                                            <option value="pri" >Puerto Rico</option>
                                            <option value="qat" >Qatar</option>
                                            <option value="kor" >Republic of Korea</option>
                                            <option value="mda" >Republic of Moldova</option>
                                            <option value="cog" >Republic of the Congo</option>
                                            <option value="rou" >Romania</option>
                                            <option value="rus" >Russian Federation</option>
                                            <option value="rwa" >Rwanda</option>
                                            <option value="reu" >Réunion</option>
                                            <option value="shn" >Saint Helena</option>
                                            <option value="kna" >Saint Kitts and Nevis</option>
                                            <option value="lca" >Saint Lucia</option>
                                            <option value="vct" >Saint Vincent and the Grenadines</option>
                                            <option value="spm" >Saint-Pierre and Miquelon</option>
                                            <option value="wsm" >Samoa</option>
                                            <option value="smr" >San Marino</option>
                                            <option value="stp" >Sao Tome and Principe</option>
                                            <option value="sau" >Saudi Arabia</option>
                                            <option value="sen" >Senegal</option>
                                            <option value="srb" >Serbia</option>
                                            <option value="syc" >Seychelles</option>
                                            <option value="sle" >Sierra Leone</option>
                                            <option value="sgp" >Singapore</option>
                                            <option value="sxm" >Sint Maarten (Dutch part)</option>
                                            <option value="svk" >Slovakia</option>
                                            <option value="svn" >Slovenia</option>
                                            <option value="slb" >Solomon Islands</option>
                                            <option value="som" >Somalia</option>
                                            <option value="zaf" >South Africa</option>
                                            <option value="sgs" >South Georgia and the South Sandwich Islands</option>
                                            <option value="esp" >Spain</option>
                                            <option value="lka" >Sri Lanka</option>
                                            <option value="sdn" >Sudan</option>
                                            <option value="sur" >Suriname</option>
                                            <option value="sjm" >Svalbard and Jan Mayen</option>
                                            <option value="swz" >Swaziland</option>
                                            <option value="swe" >Sweden</option>
                                            <option value="che" >Switzerland</option>
                                            <option value="syr" >Syrian Arab Republic</option>
                                            <option value="twn" >Taiwan</option>
                                            <option value="tjk" >Tajikistan</option>
                                            <option value="tha" >Thailand</option>
                                            <option value="cod" >The Democratic Republic Of The Congo</option>
                                            <option value="mkd" >The Former Yugoslav Republic of Macedonia</option>
                                            <option value="tls" >Timor-Leste</option>
                                            <option value="tgo" >Togo</option>
                                            <option value="tkl" >Tokelau</option>
                                            <option value="ton" >Tonga</option>
                                            <option value="tto" >Trinidad and Tobago</option>
                                            <option value="tun" >Tunisia</option>
                                            <option value="tur" >Turkey</option>
                                            <option value="tkm" >Turkmenistan</option>
                                            <option value="tca" >Turks and Caicos Islands</option>
                                            <option value="tuv" >Tuvalu</option>
                                            <option value="vir" >U.S. Virgin Islands</option>
                                            <option value="uga" >Uganda</option>
                                            <option value="ukr" >Ukraine</option>
                                            <option value="are" >United Arab Emirates</option>
                                            <option value="gbr" >United Kingdom</option>
                                            <option value="tza" >United Republic Of Tanzania</option>
                                            <option value="usa" >United States</option>
                                            <option value="umi" >United States Minor Outlying Islands</option>
                                            <option value="ury" >Uruguay</option>
                                            <option value="uzb" >Uzbekistan</option>
                                            <option value="vut" >Vanuatu</option>
                                            <option value="vat" >Vatican City State</option>
                                            <option value="ven" >Venezuela</option>
                                            <option value="vnm" >Vietnam</option>
                                            <option value="wlf" >Wallis and Futuna</option>
                                            <option value="esh" >Western Sahara</option>
                                            <option value="yem" >Yemen</option>
                                            <option value="zmb" >Zambia</option>
                                            <option value="zwe" >Zimbabwe</option>
                                            <option value="ala" >Åland Islands</option>
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
                                            <option value="">- Select your country -</option>
                                            <option value="afg" >Afghanistan</option>
                                            <option value="alb" >Albania</option>
                                            <option value="dza" >Algeria</option>
                                            <option value="asm" >American Samoa</option>
                                            <option value="and" >Andorra</option>
                                            <option value="ago" >Angola</option>
                                            <option value="aia" >Anguilla</option>
                                            <option value="ata" >Antarctica</option>
                                            <option value="atg" >Antigua and Barbuda</option>
                                            <option value="arg" >Argentina</option>
                                            <option value="arm" >Armenia</option>
                                            <option value="abw" >Aruba</option>
                                            <option value="aus" >Australia</option>
                                            <option value="aut" >Austria</option>
                                            <option value="aze" >Azerbaijan</option>
                                            <option value="bhs" >Bahamas</option>
                                            <option value="bhr" >Bahrain</option>
                                            <option value="bgd" >Bangladesh</option>
                                            <option value="brb" >Barbados</option>
                                            <option value="blr" >Belarus</option>
                                            <option value="bel" >Belgium</option>
                                            <option value="blz" >Belize</option>
                                            <option value="ben" >Benin</option>
                                            <option value="bmu" >Bermuda</option>
                                            <option value="btn" >Bhutan</option>
                                            <option value="bol" >Bolivia</option>
                                            <option value="bes" >Bonaire, Sint Eustatius and Saba</option>
                                            <option value="bih" >Bosnia and Herzegovina</option>
                                            <option value="bwa" >Botswana</option>
                                            <option value="bvt" >Bouvet Island</option>
                                            <option value="bra" >Brazil</option>
                                            <option value="iot" >British Indian Ocean Territory</option>
                                            <option value="vgb" >British Virgin Islands</option>
                                            <option value="brn" >Brunei Darussalam</option>
                                            <option value="bgr" >Bulgaria</option>
                                            <option value="bfa" >Burkina Faso</option>
                                            <option value="bdi" >Burundi</option>
                                            <option value="khm" >Cambodia</option>
                                            <option value="cmr" >Cameroon</option>
                                            <option value="can" >Canada</option>
                                            <option value="cpv" >Cape Verde</option>
                                            <option value="cym" >Cayman Islands</option>
                                            <option value="caf" >Central African</option>
                                            <option value="tcd" >Chad</option>
                                            <option value="chl" >Chile</option>
                                            <option value="chn" >China</option>
                                            <option value="cxr" >Christmas Island</option>
                                            <option value="cck" >Cocos (Keeling) Islands</option>
                                            <option value="col" >Colombia</option>
                                            <option value="com" >Comoros</option>
                                            <option value="cok" >Cook Islands</option>
                                            <option value="cri" >Costa Rica</option>
                                            <option value="hrv" >Croatia</option>
                                            <option value="cub" >Cuba</option>
                                            <option value="cuw" >Curaçao</option>
                                            <option value="cyp" >Cyprus</option>
                                            <option value="cze" >Czech Republic</option>
                                            <option value="civ" >Côte d&#39;Ivoire</option>
                                            <option value="prk" >Democratic People&#39;s Republic of Korea</option>
                                            <option value="dnk" >Denmark</option>
                                            <option value="dji" >Djibouti</option>
                                            <option value="dma" >Dominica</option>
                                            <option value="dom" >Dominican Republic</option>
                                            <option value="ecu" >Ecuador</option>
                                            <option value="egy" >Egypt</option>
                                            <option value="slv" >El Salvador</option>
                                            <option value="gnq" >Equatorial Guinea</option>
                                            <option value="eri" >Eritrea</option>
                                            <option value="est" >Estonia</option>
                                            <option value="eth" >Ethiopia</option>
                                            <option value="flk" >Falkland Islands</option>
                                            <option value="fro" >Faroe Islands</option>
                                            <option value="fsm" >Federated States of Micronesia</option>
                                            <option value="fji" >Fiji</option>
                                            <option value="fin" >Finland</option>
                                            <option value="fra" >France</option>
                                            <option value="guf" >French Guiana</option>
                                            <option value="pyf" >French Polynesia</option>
                                            <option value="atf" >French Southern Territories</option>
                                            <option value="gab" >Gabon</option>
                                            <option value="gmb" >Gambia</option>
                                            <option value="geo" >Georgia</option>
                                            <option value="deu" >Germany</option>
                                            <option value="gha" >Ghana</option>
                                            <option value="gib" >Gibraltar</option>
                                            <option value="grc" >Greece</option>
                                            <option value="grl" >Greenland</option>
                                            <option value="grd" >Grenada</option>
                                            <option value="glp" >Guadeloupe</option>
                                            <option value="gum" >Guam</option>
                                            <option value="gtm" >Guatemala</option>
                                            <option value="gin" >Guinea</option>
                                            <option value="gnb" >Guinea-Bissau</option>
                                            <option value="guy" >Guyana</option>
                                            <option value="hti" >Haiti</option>
                                            <option value="hmd" >Heard Island and McDonald Islands</option>
                                            <option value="hnd" >Honduras</option>
                                            <option value="hkg" >Hong Kong</option>
                                            <option value="hun" >Hungary</option>
                                            <option value="isl" >Iceland</option>
                                            <option value="ind" >India</option>
                                            <option value="idn" >Indonesia</option>
                                            <option value="irq" >Iraq</option>
                                            <option value="irl" >Ireland</option>
                                            <option value="irn" >Islamic Republic of Iran</option>
                                            <option value="imn" >Isle of Man</option>
                                            <option value="isr" >Israel</option>
                                            <option value="ita" >Italy</option>
                                            <option value="jam" >Jamaica</option>
                                            <option value="jpn" >Japan</option>
                                            <option value="jor" >Jordan</option>
                                            <option value="kaz" >Kazakhstan</option>
                                            <option value="ken" >Kenya</option>
                                            <option value="kir" >Kiribati</option>
                                            <option value="kwt" >Kuwait</option>
                                            <option value="kgz" >Kyrgyzstan</option>
                                            <option value="lao" >Lao People&#39;s Democratic Republic</option>
                                            <option value="lva" >Latvia</option>
                                            <option value="lbn" >Lebanon</option>
                                            <option value="lso" >Lesotho</option>
                                            <option value="lbr" >Liberia</option>
                                            <option value="lby" >Libyan Arab Jamahiriya</option>
                                            <option value="lie" >Liechtenstein</option>
                                            <option value="ltu" >Lithuania</option>
                                            <option value="lux" >Luxembourg</option>
                                            <option value="mac" >Macao</option>
                                            <option value="mdg" >Madagascar</option>
                                            <option value="mwi" >Malawi</option>
                                            <option value="mys" >Malaysia</option>
                                            <option value="mdv" >Maldives</option>
                                            <option value="mli" >Mali</option>
                                            <option value="mlt" >Malta</option>
                                            <option value="mhl" >Marshall Islands</option>
                                            <option value="mtq" >Martinique</option>
                                            <option value="mrt" >Mauritania</option>
                                            <option value="mus" >Mauritius</option>
                                            <option value="myt" >Mayotte</option>
                                            <option value="mex" >Mexico</option>
                                            <option value="mco" >Monaco</option>
                                            <option value="mng" >Mongolia</option>
                                            <option value="mne" >Montenegro</option>
                                            <option value="msr" >Montserrat</option>
                                            <option value="mar" >Morocco</option>
                                            <option value="moz" >Mozambique</option>
                                            <option value="mmr" >Myanmar</option>
                                            <option value="nam" >Namibia</option>
                                            <option value="nru" >Nauru</option>
                                            <option value="npl" >Nepal</option>
                                            <option value="nld" >Netherlands</option>
                                            <option value="ncl" >New Caledonia</option>
                                            <option value="nzl" >New Zealand</option>
                                            <option value="nic" >Nicaragua</option>
                                            <option value="ner" >Niger</option>
                                            <option value="nga" >Nigeria</option>
                                            <option value="niu" >Niue</option>
                                            <option value="nfk" >Norfolk Island</option>
                                            <option value="mnp" >Northern Mariana Islands</option>
                                            <option value="nor" >Norway</option>
                                            <option value="pse" >Occupied Palestinian Territory</option>
                                            <option value="omn" >Oman</option>
                                            <option value="pak" >Pakistan</option>
                                            <option value="plw" >Palau</option>
                                            <option value="pan" >Panama</option>
                                            <option value="png" >Papua New Guinea</option>
                                            <option value="pry" >Paraguay</option>
                                            <option value="per" >Peru</option>
                                            <option value="phl" >Philippines</option>
                                            <option value="pcn" >Pitcairn</option>
                                            <option value="pol" >Poland</option>
                                            <option value="prt" >Portugal</option>
                                            <option value="pri" >Puerto Rico</option>
                                            <option value="qat" >Qatar</option>
                                            <option value="kor" >Republic of Korea</option>
                                            <option value="mda" >Republic of Moldova</option>
                                            <option value="cog" >Republic of the Congo</option>
                                            <option value="rou" >Romania</option>
                                            <option value="rus" >Russian Federation</option>
                                            <option value="rwa" >Rwanda</option>
                                            <option value="reu" >Réunion</option>
                                            <option value="shn" >Saint Helena</option>
                                            <option value="kna" >Saint Kitts and Nevis</option>
                                            <option value="lca" >Saint Lucia</option>
                                            <option value="vct" >Saint Vincent and the Grenadines</option>
                                            <option value="spm" >Saint-Pierre and Miquelon</option>
                                            <option value="wsm" >Samoa</option>
                                            <option value="smr" >San Marino</option>
                                            <option value="stp" >Sao Tome and Principe</option>
                                            <option value="sau" >Saudi Arabia</option>
                                            <option value="sen" >Senegal</option>
                                            <option value="srb" >Serbia</option>
                                            <option value="syc" >Seychelles</option>
                                            <option value="sle" >Sierra Leone</option>
                                            <option value="sgp" >Singapore</option>
                                            <option value="sxm" >Sint Maarten (Dutch part)</option>
                                            <option value="svk" >Slovakia</option>
                                            <option value="svn" >Slovenia</option>
                                            <option value="slb" >Solomon Islands</option>
                                            <option value="som" >Somalia</option>
                                            <option value="zaf" >South Africa</option>
                                            <option value="sgs" >South Georgia and the South Sandwich Islands</option>
                                            <option value="esp" >Spain</option>
                                            <option value="lka" >Sri Lanka</option>
                                            <option value="sdn" >Sudan</option>
                                            <option value="sur" >Suriname</option>
                                            <option value="sjm" >Svalbard and Jan Mayen</option>
                                            <option value="swz" >Swaziland</option>
                                            <option value="swe" >Sweden</option>
                                            <option value="che" >Switzerland</option>
                                            <option value="syr" >Syrian Arab Republic</option>
                                            <option value="twn" >Taiwan</option>
                                            <option value="tjk" >Tajikistan</option>
                                            <option value="tha" >Thailand</option>
                                            <option value="cod" >The Democratic Republic Of The Congo</option>
                                            <option value="mkd" >The Former Yugoslav Republic of Macedonia</option>
                                            <option value="tls" >Timor-Leste</option>
                                            <option value="tgo" >Togo</option>
                                            <option value="tkl" >Tokelau</option>
                                            <option value="ton" >Tonga</option>
                                            <option value="tto" >Trinidad and Tobago</option>
                                            <option value="tun" >Tunisia</option>
                                            <option value="tur" >Turkey</option>
                                            <option value="tkm" >Turkmenistan</option>
                                            <option value="tca" >Turks and Caicos Islands</option>
                                            <option value="tuv" >Tuvalu</option>
                                            <option value="vir" >U.S. Virgin Islands</option>
                                            <option value="uga" >Uganda</option>
                                            <option value="ukr" >Ukraine</option>
                                            <option value="are" >United Arab Emirates</option>
                                            <option value="gbr" >United Kingdom</option>
                                            <option value="tza" >United Republic Of Tanzania</option>
                                            <option value="usa" >United States</option>
                                            <option value="umi" >United States Minor Outlying Islands</option>
                                            <option value="ury" >Uruguay</option>
                                            <option value="uzb" >Uzbekistan</option>
                                            <option value="vut" >Vanuatu</option>
                                            <option value="vat" >Vatican City State</option>
                                            <option value="ven" >Venezuela</option>
                                            <option value="vnm" >Vietnam</option>
                                            <option value="wlf" >Wallis and Futuna</option>
                                            <option value="esh" >Western Sahara</option>
                                            <option value="yem" >Yemen</option>
                                            <option value="zmb" >Zambia</option>
                                            <option value="zwe" >Zimbabwe</option>
                                            <option value="ala" >Åland Islands</option>
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
                                            {{--<option value="School" >School</option>--}}
                                            <option value="Others" >Others</option>
                                        </select>
                                        <div id="sponsorDetails" style="display: none">

                                            <label>Sponsor Names <font style="color: crimson">*</font></label>

                                            <input type="text" name="sponsorNameReg" class="form-control" id="sponsor_names" placeholder="Sponsor Names">

                                            <select name="sponsorID" id="sponsorNameMis" class="form-control sponsor">
                                            </select>



                                            <label for="emailSponsor">Sponsor Email <font style="color: crimson">*</font></label>


                                            <input type="email" name="sponsorEmail" class="form-control email" id="emailSponsor" placeholder="sponsor@domain.com">

                                            <label for="contactSponsor">Sponsor Contact/Phone <font style="color: crimson">*</font></label>

                                            <input type="text" name="sponsorContact" class="form-control" id="contactSponsor" placeholder="+250 754678564">
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

                                        <div class="checkbox checkbox-primary" style="padding-left: 20px;margin-top: 40px">
                                            <input type="hidden" name="_agree" />
                                            <input type="checkbox" name="agree" id="agree" class="required" />
                                            <label for="agree" style="text-align: left;"><b>
                                                    I hereby certify that all the information on this form
                                                    is true and I agree to abide by the rules and regulations of JDD AUDITORS</b>

                                            </label><br>
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
