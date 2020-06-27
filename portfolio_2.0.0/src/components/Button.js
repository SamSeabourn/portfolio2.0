import React from 'react';

const setTextColor = (nightMode) => {
  if (nightMode) {
    return { 
      color: "#fff",
      transition: "0.5s ease-in"
    }
  } else {
    return { 
      color: "#202536",
      transition: "0.5s ease-in",
    }
  }
}


const Button = ( props ) => {
  const { linkUrl, linkText , darkIcon, lightIcon } = props 
  const openUrl = () => {
    window.open(linkUrl, "_blank");
  }
  const icon = props.nightMode? lightIcon : darkIcon
  return(
    <button onClick={ openUrl } style={ setTextColor(props.nightMode) }>
      <img alt={ icon } src={ icon }></img>
      { linkText } 
    </button>
  )
}

export default Button