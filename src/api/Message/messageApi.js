import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

// Async GET
export const getUsers = createAsyncThunk(
  "message/getUsers",
  async function (_, { getState, dispatch, rejectWithValue }) {
    let apiTemp = "User/get-users";
    if (getState().message.search != "") {
      apiTemp = `User/get-users?UserName=${getState().message.search}`;
    }
    try {
      const { data } = await axiosRequest.get(apiTemp);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
