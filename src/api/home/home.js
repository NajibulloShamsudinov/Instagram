import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const get =createAsyncThunk(
    "home/get",
    async function() {
        try {
            const {data}=await axiosRequest.get("Post/get-posts")
            console.log(data);
            return data.data
        } catch (error) { 
            console.log(error)
        }
    }
)
export const users =createAsyncThunk(
    "home/users",
    async function() {
        try {
            const {data}=await axiosRequest.get("User/get-users")
            return data.data
        } catch (error) { 
            console.log(error)
        }
    }
)
export const likes=createAsyncThunk(
    "home/likes",
    async function(id,{dispatch}) {
        try {
            const {data}=await axiosRequest.post(`Post/like-post?postId=${id}`)
            dispatch(get())
        } catch (error) { 
            console.log(error)
        }
    }
)
export const story =createAsyncThunk(
    "home/story",
    async function() {
        try {
            const {data}=await axiosRequest.get("Story/get-stories")
            return data.data
        } catch (error) { 
            console.log(error)
        }
    }
)

// export const addCom=createAsyncThunk(
//     "home/addCom",
//     async function(obj,{dispatch}) {
//         try {
//             const {data}=await axiosRequest.post(`Post/like-post?postId=${id}`,obj)
//             dispatch(get())
//         } catch (error) { 
//             console.log(error)
//         }
//     }
// )