import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api/ExploreApi/ExploreApi";
let explore = createSlice({
  name: "explore",
  initialState: {
    data: [],
    ModalPost: false,
    newimg: null,
    showUserId: "",
    Comments: "",
    Comments2: [],
    comEl2:[]
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
    showComments: (state, action) => {
      state.Comments2 = action.payload;
    },
    stateNone: (state, action) => {
      state.Comments = "";
    },
    setOpenCom2: (state, action) => {
      state.comEl2 = action.payload;
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
export let { ModalPostTrue, CloseModals, setComment, showComments,setOpenCom2, stateNone } =
  explore.actions;
export default explore.reducer;
