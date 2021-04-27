<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function instructions(){
        return view('customized.instruction');

    }
    public function apply(){
        return view('customized.register');
    }
}
