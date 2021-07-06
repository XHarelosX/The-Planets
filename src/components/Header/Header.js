import React from "react";
import styles from "./Header.module.css";
import HeaderMenuItem from "../UI/header-menu-item/HeaderMenuItem";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>THE PLANETS</h2>
        <div className={styles["div-planets-desktop"]}>
          <HeaderMenuItem menuText={"MERCURY"} />
          <HeaderMenuItem menuText={"VENUS"} />
          <HeaderMenuItem menuText={"EARTH"} />
          <HeaderMenuItem menuText={"MARS"} />
          <HeaderMenuItem menuText={"JUPITER"} />
          <HeaderMenuItem menuText={"SATURN"} />
          <HeaderMenuItem menuText={"URANUS"} />
          <HeaderMenuItem menuText={"NEPTUNE"} />
        </div>
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
