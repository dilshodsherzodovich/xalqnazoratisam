import { configureStore } from "@reduxjs/toolkit";
import problemCategories from "./slices/problemCategorirs.slice";
import problemTypes from "./slices/problemTypes.slice";
import reportStatus from "./slices/reportStatus.slice";
import selectedProblem from "./slices/selectedProblem.slice";
import problemImages from "./slices/problemImages.slice";
import problemCreate from "./slices/problemCreate.slice";
import regions from "./slices/regions.slice";
import modals from "./slices/modals.slice";
import auth from "./slices/authLogin.slice";
import news from "./slices/newsList.slice";
import newsCategories from "./slices/newsCategories.slice";

/* eslint-disable  no-undef */

export const store = configureStore({
  reducer: {
    problemCategories,
    problemTypes,
    reportStatus,
    selectedProblem,
    problemImages,
    problemCreate,
    regions,
    modals,
    auth,
    news,
    newsCategories,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
