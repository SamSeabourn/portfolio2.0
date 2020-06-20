import React, { Component } from 'react';
import SamLogo from '../images/Sam_Logo.svg'
import TopSplash from './TopSplash';

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