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