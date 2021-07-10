import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBar-slice";
import backDropReducer from "./Backdrop-slice";

const store = configureStore({
  reducer: { sideBar: sideBarReducer, backDrop: backDropReducer },
});

export default store;
