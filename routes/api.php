<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('/sign-in', function () {
////    return 'hello laravel api';
//    return ['hello' => 'world'];
//});

Route::post('/sign-in', [UserController::class, 'userSignIn']);
