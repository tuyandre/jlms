<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\User;

class BankPayment extends Model
{
    use HasFactory;
    protected $table = 'bank_payments';
    protected $fillable = ['user_id','student_id','bankDepositDate','bankDepositPaymentRefNo','accountNumber'
        ,'branch','bankDepositorNames','bankAttachment','bankDepositAmount','service'];


    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function Order()
    {
        return $this->belongsTo(Order::class);
    }
}
