import { configureStore } from "@reduxjs/toolkit";
import problemCategories from "./slices/problemCategorirs.slice";
import problemTypes from "./slices/problemTypes.slice";
import reportStatus from "./slices/reportStatus.slice";
import selectedProblem from "./slices/selectedProblem.slice";
import problemImages from "./slices/problemImages.slice";

/* eslint-disable  no-undef */

export const store = configureStore({
  reducer: {
    problemCategories,
    problemTypes,
    reportStatus,
    selectedProblem,
    problemImages,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
