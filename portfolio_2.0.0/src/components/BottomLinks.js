import React from 'react';

const BottomLinks = () => {

  const openGithub = () => {
    console.log('yeet')
  }

  const openLinkedin = () => {
    console.log('yowza')
  }

  return(
    <div className="bottom-links center-text">
      <svg onClick={ openGithub } style={{ height: "3em" , margin: "0 0.5em" }} viewBox="0 0 24 24">
        <path style={{ fill: "#fff", stroke: "rgba(0,0,0,0.1)"}} d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm2.22,18.62c-.36.06-.47-.15-.47-.34V16.36a1.7,1.7,0,0,0-.48-1.3c1.56-.17,3.2-.76,3.2-3.45a2.74,2.74,0,0,0-.72-1.88,2.53,2.53,0,0,0-.07-1.85s-.59-.19-1.93.71a6.77,6.77,0,0,0-3.5,0c-1.34-.9-1.93-.71-1.93-.71a2.53,2.53,0,0,0-.07,1.85,2.74,2.74,0,0,0-.72,1.88c0,2.68,1.64,3.28,3.19,3.46a1.45,1.45,0,0,0-.44.93,1.49,1.49,0,0,1-2-.58,1.47,1.47,0,0,0-1.07-.72s-.69,0,0,.43a1.83,1.83,0,0,1,.78,1s.4,1.25,2.35.83v1.3c0,.18-.11.4-.46.34a7,7,0,1,1,4.43,0Z"/>
      </svg>
      <svg onClick={ openLinkedin } style={{ height: "3em" , margin: "0 0.5em" }} viewBox="0 0 24 24">
        <path style={{ fill: "#fff", stroke: "rgba(0,0,0,0.1)" }} d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM10,16H8V10h2ZM9,9.11A1.11,1.11,0,1,1,10.1,8,1.11,1.11,0,0,1,9,9.11ZM17,16H15V13.14c0-1.88-2-1.72-2,0V16H11V10h2v1.09c.87-1.61,4-1.73,4,1.55Z"/>
      </svg>

    </div>
  )
}

export default BottomLinks