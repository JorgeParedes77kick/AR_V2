@extends('layouts.app')

@section('content')
    <div id='app'>
        <v-app app>
            <register :nationalities="{{ $nationalities }}" :countries="{{ $countries }}"></register>
        </v-app>
    </div>
@endsection
