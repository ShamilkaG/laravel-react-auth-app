<?php

namespace App\Http\Controllers;

use App\Action\User\UserSignIn;
use App\Http\Requests\User\UserSignInValidationRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(UserSignInValidationRequest $request, UserSignIn $userSignIn): JsonResponse
    {
        $validatedUserSignInRequest = $request->validated();

        return response()->json($userSignIn($validatedUserSignInRequest));

    }

    public function isValidateUserCredentials(array $request,User $user): bool// type definition - $request is a array and $user is User model / return boolean value
    {
      return  $user->email === $request['email'] &&  Hash::check($request['password'],$user->password);
    }

}
