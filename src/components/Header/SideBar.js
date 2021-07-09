import React from 'react'
import NavBarMenuItem from '../UI/navbar-menu-item/NavBarMenuItem';
import styles from "./SideBar.module.css"

const sideBar = (props) => {


    return (
        <nav className={props.isMenuOpen ? styles["div_sidebar_active"] : styles["div_sidebar"]}
        onClick={props.toggleHandler}>
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"MERCURY"}/>
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"VENUS"} />
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"EARTH"} />
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"MARS"}/>
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"JUPITER"}/>
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"SATURN"}/>
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"URANUS"}/>
            <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"NEPTUNE"}/>
        </nav>        
    )
}

export default sideBar
