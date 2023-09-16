import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  mahallas: [],
  loading: true,
};

export const fetchRegions = createAsyncThunk(
  "regions/fetchRegions",
  async () => {
    const { request } = useHttp();
    return await request({
      url: "/muammolar/tuman/",
    });
  }
);

const regionsSlice = createSlice({
  name: "regions",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchRegions.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.mahallas = action.payload || [];
        state.loading = false;
      })
      .addCase(fetchRegions.rejected, (state) => {
        state.mahallas = { error: "Xatolik yuz berdi" };
      }),
});

export default regionsSlice.reducer;
