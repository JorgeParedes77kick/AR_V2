@extends('layouts.app')

@section('content')
    <div id='app'>
        <v-app app>
            <login :roles="{{ $roles }}"></login>
        </v-app>
    </div>
@endsection
