// import { createSlice } from "@reduxjs/toolkit";

// export let post = createSlice({
//   name: "post",
//   initialState: {
//     postData: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(post.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(post.fulfilled, (state, action) => {
//       state.postData = action.payload;
//     });
//     builder.addCase(post.rejected, (state, action) => {
//       state.loading.false;
//     });
//   },
// });
// export default post.reducer