import { createSlice } from "@reduxjs/toolkit";
import { allProblems } from "../../db/problemtypes.json";

const initialState = {
  allProblems,
};

const categorySlice = createSlice({
  name: "allProblems",
  initialState,
});
const { reducer } = categorySlice;

export default reducer;
