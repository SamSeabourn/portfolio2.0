import React, { useState } from 'react';
import './App.css';
import TitlePanel from './components/TitlePanel';
import HeroPanel from './components/HeroPanel';
import ProjectsPanel from './components/ProjectPanel';
import TopButtons from './components/TopButtons';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Flanders from './components/Flanders'

function App() {
  const [nightMode, setNightMode] = useState(false);

  const setColor = (nightMode) => {
    var themeMetaTag = document.getElementById('themeColor');
    if (nightMode) {
      themeMetaTag.setAttribute("content", "rgb(28, 33, 48)");
      return { 
        background: "rgb(28, 33, 48)",
        transition: "0.5s ease-in"
      };
    } else {
      themeMetaTag.setAttribute("content", "rgb(255, 255, 255)");
      return { 
        background: "rgb(255, 255, 255)", 
        transition: "0.5s ease-in"
      };
    };
  };
  
  return (
    <div className="App" style={ setColor( nightMode) }>
      <div className="content">
        <TopButtons nightMode={ nightMode } setNightMode={ setNightMode }/>
        <TitlePanel nightMode={ nightMode }/>
        <HeroPanel nightMode={ nightMode }/>
        <ProjectsPanel nightMode={ nightMode }/>
        <ContactForm nightMode={ nightMode }/>
        <Footer nightMode={ nightMode }/>
        <Flanders />
      </div>
    </div>
  );
}

export default App;



