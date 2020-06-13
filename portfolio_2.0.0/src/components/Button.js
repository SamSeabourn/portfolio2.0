import React from 'react';

const Button = ( props ) => {
  const { linkUrl, linkText , icon } = props 
  
  const openUrl = () => {
    window.open(linkUrl, "_blank");
  }

  return(
    <button onClick={ openUrl }>
      <img src={ icon }></img>
      { linkText } 
    </button>
  )
}

export default Button