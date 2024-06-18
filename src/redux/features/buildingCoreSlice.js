import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	buildingCore: JSON.parse(localStorage.getItem("buildingCore")) || {},
	buildingCoreInfo: JSON.parse(localStorage.getItem("buildingCoreInfo")) || {},
};

export const buildingCoreSlice = createSlice({
	name: "buildingData",
	initialState,
	reducers: {
		addBuildingCore: (state, action) => {
			state.buildingCore = action.payload;
			localStorage.setItem("buildingCore", JSON.stringify(state.buildingCore));
		},
		addBuildingCoreInfo: (state, action) => {
			state.buildingCoreInfo = action.payload;
			localStorage.setItem(
				"buildingCoreInfo",
				JSON.stringify(state.buildingCoreInfo)
			);
		},
	},
});

export const { addBuildingCore, addBuildingCoreInfo } =
	buildingCoreSlice.actions;
export default buildingCoreSlice.reducer;
