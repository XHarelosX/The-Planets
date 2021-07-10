import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBackDrop: false,
};

const backDrop = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    toggleBackDrop(state) {
      state.showBackDrop = !state.showBackDrop;
    },
  },
});

export const backDropAction = backDrop.actions;
export default backDrop.reducer;
