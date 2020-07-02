import React from 'react';
import BottomSplash from '../images/Bottom_Splash.svg'

const Footer = (props) => {

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

  return(
    <div className="footer-panel" style={ setColor(props.nightMode) }>
      <img className="bottom-splash" alt="bottom splash" src={ BottomSplash }></img>
    </div>
  )
}

export default Footer;
