import { useSelector, useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { InnerMenuActions } from "../../Store/InnerMenu-slice";
import { Link } from "react-router-dom";
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
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Mercury"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"MERCURY"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Venus"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"VENUS"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Earth"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"EARTH"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Mars"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"MARS"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Jupiter"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"JUPITER"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Saturn"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"SATURN"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Uranus"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"URANUS"}
          />
        </Link>
        <Link
          onClick={resetDisplay}
          className={styles.nav_link}
          activeClassName={styles.nav_active}
          to="/The-Planets/Neptune"
        >
          <NavBarMenuItem
            Classes={styles["div-single-planet"]}
            menuText={"NEPTUNE"}
          />
        </Link>
      </ul>
    </nav>
  );
};

export default SideBarMenu;
