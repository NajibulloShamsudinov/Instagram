import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";



export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async function () {
        try {
            const { data } = await axiosRequest.get("User/get-users?PageSize=100")
            return data.data
        } catch (error) {

        }
    }
)



export const getPostById = createAsyncThunk(
    'profile/getPostById',
    async function (id) {
        try {
            const { data } = await axiosRequest.get(`Post/get-posts?UserId=${id}`)
            // console.log(data.data);
            return data.data
        } catch (error) {

        }
    }
)




export const getProfileById = createAsyncThunk(
    'profile/getProfileById',
    async function (id) {
        try {
            const { data } = await axiosRequest.get(`UserProfile/get-user-profile-by-id?UserId=${id}`)
            return data.data
        } catch (error) {

        }
    }
)





export const getSubsciption = createAsyncThunk(
    'profile/getSubsciption',
    async function (id) {
        console.log(id);
        try {
            const { data } = await axiosRequest.get(`FollowingRelationShip/get-subscribers?UserId=${id}`)
            console.log(data.data);
            return data.data
        } catch (error) {

        }
    }
)



export const getSubsciptions = createAsyncThunk(
    'profile/getSubsciptions',
    async function (id) {
        console.log(id);
        try {
            const { data } = await axiosRequest.get(`/FollowingRelationShip/get-subscriptions?UserId=${id}`)
            console.log(data.data);
            return data.data
        } catch (error) {

        }
    }
)




export const getUser = createAsyncThunk(
    'profile/getUser',
    async function () {
        try {
            const { data } = await axiosRequest.get('User/get-users')
            console.log(data.data);
            return data.data
        } catch (error) {

        }
    }
)



export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async function (form, { dispatch }) {
        console.log(form);
        try {
            const { data } = await axiosRequest.put('UserProfile/update-profile-photo', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            dispatch(getUser())
        } catch (error) {
            console.error(error);
        }
    }
)


export const deletPhoto = createAsyncThunk(
    'profile/deletPhoto',
    async function (_, { dispatch }) {
        try {
            const { data } = await axiosRequest.delete('UserProfile/delete-profile-photo')
            dispatch(getUser())
        } catch (error) {
            console.error(error);
        }
    }
)



export const editUser = createAsyncThunk(
    'profile/editUser',
    async function editUser(_, { dispatch , getState}) {
        let text = getState().profile.text
        let gender = getState().profile.gender
        try {

            const { data } = await axiosRequest.put('UserProfile/update-user-profile', {
                about: text,
                fullName:"",
                dob:"",
                gender:0,
                phoneNumber:"",
                email:""
            })

            dispatch(getUser())
            
        } catch (error) {
            console.log(error);
        }
    }
)




