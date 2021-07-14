import React from "react";
import classes from "./InnerMenuPlanetPage.module.css";
import { useDispatch } from "react-redux";
import { InnerMenuActions } from "../../../Store/InnerMenu-slice";
import { useSelector } from "react-redux";

const InnerMenuPlanetPage = (props) => {
  const dispatch = useDispatch();

  const isOverviewActive = useSelector(
    (state) => state.InnerMenu.overviewDisplay
  );
  const isIternalActive = useSelector(
    (state) => state.InnerMenu.iternalDisplay
  );
  const isSurfaceActive = useSelector(
    (state) => state.InnerMenu.surfaceDisplay
  );

  const toggleIternalStructureHandler = () => {
    dispatch(InnerMenuActions.toggleIternalDisplay());
  };
  const toggleOvervieweHandler = () => {
    dispatch(InnerMenuActions.toggleOverviewDisplay());
  };
  const toggleSerfaceGeologyeHandler = () => {
    dispatch(InnerMenuActions.toggleSurfaceDisplay());
  };

  let activeClasses = classes.overwiew_menu;
  let activeClasses2 = classes.overwiew_menu;
  let activeClasses3 = classes.overwiew_menu;

  if (isOverviewActive) {
    activeClasses = `${classes.overwiew_menu} ${classes.active_tab}`;
  }
  if (isIternalActive) {
    activeClasses2 = `${classes.overwiew_menu} ${classes.active_tab}`;
  }
  if (isSurfaceActive) {
    activeClasses3 = `${classes.overwiew_menu} ${classes.active_tab}`;
  }

  return (
    <>
      <div className={props.Classes}>
        <div className={activeClasses} onClick={toggleOvervieweHandler}>
          <div className={classes.span_num}>01</div>
          <h4>OVERVIEW</h4>
        </div>
        <div className={activeClasses2} onClick={toggleIternalStructureHandler}>
          <div className={classes.span_num}>02</div>
          <h4>INTERNAL STRUCTUE</h4>
        </div>
        <div className={activeClasses3} onClick={toggleSerfaceGeologyeHandler}>
          <div className={classes.span_num}>03</div>
          <h4>SURFACE GEOLOGY</h4>
        </div>
      </div>
    </>
  );
};

export default InnerMenuPlanetPage;
