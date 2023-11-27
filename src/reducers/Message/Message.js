import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUsersSearch } from "../../api/Message/messageApi";

const message = createSlice({
  name: "message",
  initialState: {
    data: [],
    dataSearch: [],
    modalUsers: false,
    search: "",
  },
  reducers: {
    setModalUsers: (state, action) => {
      state.modalUsers = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  // getUsers
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
    });
    // getUsersSearch
    builder.addCase(getUsersSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsersSearch.fulfilled, (state, action) => {
      state.loading = true;
      state.dataSearch = action.payload;
    });
    builder.addCase(getUsersSearch.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default message.reducer;
export const { setModalUsers, setSearch } = message.actions;
