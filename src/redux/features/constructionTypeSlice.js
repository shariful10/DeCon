import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  construction_type:
    JSON.parse(localStorage.getItem("construction_type")) || "",
};

export const constructionTypeSlice = createSlice({
  name: "constructionType",
  initialState,
  reducers: {
    addConstructionType: (state, action) => {
      state.construction_type = action.payload;

      localStorage.setItem(
        "construction_type",
        JSON.stringify(state.construction_type)
      );
    },
    resetConstructionType: (state) => {
      state.construction_type = "";
      localStorage.removeItem("construction_type");
    },
  },
});

export const { addConstructionType, resetConstructionType } =
  constructionTypeSlice.actions;
export default constructionTypeSlice.reducer;
