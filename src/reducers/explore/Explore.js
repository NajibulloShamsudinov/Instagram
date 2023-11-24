import { createSlice } from "@reduxjs/toolkit";

let explore = createSlice({
  name: "explore",
  initialState: {
    exploreData: [],
    ModalPost: false,
  },
  reducers: {
    CloseModals: (state) => {
      state.ModalPost = false;
    },
    ModalPostTrue: (state) => {
      state.ModalPost = true;
    },
    setHiddenInput: (state, actions) => {
      state.hiddenInput = actions.payload;
      if (state.hiddenInput.length > 0) {
        state.ModalImg = true;
      }
    },
  },
  extraReducers: {},
});
export let { ModalPostTrue, CloseModals } =
  explore.actions;
export default explore.reducer;
