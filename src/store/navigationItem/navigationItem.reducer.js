import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  currentNavigationItem: "Dashboard",
};

const navigationItemSlice = createSlice({
  name: "navigationItem",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentNavigationItem: (state, action) => {
      state.currentNavigationItem = action.payload;
    },
  },
});

export const { setCurrentNavigationItem } = navigationItemSlice.actions;

export const navigationItemReducer = navigationItemSlice.reducer;
