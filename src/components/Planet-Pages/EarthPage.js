import planetInfoArray from "../Planets-Information/PlanetsInformation";
import InfoSection from "../UI/info-section/InfoSection";

const EarthPage = () => {
  const currPlanet = planetInfoArray[2];
  const SVG_PLANET = currPlanet.componentSvg();
  const SVG_ITERNAL_STRUCTURE = currPlanet.InternalStructureSvg();
  // const SVG_SURFACE

  return (
    <>
      <InfoSection
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

export default EarthPage;
