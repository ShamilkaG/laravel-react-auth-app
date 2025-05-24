import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAuthInitialState } from "../../types/slices/AuthSlice";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";

interface IAuthPayload {
    user_id: string;
    user_token: string;
}

const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserSignIn.pending, (state) => {
                state.isLoading = true;
                state.token = "";
                state.isAuthenticated = false;
            })
            .addCase(
                UserSignIn.fulfilled,
                (state, {payload}) => {
                    setPayloadValuesUntoStore(state, payload);
                },
            )
            .addCase(UserSignIn.rejected, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    },
});

const setPayloadValuesUntoStore = (state: IAuthInitialState, payload: IAuthPayload) =>{
    if(!payload){
        return
    }
    state.token = payload.user_token;
    state.user_id = payload.user_id;
    state.isAuthenticated = true;
    state.isLoading = false;
}
export default authSlice.reducer;
