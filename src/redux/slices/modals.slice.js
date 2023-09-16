import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthOpen: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsAuthOpen: (state, action) => {
      state.isAuthOpen = action.payload;
    },
  },
});

const { reducer, actions } = modalSlice;
export default reducer;
export const { setIsAuthOpen } = actions;
