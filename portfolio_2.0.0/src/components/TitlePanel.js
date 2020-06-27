import React, { Component } from 'react';
import SamLogo from '../images/Sam_Logo.svg'
import TopSplash from './TopSplash';


const setColors = (nightMode) => {
  if (nightMode) {
    return { background: "rgb(32, 37, 54)" }
  } else {
    return { background: "rgb(255, 255, 255)" }
  }
}


class TitlePanel extends Component {
  render() { 
    return ( 
      <div className="title-panel" style={{ background: '#202536' }}>
        <img className="sam-logo" src={ SamLogo } alt="Sam Seabourn: Web Developer" />
        <TopSplash />
      </div>
        
     );
  }
}

export default TitlePanel;