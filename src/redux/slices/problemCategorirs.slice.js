import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  allCategories: [],
  loading: true,
  activeCategoryId: 1,
  activeCategoryTitle: "Mening uyim",
};

export const fetchAllProblemsList = createAsyncThunk(
  "problemCategories/fetchAllCategories",
  async () => {
    const { request } = useHttp();
    return await request({
      url: "/muammolar/muammolar_list/",
    });
  }
);

const categorySlice = createSlice({
  name: "problemCategories",
  initialState,
  reducers: {
    changeActiveCategory: (state, action) => {
      state.activeCategoryId = action.payload.id;
      state.activeCategoryTitle = action.payload.title;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProblemsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProblemsList.fulfilled, (state, action) => {
        state.allCategories = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllProblemsList.rejected, (state) => {
        state.allCategories = [];
        state.loading = false;
      });
  },
});
const { reducer, actions } = categorySlice;

export default reducer;
export const { changeActiveCategory } = actions;
