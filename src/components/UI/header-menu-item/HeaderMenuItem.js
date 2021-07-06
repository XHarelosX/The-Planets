import React from "react";
import styles from "./HeaderItem.module.css";

const headerMenuItem = (props) => {
  return <div className={styles["div-single-menu-item"]}>{props.menuText}</div>;
};

export default headerMenuItem;
