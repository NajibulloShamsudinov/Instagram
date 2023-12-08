import { createSlice } from "@reduxjs/toolkit";
import {
  getChats,
  getUsersSearch,
  createChat,
  getChatById,
  deleteChat,
  deleteMessage,
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
    messageText: "",
    chatIdAdd: null,
    defaultLogoMessage: true,
    chatsFullname: [],
    chatsUserPhoto: [],
    hidePanel: false,
    chatsId: null,
    chatsUserId: null,
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
    setMessageText: (state, action) => {
      state.messageText = action.payload;
    },
    prepare: (messageText, smile) => {
      return {
        payload: messageText + smile, // добавляем смайлик к текущему сообщению
      };
    },
    setChatIdAdd: (state, action) => {
      console.log(action.payload);
      state.chatIdAdd = action.payload;
    },
    setDefaultLogoMessage: (state, action) => {
      state.defaultLogoMessage = action.payload;
    },
    setChatsFullname: (state, action) => {
      state.chatsFullname = action.payload;
    },
    setChatsUserPhoto: (state, action) => {
      state.chatsUserPhoto = action.payload;
    },
    setHidePanel: (state, action) => {
      state.hidePanel = action.payload;
    },
    setChatsId: (state, action) => {
      state.chatsId = action.payload;
    },
    setChatsUserId: (state, action) => {
      state.chatsUserId = action.payload;
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
    // deleteChat
    builder.addCase(deleteChat.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteChat.fulfilled, (state, action) => {
      state.loading = false;
      state.info = false;
    });
    builder.addCase(deleteChat.rejected, (state, action) => {
      state.loading = false;
    });
    // deleteMessage
    builder.addCase(deleteMessage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteMessage.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteMessage.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default message.reducer;
export const {
  setModalUsers,
  setSearch,
  setValueSearch,
  setUserChat,
  setMessageText,
  setChatIdAdd,
  setDefaultLogoMessage,
  setChatsFullname,
  setChatsUserPhoto,
  setHidePanel,
  setChatsId,
  setChatsUserId,
} = message.actions;
