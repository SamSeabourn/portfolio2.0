import React from 'react';

import BottomSplash from '../images/Bottom_Splash.svg'

const Footer = () => {
  return(
    <div className="footer-panel" style={{ background: '#202536' }}>
      <img className="bottom-splash" src={ BottomSplash }></img>
    </div>
  )
}

export default Footer;