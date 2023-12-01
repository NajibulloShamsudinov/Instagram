import { createSlice } from "@reduxjs/toolkit";
import { getpost } from "../../api/post/post";

 let post = createSlice({
  name: "post",
  initialState: {
    postData: [],
    inptitle:"",
    inpcontent:"",

  },
  reducers: {

    handleChange:(state,action)=>{
        state[action.payload.type]=action.payload.settype
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getpost.pending, (state, action) => {
    });
    builder.addCase(getpost.fulfilled, (state, action) => {
      state.postData = action.payload;
    });
    builder.addCase(getpost.rejected, (state, action) => {
    });
  },
});
export default post.reducer
export const {handleChange}=post.actions