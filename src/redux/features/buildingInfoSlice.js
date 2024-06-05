import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	buildingInfo: [],
};

export const buildingInfoSlice = createSlice({
	name: "buildingData",
	initialState,
	reducers: {
		addBuildingInfo: (state, action) => {
			state.buildingInfo.push({ ...action.payload });
		},
	},
});

export const { addBuildingInfo } = buildingInfoSlice.actions;
export default buildingInfoSlice.reducer;
