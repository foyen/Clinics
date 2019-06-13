import React from "react";
import "./App.css";
import MapContainer from "./Components/ContainerComponent";
import ContentWrapperComponent from "./Components/ContentWrapperComponent.js";
import HeaderComponent from "./Components/HeaderComponent.js";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Main />
    </div>
  );
}

export default App;
