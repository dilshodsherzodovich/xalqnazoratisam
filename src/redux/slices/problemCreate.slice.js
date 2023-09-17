import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  manzil: null,
  muammo_turi: null,
  description: "",
  images: [],
  activeRegion: "",
  location: null,
  res: {},
  createLoading: false,
};

export const createProblem = createAsyncThunk(
  "problemCreate/createProblem",
  async ({ data, token }) => {
    const { request } = useHttp();
    return await request({
      method: "post",
      data,
      url: "/muammolar/createproblem/",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  }
);

const problemCreateSlice = createSlice({
  name: "problemCreate",
  initialState,
  reducers: {
    setProblemType: (state, action) => {
      state.muammo_turi = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImage: (state, action) => {
      state.images = action.pyaload;
    },
    setManzil: (state, action) => {
      state.manzil = action.payload;
    },
    setActiveRegion: (state, action) => {
      state.activeRegion = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearRes: (state) => {
      state.res = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProblem.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createProblem.fulfilled, (state, action) => {
        state.res = action.payload;
        state.createLoading = false;
      })
      .addCase(createProblem.rejected, (state) => {
        state.res = { error: "Xatoli yuz berdi" };
      });
  },
});

export default problemCreateSlice.reducer;
export const {
  setDescription,
  setImage,
  setManzil,
  setProblemType,
  setActiveRegion,
  setLocation,
  clearRes,
} = problemCreateSlice.actions;
