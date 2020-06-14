import React from 'react';
import './App.css';
import TitlePanel from './components/TitlePanel';
import HeroPanel from './components/HeroPanel';
import ProjectsPanel from './components/ProjectPanel';
import create from 'zustand'
import Footer from './components/Footer';
import BottomLinks from './components/BottomLinks';

// const [useStore] = create(set => ({
//   count: 1,
//   inc: () => set(state => ({ count: state.count + 1 })),
//   dec: () => set(state => ({ count: state.count - 1 }))
// }))

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

function App() {
  return (
    <div className="App">
      <TitlePanel/>
      <HeroPanel />
      <ProjectsPanel />
      <BottomLinks />
      <Footer />
    </div>
  );
}

export default App;
