import MercuryhSvg from "../../icons/Mercury";
import VenusSvg from "../../icons/Venus";
import EarthSvg from "../../icons/Earth";
import MarsSvg from "../../icons/Mars";
import JupiterhSvg from "../../icons/Jupiter";
import SaturnSvg from "../../icons/Saturn";
import UranusSvg from "../../icons/Uranus";
import NeptunehSvg from "../../icons/Neptune";
import EarthStructure from "../../icons/InternalStructure/Earth-Iternal-Structure";
import MercuryStructure from "../../icons/InternalStructure/Mercury-Iternal-Structure";
import VenusStructure from "../../icons/InternalStructure/Venus-Iternal-Structure";
import MarsStructure from "../../icons/InternalStructure/Mars-Iternal-Structure";
import JupiterStructure from "../../icons/InternalStructure/Jupiter-Iternal-Structure";
import SaturnStructure from "../../icons/InternalStructure/Saturn-Iternal-Structure";
import UranusStructure from "../../icons/InternalStructure/Uranus-Iternal-Structure";
import NeptuneStructure from "../../icons/InternalStructure/Neptune-Iternal-Structure";

const planetInformationObjectsArray = [
  {
    name: "MERCURY",
    wiki_info:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς).",
    rotetionTime: "176 DAYS",
    revolutionTime: "88 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "67°C",
    surfaceImg: "Images/MercurySurface.jpg",
    componentSvg: MercuryhSvg,
    InternalStructureSvg: MercuryStructure,
  },
  {
    name: "VENUS",
    wiki_info:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    rotetionTime: "−116.75 (SOLAR DAYS)",
    revolutionTime: "224.7 DAYS",
    radius: "6,051.8 KM",
    averageTemp: "464°C",
    surfaceImg: "Images/VenusSurface.jpg",
    componentSvg: VenusSvg,
    InternalStructureSvg: VenusStructure,
  },
  {
    name: "EARTH",
    wiki_info:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere.",
    rotetionTime: "0.99 DAYS",
    revolutionTime: "356.26 DAYS",
    radius: "6,371 KM",
    averageTemp: "14°C",
    surfaceImg: "/Images/EarthSurface.jpg",
    componentSvg: EarthSvg,
    InternalStructureSvg: EarthStructure,
  },
  {
    name: "MARS",
    wiki_info:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars\'s surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.',
    rotetionTime: "1.03 DAYS",
    revolutionTime: "1.88 YEARS",
    radius: "3,389 KM",
    averageTemp: "−63°C",
    surfaceImg: "/Images/MarsSurface.jpg",
    componentSvg: MarsSvg,
    InternalStructureSvg: MarsStructure,
  },
  {
    name: "JUPITER",
    wiki_info:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus.",
    rotetionTime: "9.92Hr SOLAR DAYS",
    revolutionTime: "11.8 YEARS",
    radius: "66,854 KM",
    averageTemp: "−108°C",
    surfaceImg: "/Images/JupiterSurface.jpg",
    componentSvg: JupiterhSvg,
    InternalStructureSvg: JupiterStructure,
  },
  {
    name: "SATURN",
    wiki_info:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god's sickle.",
    rotetionTime: "10.8 HOURS",
    revolutionTime: "29.46 YEARS",
    radius: "58,232 KM",
    averageTemp: "−138°C",
    surfaceImg: "/Images/SaturnSurface.jpg",
    componentSvg: SaturnSvg,
    InternalStructureSvg: SaturnStructure,
  },
  {
    name: "URANUS",
    wiki_info:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    rotetionTime: "−0.718 SOLAR DAYS",
    revolutionTime: "84.02 YEARS",
    radius: "25,362 KM",
    averageTemp: "−197.2°C",
    surfaceImg: "/Images/UranusSurface.jpg",
    componentSvg: UranusSvg,
    InternalStructureSvg: UranusStructure,
  },
  {
    name: "NEPTUNE",
    wiki_info:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
    rotetionTime: "16 HOURS",
    revolutionTime: "164.8 YEARS",
    radius: "24,622 KM",
    averageTemp: "−201°C",
    surfaceImg: "/Images/NeptuneSurface.jpg",
    componentSvg: NeptunehSvg,
    InternalStructureSvg: NeptuneStructure,
  },
];

export default planetInformationObjectsArray;
