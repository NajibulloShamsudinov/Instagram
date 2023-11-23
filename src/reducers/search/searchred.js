import { createSlice } from "@reduxjs/toolkit";
import search from "../../pages/search/search";

const searchred = createSlice({
  name: "searchred",
  initialState: {
   modalsrc:false
  },
  reducers: {

    handleChange:(state,action)=>{
      state[action.payload.type]=action.payload.settype
     },
    
  },
});

export default searchred.reducer;
export const { handleChange } = searchred.actions;