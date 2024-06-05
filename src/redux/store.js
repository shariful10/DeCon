import { configureStore } from "@reduxjs/toolkit";
import buildingInfoReducer from "./features/buildingInfoSlice";

export const store = configureStore({
	reducer: {
		buildingInfo: buildingInfoReducer,
	},
});
