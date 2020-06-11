import React from 'react';
import './App.css';
import TitlePanel from './components/TitlePanel';
import ThemeContextProvider from './contexts/ThemeContext';
import HeroPanel from './components/HeroPanel';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <TitlePanel/>
      <HeroPanel />
    </ThemeContextProvider>
      
    </div>
  );
}

export default App;
