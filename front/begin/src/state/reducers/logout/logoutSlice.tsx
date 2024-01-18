import { createSlice } from "@reduxjs/toolkit";
import { logoutCall } from "./logoutAction";

interface logoutState {
    loading: boolean,
    logout: any | null
    error: any | null,
    token: any | null,
}

const initialState = {
    loading: false,
    logout: null,
    error: null,
    token: null
} as logoutState

const logoutSlice = createSlice({
    name: "logout",
    initialState,
    reducers:{
        // getLocalToken (state){
        //     let initalToken = localStorage.getItem("user")
        //     if(initalToken){
        //     state.token = initalToken
        //      }else{
        //         state.token = null
        //      }
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(logoutCall.pending, (state) => {
            state.loading = true;
            state.logout = null;
            state.error = null;
        })
        .addCase(logoutCall.fulfilled, (state, action) => {
            state.loading = false;
            state.logout = null;
            state.error = null;
        })
        .addCase(logoutCall.rejected, (state, action) => {
            state.loading = false;
            state.logout = null;
            state.error = action.error.message
        })
    }
})

// export const {getLocalToken} = logoutSlice.actions

export default logoutSlice.reducer