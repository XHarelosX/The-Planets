import React from "react";
import styles from "./Header.module.css";
import HeaderMenuItem from "../UI/header-menu-item/HeaderMenuItem";

const Header = (props) => {

    return (
      <>
      <header className={styles.header}>
      <h2 className={styles.h2}>THE PLANETS</h2>
        <div className={styles["div-planets-desktop"]}>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"MERCURY"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"VENUS"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"EARTH"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"MARS"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"JUPITER"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"SATURN"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"URANUS"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"NEPTUNE"}/>
        </div>
        <div className={styles['hamburger-menu']} onClick={props.BugrgerHandler}>
          <span className={styles["hamburger-menu-span"]}></span>
          <span className={styles["hamburger-menu-span"]}></span>
          <span className={styles["hamburger-menu-span"]}></span>
        </div>                    
    </header>

      </>
  );
};

export default Header;
