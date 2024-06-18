import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	buildingShell: JSON.parse(localStorage.getItem("buildingShell")) || {},
};

export const buildingShellSlice = createSlice({
	name: "buildingData",
	initialState,
	reducers: {
		addBuildingShell: (state, action) => {
			state.buildingShell = action.payload;
			localStorage.setItem(
				"buildingShell",
				JSON.stringify(state.buildingShell)
			);
		},
	},
});

export const { addBuildingShell } = buildingShellSlice.actions;
export default buildingShellSlice.reducer;
