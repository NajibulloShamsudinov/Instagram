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
      dispatch()
  } catch (error) {
    console.error(error);
  }
});
