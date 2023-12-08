import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
export let getPosts = createAsyncThunk(
  "data/getPosts",
  async function () {
    try {
      let { data } = await axiosRequest.get("/Post/get-posts?PageSize=100");
      return data.data;
    } catch (error) {
      console.error(error); 
    }
  }
);
export const postLike = createAsyncThunk(
  "reels/postLike",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.post(`Post/like-post?postId=${id}`);
      dispatch(getPosts());
    } catch (error) {
      console.error(error);
    }
  }
);
export const addCom2 = createAsyncThunk(
  "home/addCom",
  async function (e, { dispatch }) {
    try {
      const { data } = await axiosRequest.post("Post/add-comment", {
        comment: e.comment,
        postId: e.postId,
      });
      dispatch(getPosts());
    } catch (error) {
      console.log(error);
    }
  }
);