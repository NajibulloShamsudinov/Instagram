import { configureStore } from "@reduxjs/toolkit";
import layout from "../reducers/Layout/Layout";


export const store = configureStore({
  reducer: {
    layout, 
  },
});
