import { createSlice } from "@reduxjs/toolkit";
import { getdata,storget } from "../../pages/search/search";


const searchred = createSlice({
  name: "searchred",
  initialState: {
    data: [],
    storg:[],
    searchinp: "",
    search: false
  },
  reducers: {

    handleChange: (state, action) => {
      state[action.payload.type] = action.payload.settype
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getdata.pending, (state, action) => {
    });
    builder.addCase(getdata.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(getdata.rejected, (state, action) => {
    })

    builder.addCase(storget.pending, (state, action) => {
    });
    builder.addCase(storget.fulfilled, (state, action) => {
      state.storg = action.payload
    })
    builder.addCase(storget.rejected, (state, action) => {
    })
    
  }




});

export default searchred.reducer;
export const { handleChange } = searchred.actions;