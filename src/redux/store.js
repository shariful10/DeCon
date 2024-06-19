import { configureStore } from "@reduxjs/toolkit";
import buildingInfoReducer from "./features/buildingInfoSlice";
import buildingCoreReducer from "./features/buildingCoreSlice";
import buildingShellReducer from "./features/buildingShellSlice";
import constructionTypeReducer from "./features/constructionTypeSlice";
import buildingCoreTotalValueReducer from "./features/buildingCoreSlice";
import progressIndicatorReducer from "./features/ProgressIndicator";

export const store = configureStore({
  reducer: {
    buildingInfo: buildingInfoReducer,
    buildingCore: buildingCoreReducer,
    buildingCoreTotalValue: buildingCoreTotalValueReducer,
    buildingShell: buildingShellReducer,
    constructionType: constructionTypeReducer,
    progressIndicator: progressIndicatorReducer,
  },
  devTools: true,
});
