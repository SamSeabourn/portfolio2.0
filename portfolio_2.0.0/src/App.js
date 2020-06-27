import React from 'react';
import './App.css';
import TitlePanel from './components/TitlePanel';
import HeroPanel from './components/HeroPanel';
import ProjectsPanel from './components/ProjectPanel';
import create from 'zustand'
import Footer from './components/Footer';




// function Counter() {
//   const { count, inc, dec} = useStore()
//   return (
//     <div class="counter">
//       <button onClick={inc}>up</button>
//       <span>{count}</span>
//       <button onClick={dec}>down</button>
//     </div>
//   )
// }

//       <BottomLinks />

function App() {
  return (
    <div className="App" style={{ background: "rgb(28, 33, 48)"}}>
      <div className="content">
        <TitlePanel/>
        <HeroPanel />
        <ProjectsPanel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
