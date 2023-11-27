import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const get =createAsyncThunk(
    "home/get",
    async function() {
        try {
            const {data}=await axiosRequest.get("Post/get-posts")
            // console.log(data)
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
            const {data}=await axiosRequest.put(`Post/like-post?postId=${id}`)
            dispatch(likes())
        } catch (error) { 
            console.log(error)
        }
    }
)