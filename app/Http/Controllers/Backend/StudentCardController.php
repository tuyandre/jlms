<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\StudentCard;
use App\Models\UnitCertificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class StudentCardController extends Controller
{
    public function getStudentCard()
    {
        $students = auth()->user()->studentCard;
        return view('backend.students.studentCardList', compact('students'));
    }

    public function downloadStudentCard(Request $request)
    {
        $card = StudentCard::findOrFail($request->card_id);
        if($card != null){
            $file = public_path() . "/students/cards/" . $card->url;
            return Response::download($file);
        }
        return back()->withFlashDanger('No Certificate found');


    }
}
