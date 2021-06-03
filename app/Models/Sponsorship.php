<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sponsorship extends Model
{
    use HasFactory;
    protected $table = 'sponsorships';
    protected $fillable = ['sponsor_name','sponsor_email','sponsor_contact'];
}
