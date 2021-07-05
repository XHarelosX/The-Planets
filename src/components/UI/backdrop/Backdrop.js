import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return props.displayBackDrop ? (
    <div className={styles.backdrop} onClick={props.toggleHandler}></div>
  ) : null;
};

export default Backdrop;
