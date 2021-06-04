<?php

namespace App\Http\Controllers;

use App\Models\Auth\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function testCurl(Request $request){
        if(function_exists('curl_init') === false){
            return response()->json(['success' => "disabled"], 200);
        }

            return response()->json(['success' => "enabled"], 200);

    }
    public function checkEmail(Request $request){
        if (User::where('email', $request['email'])->count() > 0) {
            return response()->json(['success' => "exist"], 200);
        }
    }

}
