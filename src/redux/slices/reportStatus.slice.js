import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statuses: [
    {
      title: "Muammoni tanlang",
      status: "active",
    },
    {
      title: "Muammoni tasvirlab bering",
      status: "undone",
    },
    {
      title: "Manzilni kiriting",
      status: "undone",
    },
  ],
  step: 0,
};

const statusSlice = createSlice({
  name: "reportStatus",
  initialState,
  reducers: {
    gotToStep: (state, action) => {
      console.log(state.step);
      if (+action.payload > state.step) {
        state.statuses[state.step].status = "done";
      } else if (
        +action.payload < state.step &&
        state.step !== 2 &&
        action.payload !== 0
      ) {
        state.statuses[state.step].status = "undone";
      } else {
        state.statuses[state.step].status = "undone";
        state.statuses[state.step - 1].status = "undone";
      }
      state.statuses[action.payload].status = "active";
      state.step = action.payload;
    },
  },
});

export default statusSlice.reducer;
export const { gotToStep } = statusSlice.actions;
