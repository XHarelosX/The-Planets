import React from "react";
import styles from "./Header.module.css";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";

const Header = (props) => {
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
          onClick={props.BugrgerHandler}
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
