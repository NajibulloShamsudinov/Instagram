import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";
import axios from "axios";

export const getData = createAsyncThunk("reels/getData", async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-reels");
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});


export const postLike = createAsyncThunk(
  "reels/postLike",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.post(`Post/like-post?postId=${id}`);
      console.log(data);
      dispatch(getData());
    } catch (error) {
      console.error(error);
    }
  }
);
