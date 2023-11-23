import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";

export const getData = createAsyncThunk("reels/getData", async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-posts");
    
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
