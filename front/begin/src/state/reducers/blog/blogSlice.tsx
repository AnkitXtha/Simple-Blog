import { createSlice } from "@reduxjs/toolkit"
import { getBlogData, postBlogCall } from "./blogAction"


type blogData = {
    title: string,
    description: string,
    author: string,
    _id: any
}

interface blogState{
    loading: boolean,
    blogsData: blogData | null,
    allBlogs: blogData | null,
    error: any | null
}

const initialState = {
    loading: false,
    blogsData: null,
    error: null,
    allBlogs: null
} as blogState

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        allBlogData(state, action) {
            state.allBlogs = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postBlogCall.pending, (state) => {
            state.loading = true;
            state.blogsData = null;
            state.error = null;
        })
        .addCase(postBlogCall.fulfilled, (state, action) => {
            state.loading = false;
            state.blogsData = action.payload;
            state.error = null;
        })
        .addCase(postBlogCall.rejected, (state, action) => {
            state.loading = false;
            state.blogsData = null;
            state.error = action.payload
        })
        .addCase(getBlogData.pending, (state) => {
            state.allBlogs = null;
        })
        .addCase(getBlogData.fulfilled, (state, action) => {
            state.allBlogs = action.payload;
        })
    }
})

export default blogSlice.reducer;