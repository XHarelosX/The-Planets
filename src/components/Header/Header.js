import styles from "./Header.module.css";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { InnerMenuActions } from "../../Store/InnerMenu-slice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(sideBarActions.toggleSideBar());
    dispatch(backDropAction.toggleBackDrop());
  };

  const resetDisplay = () => {
    dispatch(InnerMenuActions.toggleOverviewDisplay());
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
              onClick={resetDisplay}
              to="/Mercury"
            >
              <NavBarMenuItem menuText={"MERCURY"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/Venus"
            >
              <NavBarMenuItem menuText={"VENUS"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/Earth"
            >
              <NavBarMenuItem menuText={"EARTH"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/Mars"
            >
              <NavBarMenuItem menuText={"MARS"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/Jupiter"
            >
              <NavBarMenuItem menuText={"JUPITER"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/Saturn"
            >
              <NavBarMenuItem menuText={"SATURN"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/Uranus"
            >
              <NavBarMenuItem menuText={"URANUS"} />
            </NavLink>
            <NavLink
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
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
