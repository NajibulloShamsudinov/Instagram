import { configureStore } from "@reduxjs/toolkit";
import layout from "../reducers/Layout/Layout";
import profile from "../reducers/Profile/Profile";
import explore from "../reducers/explore/Explore";
import Reelse from "../reducers/reels/Reelse";
import searchred from "../reducers/search/searchred";
import home from "../reducers/home/home";
// import post from "../reducers/post/post";

export const store = configureStore({
  reducer: {
    layout,
    profile,
    explore,
    reels: Reelse,
    searchred,
    home,
    // post,
  },
});
