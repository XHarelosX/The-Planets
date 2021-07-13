import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { sideBarActions } from '../../Store/SideBar-slice';
import { backDropAction } from "../../Store/Backdrop-slice";
import { IternalStructureAction } from '../../Store/IternalStructure-slice';
import { Link} from "react-router-dom"
import NavBarMenuItem from '../UI/navbar-menu-item/NavBarMenuItem';
import styles from "./SideBar.module.css"

const SideBarMenu = () => {
    const isSideBarOpen = useSelector((state) => state.sideBar.showSideBar);
    
    const dispatch = useDispatch()

    const sideBarToggleHandler = () => {
        dispatch(sideBarActions.toggleSideBar())
        dispatch(backDropAction.toggleBackDrop())
    }

    const resetIternalStructureDisplay = () => {
        dispatch(IternalStructureAction.resetDisplay())
      }
    const navbarClasses = isSideBarOpen ? [styles.div_sidebar, styles._active].join(' ') : styles.div_sidebar 

    return (
        <nav>
            <ul className={navbarClasses} onClick={sideBarToggleHandler}>                
                <Link onClick={resetIternalStructureDisplay} to="Mercury"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"MERCURY"}/></Link>
                <Link onClick={resetIternalStructureDisplay} to="Venus"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"VENUS"} /></Link>
                <Link onClick={resetIternalStructureDisplay} to="Earth"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"EARTH"} /></Link>
                <Link onClick={resetIternalStructureDisplay} to="Mars"> <NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"MARS"}/></Link>
                <Link onClick={resetIternalStructureDisplay} to="Jupiter"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"JUPITER"}/></Link>
                <Link onClick={resetIternalStructureDisplay} to="Saturn"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"SATURN"}/></Link>
                <Link onClick={resetIternalStructureDisplay} to="Uranus"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"URANUS"}/></Link>
                <Link onClick={resetIternalStructureDisplay} to="Neptune"><NavBarMenuItem Classes={styles["div-single-planet"]} menuText={"NEPTUNE"}/></Link>
            </ul>
        </nav>        
    )
}

export default SideBarMenu;
