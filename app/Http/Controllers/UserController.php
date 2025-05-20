<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(Request $request)  : JsonResponse //return type declaration JsonResponse
    {
//        Log::info($request->all());
//        return ['test' =>'test'];

        $user = User::where('email', $request->email)->first();
//        Log::info($user);

        if(!$user){
            return response()->json([
                'message' => 'User not found'
            ]);
        }

//        return response()->json([
//            'message' => 'User found'
//        ]);

        if ($this->isValidateUserCredentials($request->all(),$user)){
            return response()->json([
                'message' => 'User found',
                'user_token'=> $user->createToken('testToken',['server:admin'])->plainTextToken,
            ]);
        }
        return response()->json([]);
    }

    public function isValidateUserCredentials(array $request,User $user): bool// type definition - $request is a array and $user is User model / return boolean value
    {
      return  $user->email === $request['email'] &&  Hash::check($request['password'],$user->password);
    }

}
