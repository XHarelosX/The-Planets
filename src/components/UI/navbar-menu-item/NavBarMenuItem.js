import React from "react";
import styles from "./NavBarItem.module.css";

const NavBarMenuItem = (props) => {
  return <div className={styles["div-single-menu-item"]}>{props.menuText}</div>;
};

export default NavBarMenuItem;
