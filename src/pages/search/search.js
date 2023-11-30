import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import axios from "axios";
export const getdata = createAsyncThunk(
    "searchred/getdata",
    async function (_, { getState ,rejectWithValue}) {

        // let api2 = "User/get-users";
        // console.log(getState().searchred.searchinp);
        // if(getState().searchred.searchinp.length == 0){
        //     console.log("S");
        //     api2 = `SearchHistory/get-user-search-histories`
        // }
        // if (getState().searchred.searchinp.length !== 0) {
        //     api2 = `User/get-users?UserName=${getState().searchred.searchinp}`
        // }
        try {
           
            const { data } = await axiosRequest.get(`User/get-users?UserName=${getState().searchred.searchinp}`)
            return data.data
        } catch (error) {
          return   rejectWithValue(error)
        }
    }

)


export const storget=createAsyncThunk(
    "search/storget",
    async function(){
        try {
            const {data}=await axiosRequest.get("SearchHistory/get-user-search-histories")   
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const postuser=createAsyncThunk(
    "search/postuser",
    async  function(id,{dispatch,getState}){
        try {
            const {data}=await axiosRequest.post(`SearchHistory/add-user-search-history?UserSearchId=${id}`)
                // getState().searchred.search=data.
                
                console.log(data);
            dispatch(getdata())
            // dispatch(storget())
        } catch (error) {
            console.log(error);
        }
    }
)
export const deluser = createAsyncThunk(
    "seacrh/deluser",
    async function (id, { dispatch }) {
        try {
            const { data } = await axiosRequest.delete(`SearchHistory/delete-user-search-history?id=${id}`)
            dispatch(storget())
        } catch (error) {
            console.log(error);
        }
    }

)
export const obdelet = createAsyncThunk(
    "seacrh/obdelet",
    async function (_, { dispatch }) {
        try {
            const { data } = await axiosRequest.delete(`SearchHistory/delete-user-search-histories`)
            dispatch(storget())
        } catch (error) {
            console.log(error);
        }
    }

)

