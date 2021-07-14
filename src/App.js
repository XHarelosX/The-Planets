import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBarMenu from "./components/Header/SideBar";
import Backdrop from "./components/UI/backdrop/Backdrop";
import MercuryPage from "./components/Planet-Pages/MercuryPage";
import EarthPage from "./components/Planet-Pages/EarthPage";
import JupiterPage from "./components/Planet-Pages/JupiterPage";
import NeptunePage from "./components/Planet-Pages/NeptunePage";
import VenusPage from "./components/Planet-Pages/VenusPage";
import UranusPage from "./components/Planet-Pages/UranusPage";
import SaturnPage from "./components/Planet-Pages/SaturnPage";
import MarsPage from "./components/Planet-Pages/MarsPage";

function App() {
  return (
    <div className="app">
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      <Router>
        <Header />
        <SideBarMenu />
        <Switch>
          <Route path="/The-Planets/Earth" component={EarthPage} />
          <Route path="/The-Planets/Mars" component={MarsPage} />
          <Route path="/The-Planets/Saturn" component={SaturnPage} />
          <Route path="/The-Planets/Uranus" component={UranusPage} />
          <Route path="/The-Planets/Venus" component={VenusPage} />
          <Route path="/The-Planets/Neptune" component={NeptunePage} />
          <Route path="/The-Planets/Jupiter" component={JupiterPage} />
          <Route path={["/The-Planets/Mercury", "/The-Planets/"]} component={MercuryPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
