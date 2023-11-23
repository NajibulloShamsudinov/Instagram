import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../api/reels/Reels.js";

const slice = createSlice({
  name: "reels",
  initialState: {
    posts: [],
    modal: false,
    loading:false
  },
  reducers: {
    handlModal: (state, action) => {
      state.modal = true;
    },
    handlModal1: (state, action) => {
      state.modal = false;
    },
    
  },
  extraReducer: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading=true
      console.log(2);
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.posts = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      console.log(error);
    });
  },
});

export const { handlModal, handlModal1 } = slice.actions;
export default slice.reducer;
