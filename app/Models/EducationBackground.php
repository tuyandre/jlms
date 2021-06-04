<?php

namespace App\Models;

use App\Models\Auth\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationBackground extends Model
{
    use HasFactory;
    protected $table = 'education_backgrounds';
    protected $fillable = ['user_id','degree','subjects','institutions','certificates',
        'professional','attachments'];
    public function User()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
