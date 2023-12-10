import { createSlice } from "@reduxjs/toolkit";
import { getProfile, getProfileById, getUser } from "../../api/profile/profile";
import { getPostById } from "../../api/profile/profile";
import { getSubsciption } from "../../api/profile/profile";
import { getSubsciptions } from "../../api/profile/profile";

const profile = createSlice({
  name: "profile",
  initialState: {
    data: [],
    postData: [],
    ModalPost: false,
    newimg: null,
    subsciption: [],
    subsciptions: [],
    users: [],
    profileById: [],
    text: "",
    gender: 0,
  },
  reducers: {
    handleChange: (state, action) => {
      state[action.payload.type] = action.payload.setType;
    },
    ModalPostTrue: (state, action) => {
      state.ModalPost = !false;
      state.newimg = action.payload;
    },
    closeModal: (state, action) => {
      state.ModalPost = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading.false;
    });

    builder.addCase(getPostById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.postData = action.payload;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getSubsciption.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSubsciption.fulfilled, (state, action) => {
      state.subsciption = action.payload;
    });
    builder.addCase(getSubsciption.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getSubsciptions.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSubsciptions.fulfilled, (state, action) => {
      state.subsciptions = action.payload;
    });
    builder.addCase(getSubsciptions.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getProfileById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfileById.fulfilled, (state, action) => {
      state.profileById = action.payload;
    });
    builder.addCase(getProfileById.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default profile.reducer;
export const { handleChange, ModalPostTrue, closeModal } = profile.actions;
