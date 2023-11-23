import { configureStore } from "@reduxjs/toolkit";
import layout from "../reducers/Layout/Layout";
import home from "../reducers/Home/Home";


export const store = configureStore({
  reducer: {
    layout,
    home
  },
});
