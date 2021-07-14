import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBar-slice";
import backDropReducer from "./Backdrop-slice";
import InnerMenuReducer from "./InnerMenu-slice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    backDrop: backDropReducer,
    InnerMenu: InnerMenuReducer,
  },
});

export default store;
