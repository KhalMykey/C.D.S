import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePic: null,
  profilePicPreview: null,
  name: "Serena K",
  email: "serena.k@example.com",
  accountNumber: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfilePic: (state, action) => {
      state.profilePic = action.payload;
    },
    setProfilePicPreview: (state, action) => {
      state.profilePicPreview = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
  },
});

export const {
  setProfilePic,
  setProfilePicPreview,
  setName,
  setEmail,
  setAccountNumber,
} = profileSlice.actions;

export default profileSlice.reducer;
