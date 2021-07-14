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
          <Route path="/Earth" component={EarthPage} />
          <Route path="/Mars" component={MarsPage} />
          <Route path="/Saturn" component={SaturnPage} />
          <Route path="/Uranus" component={UranusPage} />
          <Route path="/Venus" component={VenusPage} />
          <Route path="/Neptune" component={NeptunePage} />
          <Route path="/Jupiter" component={JupiterPage} />
          <Route path={["/Mercury", "/"]} component={MercuryPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
