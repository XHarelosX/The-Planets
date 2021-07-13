import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBar-slice";
import backDropReducer from "./Backdrop-slice";
import IternalStructureReducer from "./IternalStructure-slice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    backDrop: backDropReducer,
    IternalStructure: IternalStructureReducer,
  },
});

export default store;
