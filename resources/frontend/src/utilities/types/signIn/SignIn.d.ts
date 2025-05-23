import React from "react";

export interface ISignInState {
    email: string,
    password: string,
}

export interface ISignInFormProp {
    handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void // void not return , {} - have a return must be
    handleSubmit: (event: React.FormEvent) => Promise<void>
}
