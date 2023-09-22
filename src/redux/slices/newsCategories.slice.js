import { categories } from "../../db/news.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [...categories],
  activeCategoryIdx: 0,
};

const categoriesSlice = createSlice({
  name: "newsCategories",
  initialState,
  reducers: {
    changeActiveCategory: (state, action) => {
      state.activeCategoryIdx = action.payload;
    },
  },
});

const { reducer, actions } = categoriesSlice;
export default reducer;
export const { changeActiveCategory } = actions;
