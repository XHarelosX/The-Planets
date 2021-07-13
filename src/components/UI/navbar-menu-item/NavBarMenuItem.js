import styles from "./NavBarItem.module.css";

const NavBarMenuItem = (props) => {
  return <li className={styles["div-single-menu-item"]}>{props.menuText}</li>;
};

export default NavBarMenuItem;
