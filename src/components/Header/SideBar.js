import { useSelector, useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { IternalStructureAction } from "../../Store/IternalStructure-slice";
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

  const resetIternalStructureDisplay = () => {
    dispatch(IternalStructureAction.resetDisplay());
  };
  const navbarClasses = isSideBarOpen
    ? [styles.div_sidebar, styles._active].join(" ")
    : styles.div_sidebar;

  return (
    <nav>
      <ul className={navbarClasses} onClick={sideBarToggleHandler}>
        <NavLink
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
          onClick={resetIternalStructureDisplay}
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
