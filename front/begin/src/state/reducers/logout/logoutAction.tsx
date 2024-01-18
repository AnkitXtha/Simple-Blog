import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutCall = createAsyncThunk<any>(
    "logout/logoutCall",
    async (token, { rejectWithValue }) => {
        //   await delay(2000);
        try{
            localStorage.clear();
        }
        catch(error: any){
            console.error(error);
            return rejectWithValue(error)

        }

    }
)
