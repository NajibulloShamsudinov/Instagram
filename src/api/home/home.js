import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const get =createAsyncThunk(
    "home/get",
    async function() {
        try {
            const {data}=await axiosRequest.get("Post/get-posts?PageSize=30")
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
            const {data}=await axiosRequest.post(`Post/like-post?postId=${id}`)
            dispatch(get())
        } catch (error) { 
            console.log(error)
        }
    }
)
export const story =createAsyncThunk(
    "home/story",
    async function() {
        try {
            const {data}=await axiosRequest.get("Story/get-stories")
            return data.data
        } catch (error) { 
            console.log(error)
        }
    }
)

export const addCom=createAsyncThunk(
    "home/addCom",
    async function(e,{dispatch}) {
        try {
            const {data}=await axiosRequest.post("Post/add-comment",{
                comment:e.comment,
                postId:e.postId
            })
            dispatch(get())
        } catch (error) { 
            console.log(error)
        }
    }
)
export const delCom=createAsyncThunk(
    "home/delCom",
    async function(postCommentId,{dispatch}) {
        try {
            const {data}=await axiosRequest.delete(`Post/delete-comment?commentId=${postCommentId}`)
            dispatch(get())
        } catch (error) { 
            console.log(error)
        }
    }
)

export const addStories= createAsyncThunk(
    'home/addStories',
    async function (form, { dispatch }) {
        try {
            const { data } = await axiosRequest.post('Story/AddStories', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            dispatch(story())
        } catch (error) {
            console.error(error);
        }
    }
)