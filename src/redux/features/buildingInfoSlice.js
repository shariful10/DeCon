import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buildingInfo: JSON.parse(localStorage.getItem("buildingInfo")) || {},
};

export const buildingInfoSlice = createSlice({
  name: "buildingData",
  initialState,
  reducers: {
    addBuildingInfo: (state, action) => {
      state.buildingInfo = action.payload;
      localStorage.setItem("buildingInfo", JSON.stringify(state.buildingInfo));
    },
    resetBuildingInfo: (state) => {
      state.buildingInfo = {};
      localStorage.removeItem("buildingInfo");
    },
  },
});

export const { addBuildingInfo, resetBuildingInfo } = buildingInfoSlice.actions;
export default buildingInfoSlice.reducer;
