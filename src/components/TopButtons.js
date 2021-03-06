import React from 'react';
import MoonIcon from '../images/icons/icon_moon.svg';
import SunIcon from '../images/icons/icon_sun.svg';

const TopButtons =  ( props ) => {
    const { nightMode, setNightMode } = props
    const icon = nightMode?  SunIcon : MoonIcon
    return (  
      <div className="top-buttons">
        <button id="nightmodeButton" onClick={ ()=> setNightMode(!nightMode) }>
          <img  alt={ icon } src={ icon }></img>
        </button>
      </div>
    );
  }

export default TopButtons;