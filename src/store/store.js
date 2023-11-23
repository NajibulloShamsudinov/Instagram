import { configureStore } from "@reduxjs/toolkit";
import layout from "../reducers/Layout/Layout";
import profile from "../reducers/Profile/Profile";

export const store = configureStore({
  reducer: {
    layout,
    profile
  },
});
