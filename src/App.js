import React, { useState, Suspense } from 'react';
import './App.css';

const TitlePanel = React.lazy(() => import('./components/TitlePanel'));
const HeroPanel = React.lazy(() => import('./components/HeroPanel'));
const ProjectsPanel = React.lazy(() => import('./components/ProjectPanel'));
const TopButtons = React.lazy(() => import('./components/TopButtons'));
const Footer = React.lazy(() => import('./components/Footer'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Flanders = React.lazy(() => import('./components/Flanders'));

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
  
  const loadingMessage = <div> Loading... </div> 

  return (
    <Suspense fallback={ <div> Something Went Wrong! </div> }>
    <div className="App" style={ setColor( nightMode) }>
        <div className="content">
          <Suspense fallback={ loadingMessage }>
            <TopButtons nightMode={ nightMode } setNightMode={ setNightMode }/>
          </Suspense>
          <Suspense fallback={ loadingMessage }>
            <TitlePanel nightMode={ nightMode }/>
          </Suspense>
          <Suspense fallback={ loadingMessage }>
            <HeroPanel nightMode={ nightMode }/>
          </Suspense>
          <Suspense fallback={ loadingMessage }>
            <ProjectsPanel nightMode={ nightMode }/>
          </Suspense>
          <Suspense fallback={ loadingMessage }>
            <ContactForm nightMode={ nightMode }/>
          </Suspense>
          <Suspense fallback={ loadingMessage }>
            <Footer nightMode={ nightMode }/>
          </Suspense>
          <Flanders />
        </div>
      </div>
    </Suspense>
  );
}

export default App;



