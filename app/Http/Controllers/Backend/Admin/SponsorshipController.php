<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sponsorship;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class SponsorshipController extends Controller
{
    public function index()
    {
        $sponsors = Sponsorship::get();
        return view('backend.sponsorship.index', compact('sponsors'));
    }
    public function getData(Request $request)
    {
            $orders = Sponsorship::query()->orderBy('created_at', 'desc');


        return DataTables::of($orders)
            ->addIndexColumn()
            ->addColumn('actions', function ($q) use ($request) {
//                $view = "";

                $view = view('backend.datatable.action-view')
                    ->with(['route' => route('admin.sponsorship.show', ['sponsor' => $q->id])])->render();


                    $delete = view('backend.datatable.action-delete')
                        ->with(['route' => route('admin.orders.destroy', ['order' => $q->id])])
                        ->render();

                    $view .= $delete;

                return $view;

            })
            ->addColumn('name', function ($q) {
                return $q->sponsor_name;
            })
            ->addColumn('email', function ($q) {
                return $q->sponsor_email;
            })
            ->addColumn('contact', function ($q) {

                return $q->sponsor_contact;
            })
            ->rawColumns(['actions'])
            ->make();
    }
    public function show($id)
    {
        $sponsor = Sponsorship::findOrFail($id);
        return view('backend.sponsorship.show', compact('sponsor'));
    }


    public function destroy($id)
    {

        $sponsor = Sponsorship::findOrFail($id);
       $del= $sponsor->delete();
        if ($del){
            return redirect()->route('admin.sponsorship.index')->withFlashSuccess('Sponsorship Deleted');
        }
        return redirect()->route('admin.sponsorship.index')->withFlashSuccess('You can not delete Sponsorship. Students are already used. Reject the Student instead');
    }


}
