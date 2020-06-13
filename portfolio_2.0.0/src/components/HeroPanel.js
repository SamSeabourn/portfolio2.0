import React, { Component } from 'react';
import Portrait from '../images/Sam_Dropshadow.png'
import TechMarquee from './TechMarquee';

const HeroPanel =  ( props ) => {
    return (  
      <div className="hero-panel energy-gradient center-text p-top-10vw p-bottom-10vw">
        <h2 style={{ color: '#202536' }}> Me. </h2>
          <p className="m-10vw" style={{ color: '#fff' }}>
            I am a Web Developer with a passion for responsive and performant user experiences.  
            I believe that software should not only function well but <strong> feel great </strong> to use. 
            I love working with people to bring these type of experiences to the web.
          </p>
        <img className="portrait m-top-10vw" src={ Portrait } />
        <TechMarquee />
      </div>
    );
  }

 
export default HeroPanel;