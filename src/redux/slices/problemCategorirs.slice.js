import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryId: 0,
  activeCategoryTitle: "Mening uyim",
};

const categorySlice = createSlice({
  name: "problemCategories",
  initialState,
  reducers: {
    changeActiveCategory: (state, action) => {
      state.activeCategoryId = action.payload.id;
      state.activeCategoryTitle = action.payload.title;
    },
  },
});
const { reducer, actions } = categorySlice;

export default reducer;
export const { changeActiveCategory } = actions;
