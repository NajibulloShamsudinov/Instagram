import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import axios from "axios";
export const getdata = createAsyncThunk(
    "search/getdata",
    async function (_, { getState }) {
        
        let api2 = "User/get-users";
        // if(getState().searchred.searchinp.length==0){
        //     api2="SearchHistory/get-user-search-histories"
        // }

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
    async  function(id,{dispatch,getState}){
        try {
            const {data}=await axiosRequest.post(`SearchHistory/add-user-search-history?UserSearchId=${id}`,id)
                // getState().searchred.search=data.data
                console.log(data.data);
            dispatch(getdata())
            return data
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

