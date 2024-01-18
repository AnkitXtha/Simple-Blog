import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import axios from "axios";

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginCall = createAsyncThunk<any>(
    "login/loginCall",
    async (loginCredentials) => {
        await delay(2000);
        const config = {

            headers: {
                "Content-Type": "application/json",
            },
        };
        try{
          const request = await axios.post(`${baseUrl}/user/login`, loginCredentials, config)
          const response = await request.data
          console.log(response);
          
          return response;
        }
        catch(error: any){
          console.log(error.response.data);

          return error.response.data;
        }
        // try {
        //     await axiosClient.get("http://localhost:8000/sanctum/csrf-cookie",{
        //         withCredentials: true,
        //       }).then((responses: any) => {
        //       // Assuming responses is an array, and the CSRF token is in responses[0]
        //         console.log("token: "+responses[0])
        //       const config = {
        //         headers: {
        //           "Content-Type": "application/json",
        //           "X-CSRF-TOKEN": responses, // Assuming this is how you pass the CSRF token
        //         },withCredentials: true
        //       };

        //     axiosClient.post(`${baseUrl}/login`, loginCredentials, config)
        //       .then((response) => {
        //         localStorage.setItem("ACCESS_TOKEN", JSON.stringify(response.data));
        //         console.log(response.data);
        //         return response.data;
        //       })
        //       .catch((error) => {
        //         console.error("Login error", error);
        //         return error.response?.data || "An error occurred during login";
        //       });
        //     })
        //   } catch (error) {
        //     console.error("Unexpected error", error);

        //      }   //

    }
)
