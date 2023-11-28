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

export const getPostById = createAsyncThunk(
    'profile/getPostById',
    async function(id){
        try {
            const {data} = await axiosRequest.get(`Post/get-posts?UserId=${id}`)
            // console.log(data.data);
            return data.data
        } catch (error) {
            
        }
    } 
)



export const getSubsciption = createAsyncThunk(
    'profile/getSubsciption',
    async function(id){ 
        console.log(id);
        try {
            const {data} = await axiosRequest.get(`FollowingRelationShip/get-subscribers?UserId=${id}`)
            console.log(data.data);
            return data.data
        } catch (error) {
            
        }
    } 
)




export const getUser = createAsyncThunk(
    'profile/getUser',
    async function(){
        try {
            const {data} = await axiosRequest.get('User/get-users')
            console.log(data.data);
            return data.data
        } catch (error) {
            
        }
    } 
)



