import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api/ExploreApi/ExploreApi";
let explore = createSlice({
  name: "explore",
  initialState: {
    data: [],
    ModalPost: false,
    newimg: null,
    showUserId: "",
    Comments:""
  },
  reducers: {
    CloseModals: (state) => {
      state.ModalPost = false;
    },
    ModalPostTrue: (state, action) => {
      state.ModalPost = true;
      state.newimg = action.payload;
    },
    setComment: (state, action) => {
      state.Comments = action.payload;
    },
   
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {});
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {});
  },
});
export let { ModalPostTrue, CloseModals, setComment } = explore.actions;
export default explore.reducer;
