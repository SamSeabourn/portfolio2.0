import React, { useLayoutEffect, useEffect, useState } from 'react';
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
  const projectContainer = React.useRef(null)
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    arrows: false
  };

  //Custom hook to listen to resize and update iframe dimensions
  function useWindowSize() {
    const [ size , setSize ] = useState([0, 0]);
    const [ iframeSize, setIframeSize ] = useState([10,10]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        var imageElement = document.getElementsByClassName('slider-image')[0]
        setIframeSize([ imageElement.width, imageElement.height ])
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return [size, iframeSize]
  }

  let sizes = useWindowSize()
  let windowWidth = sizes[0][0]
  let iframeHeight  = sizes[1][1]
  let iframeWidth = sizes[1][0]

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
                width={ iframeWidth }
                height={ iframeHeight }
                className="slider-video" 
                volume="0" 
                src={ `${youtubeUrl}?autoplay=0&controls=0"&modestbranding=1` } 
                onLoad={ () => setIframeSize() }
                >
        </iframe>
    )
  }

  const setIframeSize = (element) => {
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

  const view = () => {
    if (windowWidth >= 1280) {
      return (
        //Big Screen
        <div className="project-columns">
          <div className="project-text">
            <h2 className="project-title"> { projectName } </h2>
            <p style={{ color: "#fff" }}>
              
              { writeUpText.map( ( word ) => { return keyWords.includes(word)? <strong key={ guid() } >{ `${word} ` }</strong> : `${word} ` })}
            </p>
            <section style={{ textAlign: "left" , margin: "0em 2em 0em -0.5em"}} >
              { githubButton() }
              { urlButton() }
            </section>
          </div>
          <div className="slider-images">
            <Slider {...sliderSettings}>
              { urls.map( ( url ) => { return <img ref={ imgElement } onLoad={ () =>  setIframeSize( iFrameElement.current ) } className="slider-image" src={ url.value } key={ guid() }></img> }) }
              { youtubeDemo() }
            </Slider>
          </div>
        </div>
      )
    } else {
      return (
        // Little Screen
        <div className="project-columns">
          <div className="slider-images">
            <Slider {...sliderSettings}>
              { urls.map( ( url ) => { return <img ref={ imgElement } className="slider-image" src={ url.value } key={ guid() }></img> }) }
              { youtubeDemo() }
            </Slider>
          </div>
          <div className="project-row " onLoad={ () =>  setIframeSize(iFrameElement.current) }>
            <p className="project-text" style={{ color: "#fff" }}>
              { writeUpText.map( ( word ) => { return keyWords.includes(word)? <strong key={ guid() } >{ `${ word } ` }</strong> : `${ word } ` })}
            </p>
            <section style={{ margin: "0 0 3em 0" }}>
              { githubButton() }
              { urlButton() }
            </section> 
             
        </div>
      </div>
      )
    }
  }

  return (
    <div ref={ projectContainer } className="project" style={{ background: "rgba(66,72,94, 0.4)" }}>
      { view() }
    </div>
  )
}

export default Project;