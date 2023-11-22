import { createSlice } from "@reduxjs/toolkit";

const layout = createSlice({
  name: "layout",
  initialState: {
    modalMore: false,
    modalSearch: false,
  },
  reducers: {
    setModalMore: (state, action) => {
      state.modalMore = action.payload;
    },
    setModalSearch: (state, action) => {
      state.modalSearch = action.payload;
    },
  },
});

export default layout.reducer;
export const { setModalMore, setModalSearch } = layout.actions;
