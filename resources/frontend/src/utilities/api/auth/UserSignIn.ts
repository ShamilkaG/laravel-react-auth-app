import axios, { type AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {IUserSignInPayload} from "../../types/signIn/SignIn";



export const UserSignIn = createAsyncThunk<
    AxiosResponse<any> | undefined,
    IUserSignInPayload
>("auth/signIn", async ({ signInDetails }) => {
    return axios.get("/sanctum/csrf-cookie").then(async () => {
        try {
            const response = await axios.post("api/sign-in", signInDetails);

            if(response.status === 200 ){
                return response.data
            }

        } catch (e) {
            console.log(e);
        }
    });
});

// return await axios.get('/sanctum/csrf-cookie').then(res => {
//     const response =  axios.post('api/sign-in',signInDetails)
//     // if endpoint will fail
//     console.log(response)
// });
