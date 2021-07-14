import { useSelector, useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { InnerMenuActions } from "../../Store/InnerMenu-slice";
import { NavLink } from "react-router-dom";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import styles from "./SideBar.module.css";

const SideBarMenu = () => {
  const isSideBarOpen = useSelector((state) => state.sideBar.showSideBar);

  const dispatch = useDispatch();

  const sideBarToggleHandler = () => {
    dispatch(sideBarActions.toggleSideBar());
    dispatch(backDropAction.toggleBackDrop());
  };

  const resetDisplay = () => {
    dispatch(InnerMenuActions.toggleOverviewDisplay());
  };
  const navbarClasses = isSideBarOpen
    ? [styles.div_sidebar, styles._active].join(" ")
    : styles.div_sidebar;

  return (
    <nav>
      <ul className={navbarClasses} onClick={sideBarToggleHandler}>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Mercury"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"MERCURY"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Venus"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"VENUS"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Earth"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"EARTH"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Mars"
        >
          {" "}
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"MARS"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Jupiter"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"JUPITER"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Saturn"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"SATURN"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Uranus"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"URANUS"}
          />
        </NavLink>
        <NavLink
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="Neptune"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"NEPTUNE"}
          />
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideBarMenu;
