import styles from "./Header.module.css";
import NavBarMenuItem from "../UI/navbar-menu-item/NavBarMenuItem";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../Store/SideBar-slice";
import { backDropAction } from "../../Store/Backdrop-slice";
import { InnerMenuActions } from "../../Store/InnerMenu-slice";
import { Link } from "react-router-dom";

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
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Mercury"
            >
              <NavBarMenuItem menuText={"MERCURY"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Venus"
            >
              <NavBarMenuItem menuText={"VENUS"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Earth"
            >
              <NavBarMenuItem menuText={"EARTH"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Mars"
            >
              <NavBarMenuItem menuText={"MARS"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Jupiter"
            >
              <NavBarMenuItem menuText={"JUPITER"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Saturn"
            >
              <NavBarMenuItem menuText={"SATURN"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Uranus"
            >
              <NavBarMenuItem menuText={"URANUS"} />
            </Link>
            <Link
              className={styles.nav_link}
              activeClassName={styles.nav_active}
              onClick={resetDisplay}
              to="/The-Planets/Neptune"
            >
              <NavBarMenuItem menuText={"NEPTUNE"} />
            </Link>
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
