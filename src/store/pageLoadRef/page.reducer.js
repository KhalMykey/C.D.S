import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageLoadRef: null,
};

const pageLoadRefSlice = createSlice({
  name: "pageLoadRef",
  initialState,
  reducers: {
    setPageLoadRef: (state, action) => {
      state.pageLoadRef = action.payload;
    },
  },
});

export const { setPageLoadRef } = pageLoadRefSlice.actions;

export default pageLoadRefSlice.reducer;
