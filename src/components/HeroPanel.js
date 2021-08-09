import React from 'react';
import Portrait from '../images/Sam_Dropshadow.png'
import TechMarquee from './TechMarquee';

const setTextColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#fff",
      transition: "0.5s ease-in"
    }
  } else {
    return { 
      color: "#202536",
      transition: "0.5s ease-in"
    }
  }
}

const setTitleColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#202536",
      transition: "0.5s ease-in"
    }
  } else {
    return { 
      color: "#fff", 
      transition: "0.5s ease-in"
    }
  }
}

const HeroPanel = (props) => {
    return (  
      <div className="hero-panel energy-gradient">
        <h2 style={ setTitleColor( props.nightMode ) }> Me. </h2>
        <p className="hero-panel-text" style={ setTextColor( props.nightMode ) }>
          I am a Web Developer with a passion for responsive and performant user experiences.  
          I believe that software should not only function well but also <strong> feel great </strong> to use. 
          I love working with people to bring these types of experiences to the web.
        </p>
        <img className="portrait" alt="Self portrait of a software engineer" src={ Portrait } />
        <TechMarquee />
      </div>
    );
  }

 
export default HeroPanel;