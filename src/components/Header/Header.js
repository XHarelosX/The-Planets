import React from "react";
import { useDispatch } from "react-redux";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

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
        <nav>
          <ul className={styles["div-planets-desktop"]}>
            <Link to="Mercury"><NavBarMenuItem menuText={"MERCURY"} /></Link>
            <Link to="Venus"><NavBarMenuItem menuText={"VENUS"} /></Link>
            <Link to="Earth"><NavBarMenuItem menuText={"EARTH"} /></Link>
            <Link to="Mars"><NavBarMenuItem menuText={"MARS"} /></Link>
            <Link to="Jupiter"><NavBarMenuItem menuText={"JUPITER"} /></Link>
            <Link to="Saturn"><NavBarMenuItem menuText={"SATURN"} /></Link>
            <Link to="Uranus"><NavBarMenuItem menuText={"URANUS"} /></Link>
            <Link to="Neptune"><NavBarMenuItem menuText={"NEPTUNE"} /></Link>
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
