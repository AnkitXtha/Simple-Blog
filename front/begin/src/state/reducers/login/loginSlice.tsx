import { createSlice } from "@reduxjs/toolkit";
import { loginCall } from "./loginAction";


type loginData = {
    name: string,
    email: any,
    nickname: any,
}

interface loginState {
    loading: boolean,
    signUpd: boolean,
    csrfToken: any | null
    userInfo: loginData | null,
    error: any | null,
}

const initialState = {
    loading: false,
    signUpd: false,
    userInfo: null,
    error: null,
    csrfToken: null
} as loginState

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        logout(state){
            state.userInfo = null
        },
        userDetails(state, action){
            state.userInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginCall.pending, (state) => {
            state.loading = true;
            state.signUpd = false;
            state.userInfo = null;
            state.error = null;
        })
        .addCase(loginCall.fulfilled, (state, action) => {
            state.loading = false;
            state.signUpd = true;
            state.userInfo = action.payload
            state.error = null;
        })
        .addCase(loginCall.rejected, (state, action) => {
            state.loading = false;
            state.signUpd = false;
            state.userInfo = null;
            state.error = action.payload
        })
    }
})

export const {logout, userDetails} = loginSlice.actions

export default loginSlice.reducer