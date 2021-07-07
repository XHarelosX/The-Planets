import React from "react";
import styles from "../info-section/InfoSection.module.css";

const InnerMenuPlanetPage = () => {
  return (
    <div>
      <div className={styles.planet_inner_menu}>
        <h4>OVERVIEW</h4>
        <h4>STRUCTUE</h4>
        <h4>SURFACE</h4>
      </div>
    </div>
  );
};

export default InnerMenuPlanetPage;
