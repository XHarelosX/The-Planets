import styles from "./Backdrop.module.css";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../../Store/SideBar-slice";
import { backDropAction } from "../../../Store/Backdrop-slice";
import { useSelector } from "react-redux";

const Backdrop = () => {

  const displayBackDrop = useSelector(state => state.backDrop.showBackDrop)

  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(sideBarActions.toggleSideBar());
    dispatch(backDropAction.toggleBackDrop());
  };

  const backDropClass = displayBackDrop ? styles.backdrop : [styles.backdrop,styles.none].join(' ')

  return <div className={backDropClass} onClick={hamburgerMenuHandler}></div>;
};

export default Backdrop;
