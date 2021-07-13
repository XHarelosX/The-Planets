import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleDisplay: false,
};

const IternalStructure_slice = createSlice({
  name: "Iternal-Structure",
  initialState,
  reducers: {
    toggleIternalDisplay(state) {
      state.toggleDisplay = !state.toggleDisplay;
    },
    resetDisplay(state) {
      state.toggleDisplay = false;
    },
  },
});

export const IternalStructureAction = IternalStructure_slice.actions;
export default IternalStructure_slice.reducer;
