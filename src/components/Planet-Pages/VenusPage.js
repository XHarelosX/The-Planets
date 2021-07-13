import { useSelector } from "react-redux";
import planetInfoArray from "../Planets-Information/PlanetsInformation";
import InfoSection from "../UI/info-section/InfoSection";

const UranusPage = () => {
  const showIternalStructure = useSelector(
    (state) => state.IternalStructure.toggleDisplay
  );
  const currPlanet = planetInfoArray[1];
  const SVG_PLANET = currPlanet.componentSvg();
  const SVG_ITERNAL_STRUCTURE = currPlanet.InternalStructureSvg();

  return (
    <>
      <InfoSection
        displayIternal={showIternalStructure}
        svgIternalStructure={SVG_ITERNAL_STRUCTURE}
        svgPlanet={SVG_PLANET}
        planetName={currPlanet.name}
        wiki_info={currPlanet.wiki_info}
        rotetionTime={currPlanet.rotetionTime}
        revolutionTime={currPlanet.revolutionTime}
        radius={currPlanet.radius}
        averageTemp={currPlanet.averageTemp}
      />
    </>
  );
};

export default UranusPage;
