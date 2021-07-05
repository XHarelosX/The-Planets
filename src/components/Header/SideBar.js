import React from 'react'
import HeaderMenuItem from '../UI/header-menu-item/HeaderMenuItem';
import styles from "./SideBar.module.css"

const sideBar = (props) => {


    return (
        <div className={props.isMenuOpen ? styles["div_sidebar_active"] : styles["div_sidebar"]}
        onClick={props.toggleHandler}>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"MERCURY"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"VENUS"} />
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"EARTH"} />
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"MARS"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"JUPITER"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"SATURN"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"URANUS"}/>
            <HeaderMenuItem Classes={styles["div-single-planet"]} menuText={"NEPTUNE"}/>
        </div>        
    )
}

export default sideBar
