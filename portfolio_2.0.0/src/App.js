import React from 'react';
import './App.css';
import TitlePanel from './components/TitlePanel';
import HeroPanel from './components/HeroPanel';
import ProjectsPanel from './components/ProjectPanel';
import TopButtons from './components/TopButtons';
import create from 'zustand'
import Footer from './components/Footer';

const [useStore] = create(set => ({
  nightMode: false,
  toggleNightMode: () => { set(state => ({ nightMode: !state.nightMode} )) }
}))

const setColor = (nightMode) => {
  if (nightMode) {
    return { 
      background: "rgb(28, 33, 48)",
      transition: "0.5s ease-in"
    }
  } else {
    return { 
      background: "rgb(250, 250, 250)", 
      transition: "0.5s ease-in"
    }
  }
}

function App() {
  const nightMode  = useStore(state => state.nightMode);
  const toggleNightMode  = useStore(state => state.toggleNightMode);
  return (
    <div className="App" style={ setColor( nightMode) }>
      <div className="content">
        <TitlePanel nightMode={ nightMode }/>
        <HeroPanel nightMode={ nightMode }/>
        <ProjectsPanel nightMode={ nightMode } />
        <Footer nightMode={ nightMode } />
        <TopButtons nightMode={ nightMode } toggleNightMode={ toggleNightMode }/>
      </div>
    </div>
  );
}

export default App;
