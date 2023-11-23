import { createSlice } from "@reduxjs/toolkit";

const layout = createSlice({
  name: "layout",
  initialState: {
    modalMore: false,
    modalSearch: false,
    modalCreate: false,
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
  },
});

export default layout.reducer;
export const { setModalMore, setModalSearch, setModalCreate } = layout.actions;
