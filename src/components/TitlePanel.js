import React from 'react';
import SamLogo from '../images/Sam_Logo.svg'
import TopSplash from './TopSplash';

const setColor = (nightMode) => {
  if (nightMode) {
    return { 
      background: "rgb(32, 37, 54)", 
      transition: "0.5s ease-in"
    }
  } else {
    return { 
      background: "rgb(255, 255, 255)", 
      transition: "0.5s ease-in"
    }
  }
}

const TitlePanel = (props) => {
  return (
    <div className="title-panel" style={setColor( props.nightMode )}>
      <img className="sam-logo" src={ SamLogo } alt="Sam Seabourn: Web Developer" />
      <TopSplash />
     </div>
  )
}

export default TitlePanel;