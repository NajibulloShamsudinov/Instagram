import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export let addNewPost = createAsyncThunk(
  "post/addNewPost",
  async function (img,{dispatch}) {
  try {
      let { data } = await axiosRequest.post("Post/add-post", {
        
      });
      
  } catch (error) {
    console.error(error);
  }
});
