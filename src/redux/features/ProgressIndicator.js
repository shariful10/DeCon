import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage if available
const savedState = JSON.parse(localStorage.getItem("progressIndicator"));

// indicator
const indicator = [
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
];

const initialState = {
  progressIndicator: savedState || indicator,
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
    resetIndicator: (state) => {
      state.progressIndicator = indicator;
      localStorage.setItem("progressIndicator", JSON.stringify(indicator));
    },
  },
});

export const { updateIndicator, resetIndicator } =
  progressIndicatorSlice.actions;

export default progressIndicatorSlice.reducer;
