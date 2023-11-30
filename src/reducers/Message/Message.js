import { createSlice } from "@reduxjs/toolkit";
import {
  getChats,
  getUsersSearch,
  createChat,
  getChatById,
  deleteChat,
  // sendMessage,
} from "../../api/Message/messageApi";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const message = createSlice({
  name: "message",
  initialState: {
    data: [],
    dataSearch: [],
    chatId: [],
    dataChatById: [],
    modalUsers: false,
    search: "",
    valueSearch: "",
    userChat: null,
    showMessageChats: false,

    // sendMessage: "",
    // dataSendMessage: [],
  },
  reducers: {
    setModalUsers: (state, action) => {
      state.modalUsers = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setValueSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
    setUserChat: (state, action) => {
      state.userChat = action.payload;
    },
    setSendMessage: (state, action) => {
      state.sendMessage = action.payload;
    },
    setShowMessageChats: (state, action) => {
      state.showMessageChats = action.payload;
    },
  },
  // getChats
  extraReducers: (builder) => {
    builder.addCase(getChats.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getChats.rejected, (state, action) => {
      state.loading = false;
    });
    // getUsersSearch
    builder.addCase(getUsersSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsersSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.dataSearch = action.payload;
    });
    builder.addCase(getUsersSearch.rejected, (state, action) => {
      state.loading = false;
    });
    // createChat
    builder.addCase(createChat.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createChat.fulfilled, (state, action) => {
      state.loading = false;
      state.chatId = action.payload;
    });
    builder.addCase(createChat.rejected, (state, action) => {
      state.loading = false;
    });
    // get chat by id
    builder.addCase(getChatById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getChatById.fulfilled, (state, action) => {
      state.loading = false;
      state.dataChatById = action.payload;
    });
    builder.addCase(getChatById.rejected, (state, action) => {
      state.loading = false;
    });

    // send message
    // builder.addCase(sendMessage.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(sendMessage.fulfilled, (state, action) => {
    //   state.loading = true;
    //   state.dataSendMessage = action.payload;
    // });
    // builder.addCase(sendMessage.rejected, (state, action) => {
    //   state.loading = false;
    // });
  },
});

export default message.reducer;
export const {
  setModalUsers,
  setSearch,
  setValueSearch,
  setUserChat,
  setSendMessage,
  setShowMessageChats,
} = message.actions;
