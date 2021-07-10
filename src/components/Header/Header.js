import React from "react";
import styles from "./Header.module.css";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";

const Header = () => {
  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(sideBarActions.toggleSideBar());
    dispatch(backDropAction.toggleBackDrop());
  };

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>THE PLANETS</h2>
        <nav className={styles["div-planets-desktop"]}>
          <NavBarMenuItem menuText={"MERCURY"} />
          <NavBarMenuItem menuText={"VENUS"} />
          <NavBarMenuItem menuText={"EARTH"} />
          <NavBarMenuItem menuText={"MARS"} />
          <NavBarMenuItem menuText={"JUPITER"} />
          <NavBarMenuItem menuText={"SATURN"} />
          <NavBarMenuItem menuText={"URANUS"} />
          <NavBarMenuItem menuText={"NEPTUNE"} />
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
