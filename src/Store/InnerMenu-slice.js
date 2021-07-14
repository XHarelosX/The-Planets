import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overviewDisplay: true,
  iternalDisplay: false,
  surfaceDisplay: false,
};

const innermenu_slice = createSlice({
  name: "Inner-Menu",
  initialState,
  reducers: {
    toggleOverviewDisplay(state) {
      state.overviewDisplay = true;
      state.iternalDisplay = false;
      state.surfaceDisplay = false;
    },
    toggleIternalDisplay(state) {
      state.overviewDisplay = false;
      state.iternalDisplay = true;
      state.surfaceDisplay = false;
    },
    toggleSurfaceDisplay(state) {
      state.overviewDisplay = false;
      state.iternalDisplay = false;
      state.surfaceDisplay = true;
    },
  },
});

export const InnerMenuActions = innermenu_slice.actions;
export default innermenu_slice.reducer;
