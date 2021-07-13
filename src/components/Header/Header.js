import styles from "./Header.module.css";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { IternalStructureAction } from "../../Store/IternalStructure-slice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(sideBarActions.toggleSideBar());
    dispatch(backDropAction.toggleBackDrop());
  };

  const resetIternalStructureDisplay = () => {
    dispatch(IternalStructureAction.resetDisplay());
  };

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>THE PLANETS</h2>
        <nav>
          <ul className={styles["div-planets-desktop"]}>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Mercury"
            >
              <NavBarMenuItem menuText={"MERCURY"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Venus"
            >
              <NavBarMenuItem menuText={"VENUS"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Earth"
            >
              <NavBarMenuItem menuText={"EARTH"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Mars"
            >
              <NavBarMenuItem menuText={"MARS"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Jupiter"
            >
              <NavBarMenuItem menuText={"JUPITER"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Saturn"
            >
              <NavBarMenuItem menuText={"SATURN"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Uranus"
            >
              <NavBarMenuItem menuText={"URANUS"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetIternalStructureDisplay}
              to="/Neptune"
            >
              <NavBarMenuItem menuText={"NEPTUNE"} />
            </NavLink>
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
