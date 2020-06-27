import React from 'react';
import BottomSplash from '../images/Bottom_Splash.svg'
import GithubIcon from '../images/icons/icon_github.svg'
import LinkedInIcon from '../images/icons/icon_linkedin.svg'
import GithubIconDark from '../images/icons/icon_github_dark.svg'
import LinkedInIconDark from '../images/icons/icon_linkedin_dark.svg'
import ResumeIcon from '../images/icons/icon_resume.svg'
import ResumeIconDark from '../images/icons/icon_resume_dark.svg'

const Footer = (props) => {
  const openGithub = () => {
    window.open("https://github.com/SamSeabourn", "_blank");
  }
  
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/samseabourn/", "_blank");
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

  const githubIcon = props.nightMode? GithubIcon : GithubIconDark
  const linkedinIcon =  props.nightMode? LinkedInIcon : LinkedInIconDark
  const resumeIcon = props.nightMode? ResumeIcon : ResumeIconDark

  return(
    <div className="footer-panel" style={ setColor(props.nightMode) }>
      <img className="bottom-splash" alt="bottom splash" src={ BottomSplash }></img>
      <div style={{  position: "relative", zIndex: "30", bottom: "3em", textAlign: "center"}}>
        <img className="bottom-link-icon" alt={ githubIcon } onClick={ openGithub } src={ githubIcon }></img>
        <img className="bottom-link-icon" alt={ linkedinIcon } onClick={ openLinkedin } src={ linkedinIcon }></img>
        <img className="bottom-link-icon" alt={ resumeIcon }  src={ resumeIcon }></img>
      </div>
     
    </div>
  )
}

export default Footer;
