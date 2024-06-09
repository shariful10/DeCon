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
  },
});

export const { addConstructionType } = constructionTypeSlice.actions;
export default constructionTypeSlice.reducer;
