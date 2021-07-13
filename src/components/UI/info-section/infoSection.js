import React, { useState } from "react";
import styles from "./InfoSection.module.css";
import planetInfoArray from "../../Planets-Information/PlanetsInformation";
import InnerMenuPlanetPage from "../inner-manu-planet-page/InnerMenuPlanetPage";
import { useLocation } from "react-router-dom";

function InfoSection() {
  let SVG_PLANET;
  let SVG_ITERNAL_STRUCTURE;
  const [toggleIternalStructure, setToggleIternalStructure] = useState(false);

  const pathPlanet = useLocation().pathname.replace("/", "") || "Mercury";

  let currPlanet = planetInfoArray.find((planetName) => {
    if (pathPlanet.toUpperCase() === planetName.name) {
      SVG_PLANET = planetName.componentSvg();
      SVG_ITERNAL_STRUCTURE = planetName.InternalStructureSvg();
      return planetName;
    }
    return null;
  });

  if (currPlanet === undefined) {
    currPlanet = planetInfoArray[0];
    SVG_PLANET = planetInfoArray[0].componentSvg();
  }

  const toggleIternalStructureHandler = () => {
    setToggleIternalStructure((prevstate) => !prevstate);
  };

  return (
    <>
      <InnerMenuPlanetPage
        Classes={styles.planet_inner_menu}
        onclick={toggleIternalStructureHandler}
      />
      <div className={styles.info_and_icon_container}>
        <div className={styles.planet_icon_div}>
          {toggleIternalStructure ? SVG_ITERNAL_STRUCTURE : SVG_PLANET}
        </div>
        <div className={styles.div_info}>
          <div className={styles.info_container}>
            <h1>{currPlanet.name}</h1>
            <p>{currPlanet.wiki_info}</p>
            <p>
              Source:{" "}
              <span>
                <a
                  className={styles.source_wiki}
                  href={`https://en.wikipedia.org/wiki/${currPlanet.name.toLowerCase()}`}
                >
                  Wikipedia
                </a>
              </span>
            </p>
          </div>
          <InnerMenuPlanetPage
            Classes={styles.planet_inner_menu_tablet}
            onclick={toggleIternalStructureHandler}
          />
        </div>
      </div>
      <div className={styles.div_planet_all_info}>
        <div className={styles.div_planet_info}>
          <h4>ROTATION TIME</h4>
          <p>{currPlanet.rotetionTime}</p>
        </div>
        <div className={styles.div_planet_info}>
          <h4>REVOLUTION TIME</h4>
          <p>{currPlanet.revolutionTime}</p>
        </div>
        <div className={styles.div_planet_info}>
          <h4>RADIUS</h4>
          <p>{currPlanet.radius}</p>
        </div>
        <div className={styles.div_planet_info_last}>
          <h4>AVERAGE TEMP.</h4>
          <p>{currPlanet.averageTemp}</p>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
