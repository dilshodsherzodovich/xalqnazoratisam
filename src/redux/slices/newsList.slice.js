import { news } from "../../db/news.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [...news],
};

const newsSLice = createSlice({
  name: "news",
  initialState,
});

const { reducer } = newsSLice;
export default reducer;
