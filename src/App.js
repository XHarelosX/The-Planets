import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import SideBarMenu from "./components/Header/SideBar";
import Backdrop from "./components/UI/backdrop/Backdrop";
import InfoSection from "./components/UI/info-section/InfoSection";

function App() {
  return (
    <div className="app">
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      <Header />
      <SideBarMenu />
      <InfoSection />
    </div>
  );
}

export default App;
