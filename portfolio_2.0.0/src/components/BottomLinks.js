import React from 'react';
import GithubIcon from '../images/icons/icon_github.svg'
import LinkedInIcon from '../images/icons/icon_linkedin.svg'

const BottomLinks = () => {

  const openGithub = () => {
    console.log('yeet')
  }

  const openLinkedin = () => {
    console.log('yowza')
  }

  return(
    <div className="bottom-links center-text">
      <img src={ GithubIcon }></img>
      <img src={ LinkedInIcon }></img>
    </div>
  )
}

export default BottomLinks