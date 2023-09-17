import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@hooks/useHttp";

const initialState = {
  userRes: {},
  loading: false,
};

export const loginUser = createAsyncThunk(
  "authlogin/postUser",
  async (data) => {
    const { request } = useHttp();
    return await request({
      method: "post",
      url: "/api/token/",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearRes: (state) => {
      state.userRes = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userRes = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.userRes = { error: "Xatolik yuz berdi" };
      });
  },
});

export default authSlice.reducer;
export const { clearRes } = authSlice.actions;
