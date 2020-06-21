import React, { useLayoutEffect, useState } from 'react';
import Button from './Button'
import Slider from 'react-slick'

import GithubIcon2 from '../images/icons/icon_github2.svg'
import LinkIcon from '../images/icons/icon_url.svg'




const Project = ( props ) => {
  const { imageUrls, writeUp, keyWords, projectName, githubUrl, linkText, linkUrl, youtubeUrl } = props;

  const urls = [];
  const writeUpText = writeUp.split(' ');
  const imgElement = React.useRef(null);
  const iFrameElement = React.useRef(null);
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false
  };

  //Custom hook
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      console.log("window resized")
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width, height ] = useWindowSize()
  


  
  for (let i = 0; i < imageUrls.length; i++) {
    urls.push({ key: i , value: `${imageUrls[i]}` })
  }

  const urlButton = () => {
    if (typeof linkUrl !== 'undefined') return <Button linkText={ linkText } linkUrl={ linkUrl } icon={ LinkIcon } />
  }

  const githubButton = () => {
    if (typeof githubUrl !== 'undefined') return <Button linkText="Github" linkUrl={ githubUrl } icon={ GithubIcon2 } />
  }



  const youtubeDemo = () => {
    if (typeof youtubeUrl !== 'undefined') return(
        <iframe ref={ iFrameElement } 
                width={ width }
                height={ width / 1.6 }
                className="slider-video" 
                volume="0" 
                src={ `${youtubeUrl}?autoplay=0&controls=0"&modestbranding=1` } 
                onLoad={ () => setIframeSize( iFrameElement.current ) }
                >
        </iframe>
    )
  }

  const setIframeSize = (element) => {
    console.log('yay')
    if (element != null) {
      element.height = imgElement.current.height;
      element.width = imgElement.current.width;
    }
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

        { urls.map( ( url ) => { return <img ref={ imgElement } className="slider-image" src={ url.value } key={ guid() }></img> }) }
        
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