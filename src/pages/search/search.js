import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
export const getdata=createAsyncThunk(
    "search/getdata",
    async function(_,{getState}){

        let api2="User/get-users";
        if(getState().searchred.searchinp.length!==0){

            api2=`User/get-users?UserName=${getState().searchred.searchinp}`
        }
        

        try {
            const {data}=await axiosRequest.get(api2)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const deluser=createAsyncThunk(
    "seacrh/deluser",
    async function(id,{dispatch}){
        try {
            const {data}=await axiosRequest.delete(`User/delete-User?userId=${id}`)
            dispatch(getdata())
        } catch (error) {
            console.log(error);
        }
    }

)


