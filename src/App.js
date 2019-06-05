import React from 'react';
import './App.css';
import  MapContainer  from './Components/ContainerComponent';
import ContentWrapperComponent  from "./Components/ContentWrapperComponent.js"
import HeaderComponent from "./Components/HeaderComponent.js"

function App() {
  return (
    <div className="App">
    
<HeaderComponent></HeaderComponent>
<ContentWrapperComponent></ContentWrapperComponent>


        
    </div>
  );
}

export default App;
