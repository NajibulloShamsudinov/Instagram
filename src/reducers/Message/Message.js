import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../api/Message/messageApi";

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
  // getData
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
  },
});

export default message.reducer;
export const { setModalUsers, setSearch } = message.actions;
