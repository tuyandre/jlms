<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Mail\Frontend\Auth\AdminRegistered;
use App\Models\Auth\User;
use App\Models\BankPayment;
use App\Models\MobilePayment;
use App\Models\Order;
use App\Models\OrderItem;
use App\Notifications\Frontend\Auth\StudentRegistration;
use App\Notifications\Frontend\Auth\WelcomeStudent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;

class ApplicationController extends Controller
{
    public function getAdminLogin(){
        return view('customized.auth.adminLogin');
    }
    public function getAdminRegister(){
        $admin=User::where('role','=','Admin')->orWhere('role','=','Teacher')->get();
        if (!$admin->count()>=1){
            return view('customized.adminRegister');
        }else{
            return view('customized.adminLogin');
        }

        return view('customized.adminLogin');
    }




    public function uploadPassport(Request $request){
        $files = $request->file('file');
        if($request->hasFile('file'))
        {
            $file=$request->file('file');
            $filename= $file->store('/avatars', 'public');
//            $filename =time().$file->getClientOriginalName();
//            $extension = $file->getClientOriginalExtension();
//            $filename =time().$request['name'].'.'.$extension;
//            $name=$file->getClientOriginalName();
//            $file->move(public_path('students/passport'),$filename);
            return response()->json(["passport"=>$filename], 200);
        }else{
            return response()->json(['passport' => "not"], 200);
        }

    }
    public function academicRecord(Request $request){
//        $files = $request->file('file');
        if($request->hasFile('file'))
        {
            $file=$request->file('file');
            $extension = $file->getClientOriginalExtension();
            $filename =time().$request['name'].'.'.$extension;
            $file->move(public_path('students/educations'),$filename);
            return response()->json(["educations"=>$filename], 200);
        }else{
            return response()->json(['educations' => "not"], 500);
        }
    }
    public function applicationPayment(Request $request){
        if($request->hasFile('file'))
        {
            $file=$request->file('file');
            $extension = $file->getClientOriginalExtension();
            $filename =time().$request['name'].'.'.$extension;
            $file->move(public_path('students/payments'),$filename);
            return response()->json(["payment"=>$filename], 200);
        }else{
            return response()->json(['payment' => "not"], 500);
        }
    }
    public function getApplicationFee($program){
        if ($program=="CAT"){
            return response()->json(['amount' => 50000], 200);
        }else{
            return response()->json(['amount' =>50000 ], 200);
        }
    }

