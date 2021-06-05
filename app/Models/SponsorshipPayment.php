<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\User;
class SponsorshipPayment extends Model
{
    use HasFactory;
    protected $table = 'sponsorship_payments';
    protected $fillable = ['user_id','sponsor_id','sponsorDepositDate','sponsorDepositPaymentRefNo'
        ,'order_id','sponsorDepositAmount','sponsorAttachment','service'];

    public function User()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function Order()
    {
        return $this->belongsTo(Order::class);
    }
    public function Sponsor()
    {
        return $this->belongsTo(Sponsorship::class,"sponsor_id");
    }
}
