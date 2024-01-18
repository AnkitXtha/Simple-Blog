import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";


export const getBlogData = createAsyncThunk<any>(
    "blog/getBlogData",
    async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const request = await axios.get(`${baseUrl}/blog`, config)
            const response = await request.data;

            return response;
        } catch (error: any) {
            console.log(error.response.data);
            return error.response.data;
            
        }
    }
)

export const postBlogCall = createAsyncThunk<any>(
    "blog/postBlogCall",
    async (blogCredentials) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const request = await axios.post(`${baseUrl}/blog/postBlog`, blogCredentials, config);
            const response = await request.data;
            
            return response;
        } catch (error: any) {
            console.log(error.response.data);
            return error.response.data
        }
    }
)