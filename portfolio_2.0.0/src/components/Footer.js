import React from 'react';
import BottomSplash from '../images/Bottom_Splash.svg'
import Button from './Button'
import GithubIcon from '../images/icons/icon_github.svg'
import LinkedInIcon from '../images/icons/icon_linkedin.svg'

const Footer = (props) => {
  const openGithub = () => {
    window.open("https://github.com/SamSeabourn", "_blank");
  }
  
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/samseabourn/", "_blank");
  }
  
  const bottomLinkStyle = {
    height: "4em",
    padding: "1em",
    bottom: "5em",
    position: "relative"
  }

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
      
      <img className="bottom-splash" src={ BottomSplash }></img>
      <div style={{  position: "relative", zIndex: "30", bottom: "4em", textAlign: "center"}}>
        <img className="bottom-link-icon" onClick={ openGithub } src={ GithubIcon }></img>
        <img className="bottom-link-icon" onClick={ openLinkedin } src={ LinkedInIcon }></img>
      </div>
     
    </div>
  )
}

export default Footer;

// <div style={{  position: "relative", zIndex: "30", bottom: "4em", textAlign: "center"}}>
// <img className="bottom-link-icon" src={ GithubIcon }></img>
// <img className="bottom-link-icon" onClick={ openLinkedin } src={ LinkedInIcon }></img>
// </div>