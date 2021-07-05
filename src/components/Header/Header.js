import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>THE PLANETS</h2>
      <div className={classes["div-planets"]}>
        <div className={classes["div-single-planet"]}>MERCURY</div>
        <div className={classes["div-single-planet"]}>VENUS</div>
        <div className={classes["div-single-planet"]}>EARTH</div>
        <div className={classes["div-single-planet"]}>MARS</div>
        <div className={classes["div-single-planet"]}>JUPITER</div>
        <div className={classes["div-single-planet"]}>SATURN</div>
        <div className={classes["div-single-planet"]}>URANUS</div>
        <div className={classes["div-single-planet"]}>NEPTUNE</div>
      </div>
    </header>
  );
};

export default Header;
