import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  problem: {},
};

const selectedProblemSLice = createSlice({
  name: "selectedProblem",
  initialState,
  reducers: {
    setProblem: (state, action) => {
      state.problem = action.payload;
    },
  },
});

export default selectedProblemSLice.reducer;
export const { setProblem } = selectedProblemSLice.actions;
