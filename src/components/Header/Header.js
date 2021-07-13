import React from "react";
import { useDispatch } from "react-redux";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { IternalStructureAction } from "../../Store/IternalStructure-slice";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(sideBarActions.toggleSideBar());
    dispatch(backDropAction.toggleBackDrop());
  };

  const resetIternalStructureDisplay = () => {
    dispatch(IternalStructureAction.resetDisplay())
  }

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>THE PLANETS</h2>
        <nav>
          <ul className={styles["div-planets-desktop"]}>
            <Link onClick={resetIternalStructureDisplay} to="Mercury"><NavBarMenuItem menuText={"MERCURY"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Venus"><NavBarMenuItem menuText={"VENUS"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Earth"><NavBarMenuItem menuText={"EARTH"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Mars"><NavBarMenuItem menuText={"MARS"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Jupiter"><NavBarMenuItem menuText={"JUPITER"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Saturn"><NavBarMenuItem menuText={"SATURN"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Uranus"><NavBarMenuItem menuText={"URANUS"} /></Link>
            <Link onClick={resetIternalStructureDisplay} to="Neptune"><NavBarMenuItem menuText={"NEPTUNE"} /></Link>
          </ul>
        </nav>
        <div
          className={styles["hamburger-menu"]}
          onClick={hamburgerMenuHandler}
        >
          <span className={styles["hamburger-menu-span"]}></span>
          <span className={styles["hamburger-menu-span"]}></span>
          <span className={styles["hamburger-menu-span"]}></span>
        </div>
      </header>
    </>
  );
};

export default Header;
