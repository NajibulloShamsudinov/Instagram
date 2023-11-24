import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";



export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async function(){
        try {
            const {data} = await axiosRequest.get("User/get-users")
            return data.data
        } catch (error) {
            
        }
    } 
)