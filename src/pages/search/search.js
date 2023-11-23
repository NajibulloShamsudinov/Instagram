import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
export const data=createAsyncThunk(
    "search/data",
    async function(){
        try {
            const {data}=await axiosRequest.get("get-users")
            return
        } catch (error) {
            console.log(error);
        }
    }
)



