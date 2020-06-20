import React, { Component } from 'react';
import SamLogo from '../images/Sam_Logo.svg'
import TopSplash from './TopSplash';
// import TopSplash from '../images/Top_Splash_Full.svg'

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

// <img className="top-splash" src={ TopSplash } alt="Man with paintbrush" />
 
export default TitlePanel;