import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buildingCore: JSON.parse(localStorage.getItem("buildingCore")) || {},
  buildingCoreInfo: JSON.parse(localStorage.getItem("buildingCoreInfo")) || {},
  buildingCoreTotalValue:
    JSON.parse(localStorage.getItem("buildingCoreTotalValue")) || {},
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
    addBuildingCoreTotalValue: (state, action) => {
      state.buildingCoreTotalValue = action.payload;
      localStorage.setItem(
        "buildingCoreTotalValue",
        JSON.stringify(state.buildingCoreTotalValue)
      );
    },
    resetBuildingCore: (state) => {
      state.buildingCore = {};
      state.buildingCoreInfo = {};
      state.buildingCoreTotalValue = {};
      localStorage.removeItem("buildingCore");
      localStorage.removeItem("buildingCoreInfo");
      localStorage.removeItem("buildingCoreTotalValue");
    },
  },
});

export const {
  addBuildingCore,
  addBuildingCoreInfo,
  addBuildingCoreTotalValue,
  resetBuildingCore,
} = buildingCoreSlice.actions;
export default buildingCoreSlice.reducer;
