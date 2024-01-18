import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import axios from "axios";

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
export const signUpCall = createAsyncThunk<any>(
    "signup/signUpCall",
    async (signUpCredentials) => {
          await delay(2000);
        
        const config = {
            headers: {
                "Cache-Control": "private",
                "Content-Type": "application/json",
            },
        };
        try{

            const request = await axios.post(
                `${baseUrl}/user/register`, signUpCredentials, config,
            );
            const response = await request.data;
            console.log("Response",response)
            return response;
        }
        catch(error: any){
            console.log("res error",error.response);
            return error.response.data
        }
    }
)
