import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import axios from "axios";
export const getdata = createAsyncThunk(
    "search/getdata",
    async function (_, { getState }) {
        
        let api2 = "User/get-users";
        if(getState().searchred.searchinp.length==0){
            api2="SearchHistory/get-search-histories"
        }

        if (getState().searchred.searchinp.length !== 0) {
            api2 = `User/get-users?UserName=${getState().searchred.searchinp}`
        }
        try {
            const { data } = await axiosRequest.get(api2)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }

)

// export const storget=createAsyncThunk(
//     "search/storget",
//     async function(){
//         try {
//             const {datastor}=await axiosRequest.get("User/get-search-histories")
           
//             return datastor.data
//             console.log(datastor);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// )

export const postuser=createAsyncThunk(
    "search/postuser",
    async  function(username,{dispatch}){
        console.log(1)
        try {
            const {data}=await axiosRequest.post(`SearchHistory/add-search-history?Text=${username}`)
           dispatch(getdata())
        } catch (error) {
            console.log(error);
        }
    }
)
export const deluser = createAsyncThunk(
    "seacrh/deluser",
    async function (id, { dispatch }) {
        try {
            const { data } = await axiosRequest.delete(`User/delete-User?userId=${id}`)
            dispatch(getdata())
        } catch (error) {
            console.log(error);
        }
    }

)


