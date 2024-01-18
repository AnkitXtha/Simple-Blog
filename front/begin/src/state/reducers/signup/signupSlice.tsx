import { createSlice } from "@reduxjs/toolkit";
import { signUpCall } from "./signUpAction";


interface SignUpState {
    _loading: boolean,
    signUpd: boolean,
    error: any | null,
}

const initialState = {
    _loading: false,
    signUpd: false,
    error: null
} as SignUpState

const signUpSlice = createSlice({
    name: "signup",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(signUpCall.pending, (state) => {
            state._loading = true;
            state.signUpd = false;
            state.error = null;
        })
        .addCase(signUpCall.fulfilled, (state) => {
            state._loading = false;
            state.signUpd = true;
            state.error = null;
        })
        .addCase(signUpCall.rejected, (state, action) => {
            state._loading = false;
            state.signUpd = false;
            state.error = action.payload
        })
    }
})

export default signUpSlice.reducer