import { createSlice } from "@reduxjs/toolkit";

const initialSidebarState = { showSideBar: false };

const sideBarSlice = createSlice({
  name: "Sidebar",
  initialState: initialSidebarState,
  reducers: {
    toggleSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const sideBarActions = sideBarSlice.actions;
export default sideBarSlice.reducer;
