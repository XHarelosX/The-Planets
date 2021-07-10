import React from 'react'
import NavBarMenuItem from '../UI/navbar-menu-item/NavBarMenuItem';
import styles from "./SideBar.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { sideBarActions } from '../../Store/SideBar-slice';

const SideBarMenu = () => {
    const isSideBarOpen = useSelector((state) => state.sideBar.showSideBar);
    
    const dispatch = useDispatch()

    const sideBarToggleHandler = () => {
        dispatch(sideBarActions.toggleSideBar())
    }

    const navbarClasses = isSideBarOpen ? [styles.div_sidebar, styles._active].join(' ') : styles.div_sidebar 

    return (
        <nav className={navbarClasses} onClick={sideBarToggleHandler}>
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

export default SideBarMenu;
