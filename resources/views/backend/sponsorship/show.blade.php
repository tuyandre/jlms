@extends('backend.layouts.app')
@section('title', __('labels.backend.orders.title').' | '.app_name())

@section('content')

    <div class="card">

        <div class="card-header">
            <h3 class="page-title mb-0 float-left">Sponsorship Detail</h3>

        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <th>Sponsor Name</th>
                            <td>
                                {{$sponsor->sponsor_name}}
                            </td>
                        </tr>
                        <tr>
                            <th>Sponsor Email</th>
                            <td>
                                {{$sponsor->sponsor_email}}
                            </td>
                        </tr>
                        <tr>
                            <th>Sponsor Contact</th>
                            <td>
                           {{$sponsor->sponsor_contact}}
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('labels.backend.orders.fields.date')</th>
                            <td>{{ $sponsor->created_at->format('d M, Y | h:i A') }}</td>
                        </tr>


                    </table>
                </div>
            </div><!-- Nav tabs -->
            @if(Auth::user()->isAdmin())

            @endif
        </div>
    </div>
@stop