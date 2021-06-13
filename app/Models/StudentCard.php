<?php

namespace App\Models;

use App\Models\Auth\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentCard extends Model
{
    use HasFactory;
    protected $guarded =[];
    protected $appends = ['studentCard_link'];

    public function user(){
        return $this->belongsTo(User::class);
    }



    public function getCertificateLinkAttribute(){
        if ($this->url != null) {
            return url('students/cards/'.$this->url);
        }
        return NULL;
    }
}
