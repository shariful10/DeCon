import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	buildingCore: JSON.parse(localStorage.getItem("buildingCore")) || {},
};

export const buildingCoreSlice = createSlice({
	name: "buildingData",
	initialState,
	reducers: {
		addBuildingCore: (state, action) => {
			state.buildingCore = action.payload;
			localStorage.setItem("buildingCore", JSON.stringify(state.buildingCore));
		},
	},
});

export const { addBuildingCore } = buildingCoreSlice.actions;
export default buildingCoreSlice.reducer;
