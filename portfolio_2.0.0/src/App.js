import React from 'react';
import './App.css';
import TitlePanel from './components/TitlePanel';
import HeroPanel from './components/HeroPanel';
import ProjectsPanel from './components/ProjectPanel';
import TopButtons from './components/TopButtons';
import create from 'zustand'
import Footer from './components/Footer';

const [useStore] = create(set => ({
  nightMode: true,
  toggleNightMode: () => { set(state => ({ nightMode: !state.nightMode} )) }
}))

const setColors = (nightMode) => {
  if (nightMode) {
    return { background: "rgb(28, 33, 48)" }
  } else {
    return { background: "rgb(250, 250, 250)" }
  }
}

function App() {
  const nightMode  = useStore(state => state.nightMode);
  const toggleNightMode  = useStore(state => state.toggleNightMode);
  const style = setColors(nightMode)
  return (
    <div className="App" style={ setColors(nightMode) }>
      <div className="content">
        <TitlePanel nightMode={ nightMode }/>
        <HeroPanel />
        <ProjectsPanel />
        <Footer />
        <TopButtons toggleNightMode={ toggleNightMode }/>
      </div>
    </div>
  );
}

export default App;
