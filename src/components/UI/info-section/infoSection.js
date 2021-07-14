import styles from "./InfoSection.module.css";
import InnerMenuPlanetPage from "../inner-manu-planet-page/InnerMenuPlanetPage";
import { useDispatch, useSelector } from "react-redux";
import { InnerMenuActions } from "../../../Store/InnerMenu-slice";

function InfoSection(props) {
  const dispatch = useDispatch();
  const innerManuState = useSelector((state) => state.InnerMenu);

  const toggleIternalStructureHandler = () => {
    dispatch(InnerMenuActions.toggleIternalDisplay());
  };
  const toggleOvervieweHandler = () => {
    dispatch(InnerMenuActions.toggleOverviewDisplay());
  };
  const toggleSerfaceGeologyeHandler = () => {
    dispatch(InnerMenuActions.toggleSurfaceDisplay());
  };

  const InnerMenuActiveTab = () => {
    if (innerManuState.overviewDisplay) {
      return props.svgPlanet;
    }
    if (innerManuState.iternalDisplay) {
      return props.svgIternalStructure;
    }
    if (innerManuState.surfaceDisplay) {
      return props.svgPlanet;
    }
  };
  const isActive = InnerMenuActiveTab();

  return (
    <>
      <InnerMenuPlanetPage
        Classes={styles.planet_inner_menu}
        toggleOverview={toggleOvervieweHandler}
        toggleIntral={toggleIternalStructureHandler}
        toggleSerface={toggleSerfaceGeologyeHandler}
      />
      <div className={styles.info_and_icon_container}>
        <div className={styles.planet_icon_div}>{isActive}</div>
        <div className={styles.div_info}>
          <div className={styles.info_container}>
            <h1>{props.planetName}</h1>
            <p>{props.wiki_info}</p>
            <p>
              Source:{" "}
              <span>
                <a
                  className={styles.source_wiki}
                  href={`https://en.wikipedia.org/wiki/${props.planetName.toLowerCase()}`}
                >
                  Wikipedia
                </a>
              </span>
            </p>
          </div>
          <InnerMenuPlanetPage
            Classes={styles.planet_inner_menu_tablet}
            toggleOverview={toggleOvervieweHandler}
            toggleIntral={toggleIternalStructureHandler}
            toggleSerface={toggleSerfaceGeologyeHandler}
          />
        </div>
      </div>
      <div className={styles.div_planet_all_info}>
        <div className={styles.div_planet_info}>
          <h4>ROTATION TIME</h4>
          <p>{props.rotetionTime}</p>
        </div>
        <div className={styles.div_planet_info}>
          <h4>REVOLUTION TIME</h4>
          <p>{props.revolutionTime}</p>
        </div>
        <div className={styles.div_planet_info}>
          <h4>RADIUS</h4>
          <p>{props.radius}</p>
        </div>
        <div className={styles.div_planet_info_last}>
          <h4>AVERAGE TEMP.</h4>
          <p>{props.averageTemp}</p>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
