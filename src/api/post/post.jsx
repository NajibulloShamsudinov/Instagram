import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import { getPostById, getProfile, getProfileById } from "../profile/profile";
import { get } from "../home/home";

export let addNewPost = createAsyncThunk(
  "post/addNewPost",
  async function (form,{dispatch}) {
  try {
      let { data } = await axiosRequest.post("Post/add-post", form,{
        headers:{
          'Content-Type':'multipart/form-data'
        } 

      });

        dispatch(get())
  } catch (error) {
    console.error(error);
  }
});

export const getpost=createAsyncThunk(
  "post/getpost",
  async function(){
    try {
      const {data}=await axiosRequest.get("User/get-users")
      return data.data
    } catch (error) {
      console.log(error);
    }
  }
)
