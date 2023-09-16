import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  manzil: null,
  muammo_turi: {
    id: 3,
    name: "Issiq suv yo'q",
  },
  description: "",
  images: [],
  activeRegion: "",
  location: null,
  res: {},
  loading: false,
};

export const createProblem = createAsyncThunk(
  "problemCreate/createProblem",
  async (data) => {
    const { request } = useHttp();
    return await request({
      method: "post",
      data,
      url: "/muammolar/createproblem/",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0ODY0MTA1LCJpYXQiOjE2OTQ4NjM4MDUsImp0aSI6IjcxNjA4MmZjZDdhMjRmY2I4ZjQ3MWE2MmMyNzQ1MmVlIiwidXNlcl9pZCI6MX0.Gve-9h7iguAW6dqXW722Su-Mx9_JsNXYF5C_t8zIRFA",
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProblem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProblem.fulfilled, (state, action) => {
        state.res = action.payload;
        state.loading = false;
      })
      .addCase(createProblem.rejected, (state, action) => {
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
} = problemCreateSlice.actions;
