import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "problemImages",
  initialState,
  reducers: {
    addImage: (state, action) => {
      const selectedImageIdx = state.images.findIndex(
        (item) => item.name === action.payload.name
      );
      if (selectedImageIdx >= 0) {
        state.images[selectedImageIdx] = action.payload;
      } else {
        state.images.push(action.payload);
      }
    },
    clearImages: (state) => {
      state.images = [];
    },
  },
});

export default imagesSlice.reducer;
export const { addImage, clearImages } = imagesSlice.actions;