    public function testApplication(Request $request){
        $currentYear=date("Y");
        $last2 = DB::table('student_infos')->orderBy('id', 'DESC')->first();
        $reg=uniqid("JDD/".$request['program']."/".$currentYear,true);

        return response()->json(['customers' => $last2,"reg"=>$reg], 200);
//        return response()->json(['customers' => $request->all()], 200);
    }
    public function getReg(){
        $last2 = DB::table('users')->orderBy('id', 'DESC')->first();
        $currentYear=date("y");
        if ($last2){
            $count=($last2->id)+1;
            $currentId=str_pad($count, 6, '0', STR_PAD_LEFT);
            $reg="JDD/".$currentId."/".$currentYear;

        }else{
            $count=1;
            $currentId=str_pad($count, 6, '0', STR_PAD_LEFT);
            $reg="JDD/".$currentId."/".$currentYear;
        }
        return $reg;
    }
    public function submitApplication (Request $request){

        $reg=$this->getReg();

        $length = 10;
        $str = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz';

        $password=substr(str_shuffle($str), 0, $length);
//        $name=$request['firstName']." ".$request['lastName'];
        $user=User::create([
            'username' => $reg,
            'helpas' => $password,
            'active' => 0,
            'avatar_type' => "storage",
            'email' => $request['email'],
            'avatar_location' => $request['passportPhoto'],
            'program' => $request['program'],
            'first_name'=>$request['firstName'],
            'last_name'=>$request['lastName'],
            'dob'=>$request['dateOfBirth'],
            'address'=>$request['address'],
            'country'=>$request['nationality'],
            'residence'=>$request['country'],
            'phone'=>$request['phoneNo'],
            'phone2'=>$request['phoneNo2'],
            'gender'=>$request['gender'],
            'nid'=>$request['idNo'],
            'education'=>$request['educationLevel'],
            'sponsorship'=>$request['sponsorshipType'],
            'payment_mode'=>$request['payment'],
            'city'=>$request['city'],
            'information'=>$request['learnAboutUs'],
            'password' => Hash::make($password),
        ]);
        if ($user){

            $userForRole = User::find($user->id);
            $userForRole->confirmed = 0;
            $userForRole->confirmation_code = md5(uniqid(rand(), true));;
            $userForRole->save();
            $userForRole->assignRole('student');

            $amounts=0;
            $pay_type=0;
            if ($request['payment']=="BankDeposit"){
                $amounts=$request["bankDepositAmount"];
                $pay_type=0;
            }elseif (($request['payment']=="MobileMoneyDeposit")){
                $amounts=$request['mobileMoneyAmount'];
                $pay_type=1;
            }

            $order = new Order();
            $order->user_id = $user->id;
            $order->reference_no = str_random(8);
            $order->amount = $amounts;
            $order->status = 0;
            $order->coupon_id = 0;
            $order->payment_type = $pay_type;
            $order->save();
            if ($order){
                $items=new OrderItem();
                $items->order_id=$order->id;
                $items->item_id=0;
                $items->price=$amounts;
                $items->type=0;
                $items->item_type="Registration";
                $items->save();

                if ($request['payment']=="BankDeposit"){

                    $payment=new BankPayment();
                    $payment->user_id=$user->id;
                    $payment->order_id=$order->id;
                    $payment->bankDepositPaymentRefNo=$request["bankDepositPaymentRefNo"];
                    $payment->accountNumber=$request["accountNumber"];
                    $payment->branch=$request["branch"];
                    $payment->service="Registration";
                    $payment->bankDepositorNames=$request["bankDepositorNames"];
                    $payment->bankAttachment=$request["bankAttachment"];
                    $payment->bankDepositAmount=$request["bankDepositAmount"];
                    $payment->bankDepositDate=$request["bankDepositDate"];

                    $payment->save();
                }elseif (($request['payment']=="MobileMoneyDeposit")){
                    $payment=new MobilePayment();
                    $payment->user_id=$user->id;
                    $payment->order_id=$order->id;
                    $payment->service="Registration";
                    $payment->mobileMoneyDate=$request['mobileMoneyDate'];
                    $payment->mobileMoneyPaymentRefNo=$request['mobileMoneyPaymentRefNo'];
                    $payment->mobileMoneyDepositorNames=$request['mobileMoneyDepositorNames'];
                    $payment->serviceProvider=$request['serviceProvider'];
                    $payment->mobileMoneyPhoneNumber=$request['mobileMoneyPhoneNumber'];
                    $payment->mobileMoneyAmount=$request['mobileMoneyAmount'];
                    $payment->save();
                }

            }
            $name=$user->first_name." ".$user->last_name;

            $data = array(
                "sender"=>'+250788866742',
                "recipients"=>$user->phone,
                "message"=>"Welcome ".$name. "Your Registration well done Please wait Confirmation Email or SMS\n "
            ,);
            $url = "https://www.intouchsms.co.rw/api/sendsms/.json";
            $data = http_build_query($data);
            $username="tuyandre20";
            $password="kamana1234567";

            $ch = curl_init();
            curl_setopt($ch,CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
            curl_setopt($ch,CURLOPT_POST,true);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch,CURLOPT_POSTFIELDS, $data);
            $result = curl_exec($ch);
            $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
//            if ($result) {
//                return response()->json(['success' => "success"], 200);
//            }else{
//                return response()->json(['success' => "success"], 200);
//            }
            if(config('access.users.registration_mail')) {
                $this->sendAdminMail($user);
            }


//            Auth::login($user);

                return response()->json(['success' => "success"], 200);
        }else{
            return response()->json(['success' => fail], 500);
        }
//        return response()->json(['customers' => $request->all()], 200);
    }

    private function sendAdminMail($user)
    {
        $admins = User::role('administrator')->get();

        foreach ($admins as $admin) {
            \Mail::to($admin->email)->send(new AdminRegistered($user));
        }
        Notification::send($user, new WelcomeStudent($user));
//        Notification::send($user, new StudentRegistration($user));
    }
    public function checkEmail(Request $request){

    }
}
