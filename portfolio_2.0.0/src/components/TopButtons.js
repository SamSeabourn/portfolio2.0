import React from 'react';
import MoonIcon from '../images/icons/icon_moon.svg';
import SunIcon from '../images/icons/icon_sun.svg';

const TopButtons =  ( props ) => {
    return (  
      <div className="top-buttons">
        <button>
          <img style={{ margin: "0px -8px" }} onClick={ props.toggleNightMode } src={ SunIcon }></img>
        </button>
      </div>
    );
  }

 
export default TopButtons;