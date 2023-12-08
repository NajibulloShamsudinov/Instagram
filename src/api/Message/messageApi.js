import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

// Async GET
export const getChats = createAsyncThunk(
  "message/getChats",
  async function (_, rejectWithValue) {
    try {
      const { data } = await axiosRequest.get("Chat/get-chats");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async GET SEARCH
export const getUsersSearch = createAsyncThunk(
  "message/getUsersSearch",
  async function (_, { getState, dispatch, rejectWithValue }) {
    let API = "User/get-users";
    if (getState().message.search != "") {
      API = `User/get-users?UserName=${getState().message.search}`;
    }
    try {
      const { data } = await axiosRequest.get(API);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async POST - Create Chat
export const createChat = createAsyncThunk(
  "message/createChat",
  async function (_, { getState, dispatch, rejectWithValue }) {
    try {
      const { data } = await axiosRequest.post(
        `Chat/create-chat?receiverUserId=${getState().message.userChat}`
      );
      dispatch(getChats());
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async GET chat by id
export const getChatById = createAsyncThunk(
  "message/getChatById",
  async function (chatId, { dispatch, rejectWithValue }) {
    try {
      const { data } = await axiosRequest.get(
        `Chat/get-chat-by-id?chatId=${chatId}`
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async DELETE-CHAT
export const deleteChat = createAsyncThunk(
  "message/deleteChat",
  async function (chatId, { dispatch, rejectWithValue }) {
    try {
      const { data } = await axiosRequest.delete(
        `Chat/delete-chat?chatId=${chatId}`
      );
      dispatch(getChats());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async POST - send message
export const sendMessage = createAsyncThunk(
  "message/sendMessage",

  async function ({ newObj, idx }, { dispatch, rejectWithValue }) {
    console.log(newObj);

    try {
      const { data } = await axiosRequest.post("Chat/send-message", newObj);
      console.log(data);
      dispatch(getChatById(idx));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async DELETE-MESSAGE
export const deleteMessage = createAsyncThunk(
  "message/deleteMessage",
  async function (messageId, { dispatch, rejectWithValue }) {
    try {
      const { data } = await axiosRequest.delete(
        `Chat/delete-message?massageId=${messageId}`
      );
      dispatch(getChatById(messageId));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
