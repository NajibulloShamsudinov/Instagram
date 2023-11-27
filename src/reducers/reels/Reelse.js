import { createSlice } from "@reduxjs/toolkit";
import { getData, postLike } from "../../api/reels/Reels.js";

const reels = createSlice({
  name: "reels",
  initialState: {
    posts: [],
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
     builder.addCase(postLike.pending, (state, action) => {
      
     });
     builder.addCase(postLike.fulfilled, (state, action) => {
       console.log(action);
   
     });
     builder.addCase(postLike.rejected, (state, action) => {
       console.log(error);
     });
  },
});

export const { handlModal, handlModal1 } = reels.actions;
export default reels.reducer;
