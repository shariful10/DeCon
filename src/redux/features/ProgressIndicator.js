import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage if available
const savedState = JSON.parse(localStorage.getItem("progressIndicator"));

const initialState = {
  progressIndicator: savedState || [
    {
      id: "pi1",
      label: "Building Info",
      completed: false,
      path: "/building-information",
    },
    {
      id: "pi2",
      label: "Construction type",
      completed: false,
      path: "/constructions-type",
    },
    {
      id: "pi3",
      label: "Core",
      completed: false,
      path: "/building-core",
    },
    {
      id: "pi4",
      label: "Shell",
      completed: false,
      path: "/building-shell",
    },
    {
      id: "pi5",
      label: "Result & Report",
      completed: false,
      path: "/result-and-report",
    },
  ],
};

export const progressIndicatorSlice = createSlice({
  name: "progressIndicator",
  initialState,
  reducers: {
    updateIndicator: (state, action) => {
      const { id } = action.payload;
      const index = state.progressIndicator.findIndex((step) => step.id === id);
      if (index !== -1) {
        state.progressIndicator[index].completed = true;
        localStorage.setItem(
          "progressIndicator",
          JSON.stringify(state.progressIndicator)
        );
      }
    },
  },
});

export const { updateIndicator } = progressIndicatorSlice.actions;

export default progressIndicatorSlice.reducer;
