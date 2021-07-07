import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/Header/SideBar";
import Backdrop from "./components/UI/backdrop/Backdrop";
import InfoSection from "./components/UI/info-section/InfoSection";

function App() {
  const [toggleMenuAndBackBrop, setToggleMenuAndBackBrop] = useState({
    isMenuOpen: false,
    displayBackDrop: false,
  });

  const hamburgerMenuToggleHandler = () => {
    setToggleMenuAndBackBrop((prevState) => {
      return {
        isMenuOpen: !prevState.isMenuOpen,
        displayBackDrop: !prevState.displayBackDrop,
      };
    });
  };

  return (
    <div className="app">
      {ReactDOM.createPortal(
        <Backdrop
          displayBackDrop={toggleMenuAndBackBrop.displayBackDrop}
          toggleHandler={hamburgerMenuToggleHandler}
        />,
        document.getElementById("overlay")
      )}
      <Header BugrgerHandler={hamburgerMenuToggleHandler} />
      <InfoSection />
      <SideBar
        isMenuOpen={toggleMenuAndBackBrop.isMenuOpen}
        toggleHandler={hamburgerMenuToggleHandler}
      />
    </div>
  );
}

export default App;
