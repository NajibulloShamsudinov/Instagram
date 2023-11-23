import { configureStore } from "@reduxjs/toolkit";
import layout from "../reducers/Layout/Layout";
import searchred from "../reducers/search/searchred";


export const store = configureStore({
  reducer: {
    layout,
    searchred
  },
});
