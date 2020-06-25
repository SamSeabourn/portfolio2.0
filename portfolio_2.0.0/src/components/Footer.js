import React from 'react';
import BottomSplash from '../images/Bottom_Splash.svg'
import GithubIcon from '../images/icons/icon_github.svg'
import LinkedInIcon from '../images/icons/icon_linkedin.svg'

const Footer = () => {
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


  return(
    <div className="footer-panel" style={{ background: '#202536' }}>
      <img className="bottom-splash" src={ BottomSplash }></img>
      <div style={{  position: "relative", zIndex: "30", bottom: "4em", textAlign: "center"}}>
        <img className="bottom-link-icon" src={ GithubIcon }></img>
        <img className="bottom-link-icon" onClick={ openLinkedin } src={ LinkedInIcon }></img>
      </div>
    </div>
  )
}

export default Footer;