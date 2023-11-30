import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";
import axios from "axios";

export const getData = createAsyncThunk("reels/getData",
  async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-reels");
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
  });


  export const getData1 = createAsyncThunk("reels/getData1", async () => {
    try {
      const { data } = await axiosRequest.get("User/get-users");
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
      dispatch(getData());
    } catch (error) {
      console.error(error);
    }
  }
);


export const postComment = createAsyncThunk(
  "reels/postComment",
  async function (e, { dispatch }) {
    try {
      const { data } = await axiosRequest.post("Post/add-comment", {
        comment: e.comment,
        postId: e.postId,
      });
      console.log(data);
      dispatch(getData());
    } catch (error) {
      console.error(error);
    }
  }
);
