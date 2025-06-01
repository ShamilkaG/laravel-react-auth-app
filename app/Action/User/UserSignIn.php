<?php

namespace App\Action\User;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSignIn
{
    public function __invoke(array $validatedUserSignInRequest): array
    {
        $user = User::where('email', $validatedUserSignInRequest['email'])->first();

        if (! $user) {
            return [
                'message' => 'User not found'
            ];
        }


        if ($this->isValidateUserCredentials($validatedUserSignInRequest['email'], $validatedUserSignInRequest['password'], $user)) {
            return [
                'user_id' => $user->id,
                'user_role' =>  1,
                'user_token' => $user->createToken('testToken', ['server:admin'])->plainTextToken,
            ];
        }

        return [
            'message' => 'User credentials not valid'
        ];
    }

    public function isValidateUserCredentials(string $email, string $password, User $user): bool
    {
        return $user->email === $email && Hash::check($password, $user->password);
    }
}
