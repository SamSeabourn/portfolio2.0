import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Portrait from '../images/Sam_Dropshadow.png'
import TechMarquee from './TechMarquee';

class HeroPanel extends Component {
  state = {  }
  static contextType = ThemeContext;
  render() { 
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme? light : dark;
    return (  
      <div className="hero-panel energy-gradient center-text p-top-10vw p-bottom-10vw">
        <h2 style={{ color: theme.titleColor }}> Me. </h2>
          <p className="m-10vw" style={{ color: theme.textColor }}>
            I am a Web Developer with a passion for responsive and performant user experiences.  
            I believe that software should not only function well but are feel great to use. 
            I love working with people to bring these type of experiences to the web.
          </p>
        <img className="portrait m-top-10vw m-bottom-5vw" src={ Portrait } />
        <TechMarquee />
      </div>
    );
  }
}
 
export default HeroPanel;