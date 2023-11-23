import { configureStore } from "@reduxjs/toolkit";
import layout from "../reducers/Layout/Layout";
import profile from "../reducers/Profile/Profile";
import explore from "../reducers/explore/Explore";
import reels from "../reducers/reels/Reelse"
import searchred from "../reducers/search/searchred";

export const store = configureStore({
  reducer: {
    layout,
    profile,
    explore,
    reels,
    searchred
  },
});

