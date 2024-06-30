import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buildingShell: JSON.parse(localStorage.getItem("buildingShell")) || {},
  buildingShellInfo:
    JSON.parse(localStorage.getItem("buildingShellInfo")) || {},
  buildingShellTotalValue:
    JSON.parse(localStorage.getItem("buildingShellTotalValue")) || {},
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
    addBuildingShellInfo: (state, action) => {
      state.buildingShellInfo = action.payload;
      localStorage.setItem(
        "buildingShellInfo",
        JSON.stringify(state.buildingShellInfo)
      );
    },
    addBuildingShellTotalValue: (state, action) => {
      state.buildingShellTotalValue = action.payload;
      localStorage.setItem(
        "buildingShellTotalValue",
        JSON.stringify(state.buildingShellTotalValue)
      );
    },
    resetBuildingShell: (state) => {
      state.buildingShell = {};
      state.buildingShellInfo = {};
      state.buildingShellTotalValue = {};
      localStorage.removeItem("buildingShell");
      localStorage.removeItem("buildingShellInfo");
      localStorage.removeItem("buildingShellTotalValue");
    },
  },
});

export const {
  addBuildingShell,
  addBuildingShellInfo,
  addBuildingShellTotalValue,
  resetBuildingShell,
} = buildingShellSlice.actions;
export default buildingShellSlice.reducer;
