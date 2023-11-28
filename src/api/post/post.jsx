import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export let addNewPost = createAsyncThunk(async function (object) {
  try {
      let { data } = await axiosRequest.post("Post/add-post", object);
      
  } catch (error) {
    console.error(error);
  }
});
