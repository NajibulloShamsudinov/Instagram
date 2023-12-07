import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export let get = createAsyncThunk("data/get", async function () {
  try {
    let { data } = await axiosRequest.get(
      "/Notification/get-notification-about-likes"
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
});


export let getSubscr = createAsyncThunk("data/getSubscr", async function (userId) {
  try {
    let { data } = await axiosRequest.get(
      `FollowingRelationShip/get-subscriptions?UserId=${userId}`
    );
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export let filllowing = createAsyncThunk(
  "data/filllowing",  
  async function (id, { dispatch }) {
    try {
      let { data } = await axiosRequest.post(
        `FollowingRelationShip/add-following-relation-ship?followingUserId=${id}`
      );
      dispatch(get());
    } catch (error) {
      console.error(error);
    }
  }
);
export const unFollowing = createAsyncThunk(
  "data/unFollowing",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.delete(
        `FollowingRelationShip/delete-following-relation-ship?id=${id}`
      );
      console.log("id "+id);
      console.log("data "+data);

      dispatch(get());
    } catch (error) {
      console.error(error);
    }
  }
);
