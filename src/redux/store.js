import { configureStore } from "@reduxjs/toolkit";
import buildingInfoReducer from "./features/buildingInfoSlice";
import constructionTypeReducer from "./features/constructionTypeSlice";

export const store = configureStore({
  reducer: {
    buildingInfo: buildingInfoReducer,
    constructionType: constructionTypeReducer,
  },
});
