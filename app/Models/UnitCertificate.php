<?php

namespace App\Models;

use App\Models\Auth\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitCertificate extends Model
{
    use HasFactory;
    protected $guarded =[];
    protected $appends = ['certificate_link'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }
    public function lesson(){
        return $this->belongsTo(Lesson::class);
    }

    public function getCertificateLinkAttribute(){
        if ($this->url != null) {
            return url('storage/certificates/'.$this->url);
        }
        return NULL;
    }
}
