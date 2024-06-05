import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  construction_type: [],
};

export const constructionTypeSlice = createSlice({
  name: "constructionType",
  initialState,
  reducers: {
    addConstructionType: (state, action) => {
      state.construction_type = action.payload;
    },
  },
});

export const { addConstructionType } = constructionTypeSlice.actions;
export default constructionTypeSlice.reducer;
