import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export let addNewPost = createAsyncThunk(
  "post/addNewPost",
  async function (form,{dispatch}) {
  try {
      let { data } = await axiosRequest.post("Post/add-post", form,{
        headers:{
          'Content-Type':'multipart/form-data'
        } 

      });
      dispatch(getpost())
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
