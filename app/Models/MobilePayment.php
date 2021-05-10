<?php

namespace App\Models;

use App\Models\Auth\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MobilePayment extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','order_id','status','mobileMoneyDate','mobileMoneyPaymentRefNo',
        'mobileMoneyDepositorNames','serviceProvider','mobileMoneyPhoneNumber','mobileMoneyAmount'
        ,'service'];
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function Order()
    {
        return $this->belongsTo(Order::class);
    }
}
