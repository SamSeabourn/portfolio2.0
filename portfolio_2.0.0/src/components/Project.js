import React  from 'react';
import Button from './Button'
import Slider from 'react-slick'

import GithubIcon from '../images/icons/icon_github.svg'
import LinkIcon from '../images/icons/icon_url.svg'

const Project = ( props ) => {
  
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false
  };

  const { imageUrls, writeUp, keyWords, projectName, githubUrl, linkText, linkUrl, youtubeUrl } = props;
  const idTag = `${ projectName }`;
  const urls = [];
  const writeUpText = writeUp.split(' ');
  
  for (let i = 0; i < imageUrls.length; i++) {
    urls.push({ key: i , value: `${imageUrls[i]}` })
  }

  const urlButton = () => {
    if (typeof linkUrl !== 'undefined') return <Button linkText={ linkText } linkUrl={ linkUrl } icon={ LinkIcon } />
  }

  const githubButton = () => {
    if (typeof githubUrl !== 'undefined') return <Button linkText="Github" linkUrl={ githubUrl } icon={ GithubIcon } />
  }

  const youtubeDemo = () => {
    if (typeof youtubeUrl !== 'undefined') return(
      <div style={{ background: "red" }}>
        <iframe height="100%" volume="0" src={ `${youtubeUrl}?autoplay=0&controls=0&modestbranding=1` } ></iframe>
      </div>
    )
  }

  const guid = () => {  //React warning says that eveything needs a key as it could be breaking in the future
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 }  
   


  return (
    <div className="drop-shadow m-top-10vw project" style={{ background: "rgba(66,72,94, 0.4)"  }}>
      <Slider {...sliderSettings}>
        { youtubeDemo() }
        { urls.map( ( url ) => { return <img src={ url.value } key={ url.key }></img> }) }
      </Slider>
      <div className="p-all-10vw">
        <p style={{ color: "#fff" }}>
          { writeUpText.map( ( word ) => { 
            return keyWords.includes(word)? <strong key={ guid() } >{ `${word} ` }</strong> : `${word} ` }) 
          }
        </p>
          { urlButton() }
          { githubButton() }
      </div>
    </div>
  )

}

export default Project;