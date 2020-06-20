import React from 'react';
import GithubIcon from '../images/icons/icon_github.svg'
import LinkedInIcon from '../images/icons/icon_linkedin.svg'

const BottomLinks = () => {

  const openGithub = () => {
    window.open("https://github.com/SamSeabourn", "_blank");
  }

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/samseabourn/", "_blank");
  }

  return(
    <div className="bottom-links center-text">
      <img onClick={ openGithub } src={ GithubIcon }></img>
      <img onClick={ openLinkedin } src={ LinkedInIcon }></img>
    </div>
  )
}

export default BottomLinks