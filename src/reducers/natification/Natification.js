import { createSlice } from "@reduxjs/toolkit";
import { get, getSubscr } from "../../api/natificationApi/natification";
let natification = createSlice({
  name: "Natification",
  initialState: {
    ModalNatificationState: false,
    data: [],
    dataSub: [],
  },
  reducers: {
    ModalTrueNatificationState: (state, action) => {
      state.ModalNatificationState = !state.ModalNatificationState;
    },
    ModalNatificationStatefalse:(state,action)=>{
      state.ModalNatificationState=false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(get.pending, (state, action) => {});
    builder.addCase(get.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    });
    builder.addCase(get.rejected, (state, action) => { });
    
    builder.addCase(getSubscr.pending, (state, action) => {});
    builder.addCase(getSubscr.fulfilled, (state, action) => {
      console.log(action.payload);
      state.dataSub = action.payload;
    });
    builder.addCase(getSubscr.rejected, (state, action) => {});
  },
});
export let { ModalTrueNatificationState, ModalNatificationStatefalse } = natification.actions;
export default natification.reducer;
