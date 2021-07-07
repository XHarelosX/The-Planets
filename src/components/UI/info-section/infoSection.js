import React from "react";
import styles from "./InfoSection.module.css";
import planetInfoArray from "../../Planets-Information/PlanetsInformation";
import InnerMenuPlanetPage from "../inner-manu-planet-page/InnerMenuPlanetPage";

function InfoSection() {
  const SVG_PLANET = planetInfoArray[0].componentSvg();

  return (
    <>
      <InnerMenuPlanetPage />
      <div className={styles.info_and_icon_container}>
        <div className={styles.planet_icon_div}>{SVG_PLANET}</div>
        <div className={styles.info_div}>
          <h1>{planetInfoArray[0].name}</h1>
          <p>{planetInfoArray[0].wiki_info}</p>
          <p>
            Source:{" "}
            <span>
              <a
                className={styles.source_wiki}
                href={`https://en.wikipedia.org/wiki/${planetInfoArray[0].name.toLowerCase()}`}
              >
                Wikipedia
              </a>
            </span>
          </p>
          <div className={styles.div_planet_info}>
            <h4>ROTETION TIME</h4>
            <p>{planetInfoArray[0].rotetionTime}</p>
          </div>
          <div className={styles.div_planet_info}>
            <h4>REVOLUTION TIME</h4>
            <p>{planetInfoArray[0].revolutionTime}</p>
          </div>
          <div className={styles.div_planet_info}>
            <h4>RADIUS</h4>
            <p>{planetInfoArray[0].radius}</p>
          </div>
          <div className={styles.div_planet_info}>
            <h4>AVERAGE TEMP.</h4>
            <p>{planetInfoArray[0].averageTemp}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
