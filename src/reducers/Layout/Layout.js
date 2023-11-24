import { createSlice } from "@reduxjs/toolkit";

const layout = createSlice({
  name: "layout",
  initialState: {
    modalMore: false,
    modalSearch: false,
    modalCreate: false,
    listBg: false,
  },
  reducers: {
    setModalMore: (state, action) => {
      state.modalMore = action.payload;
    },
    setModalSearch: (state, action) => {
      state.modalSearch = action.payload;
    },
    setModalCreate: (state, action) => {
      state.modalCreate = action.payload;
    },
    setListBg: (state, action) => {
      state.listBg = action.payload;
    },
  },
});

export default layout.reducer;
export const { setModalMore, setModalSearch, setModalCreate, setListBg } =
  layout.actions;
