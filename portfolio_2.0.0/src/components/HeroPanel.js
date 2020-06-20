import React from 'react';
import Portrait from '../images/Sam_Dropshadow.png'
import TechMarquee from './TechMarquee';

const HeroPanel =  () => {
    return (  
      <div className="hero-panel energy-gradient">
        <h2 style={{ color: '#202536' }}> Me. </h2>
        <p className="hero-panel-text" style={{ color: '#fff' }}>
          I am a Web Developer with a passion for responsive and performant user experiences.  
          I believe that software should not only function well but <strong> feel great </strong> to use. 
          I love working with people to bring these type of experiences to the web.
        </p>
        <img className="portrait" src={ Portrait } />
        <TechMarquee />
      </div>
    );
  }

 
export default HeroPanel;