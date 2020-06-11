import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import SamLogo from '../images/Sam_Logo.svg'
import TopSplash from '../images/Top_Splash_Full.svg'



class TitlePanel extends Component {
  state = {  }
  static contextType = ThemeContext;
  render() { 
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme? light : dark;
    return ( 
      <div className="title-panel" style={{ background: theme.bg }}>
        <img className="m-10vw" src={ SamLogo } alt="Sam Seabourn: Web Developer" />
        <img className="top-splash" src={ TopSplash } alt="Man with paintbrush" />
      </div>
        
     );
  }
}
 
export default TitlePanel;