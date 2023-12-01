import { createSlice } from "@reduxjs/toolkit";
import {
  getData,
  postLike,
  getData1,
  deleteComment,
  addFollowing,
} from "../../api/reels/Reels.js";

const reels = createSlice({
  name: "reels",
  initialState: {
    posts: [],
    users: [],
    modal: false,
    modal2: false,
    loading: false,
  },
  reducers: {
    handlModal: (state, action) => {
      state.modal = true;
    },
    handlModal1: (state, action) => {
      state.modal = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
      console.log(state.loading);
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log(action);
      state.posts = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      console.log(error);
    });
    builder.addCase(getData1.pending, (state, action) => {
      state.loading = true;
      console.log(state.loading);
    });
    builder.addCase(getData1.fulfilled, (state, action) => {
      console.log(action);
      state.users = action.payload;
    });
    builder.addCase(getData1.rejected, (state, action) => {
      console.log(error);
    });
    builder.addCase(postLike.pending, (state, action) => {});
    builder.addCase(postLike.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(postLike.rejected, (state, action) => {
      console.log(error);
    });
    builder.addCase(deleteComment.pending, (state, action) => {});
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.modal2 = false;
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      console.log(error);
    });
    // Подписчики

    builder.addCase(addFollowing.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addFollowing.fulfilled, (state, action) => {
      state.subsciption = action.payload;
    });
    builder.addCase(addFollowing.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { handlModal, handlModal1 } = reels.actions;
export default reels.reducer;
