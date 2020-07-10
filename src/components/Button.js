import React from 'react';

const setTextColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#fff",
      transition: "0.2s ease-in"
    }
  } else {
    return { 
      color: "#202536",
      transition: "0.2s ease-in",
    }
  }
}

const Button = ( props ) => {
  const { linkUrl, linkText , darkIcon, lightIcon } = props 

  const icon = props.nightMode? lightIcon : darkIcon

  const openUrl = () => {
    window.open(linkUrl, "_blank");
  }
  return(
    <button onClick={ openUrl } style={ setTextColor(props.nightMode) }>
      <img alt={ icon } src={ icon }></img>
      { linkText } 
    </button>
  )
}

export default Button;