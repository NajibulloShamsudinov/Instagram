import { createSlice } from "@reduxjs/toolkit";

 let post = createSlice({
  name: "post",
  initialState: {
    postData: [],
    inptitle:"",
    inpcontent:"",
    inpimg:""

  },
  reducers: {

    handleChange:(state,action)=>{
        state[action.payload.type]=action.payload.settype
    }

  },
  extraReducers: (builder) => {
//     builder.addCase(post.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(post.fulfilled, (state, action) => {
//       state.postData = action.payload;
//     });
//     builder.addCase(post.rejected, (state, action) => {
//       state.loading.false;
//     });
  },
});
export default post.reducer
export const {handleChange}=post.actions