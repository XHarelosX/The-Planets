import React from "react";
import classes from "./InnerMenuPlanetPage.module.css";
import { useDispatch } from "react-redux";
import { IternalStructureAction } from "../../../Store/IternalStructure-slice";

const InnerMenuPlanetPage = (props) => {
  const dispatch = useDispatch();
  const toggleIternalStructureHandler = () => {
    dispatch(IternalStructureAction.toggleIternalDisplay());
  };

  return (
    <>
      <div className={props.Classes}>
        <div className={classes.overwiew_menu}>
          <div className={classes.span_num}>01</div>
          <h4>OVERVIEW</h4>
        </div>
        <div
          className={classes.overwiew_menu}
          onClick={toggleIternalStructureHandler}
        >
          <div className={classes.span_num}>02</div>
          <h4>INTERNAL STRUCTUE</h4>
        </div>
        <div className={classes.overwiew_menu}>
          <div className={classes.span_num}>03</div>
          <h4>SURFACE</h4>
        </div>
      </div>
    </>
  );
};

export default InnerMenuPlanetPage;
