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
  };

  const { imageUrls, writeUp, keyWords, projectName, githubUrl, linkText, linkUrl } = props;
  const idTag = `${ projectName }-writeUp`;
  const urls = [];
  const writeUpText = writeUp.split(' ');

  console.log(linkText)
  
  for (let i = 0; i < imageUrls.length; i++) {
    urls.push({ key: i , value: `${imageUrls[i]}` })
  }

  const githubButton = () => {
    if (githubUrl !== undefined) return <Button linkText="Github" linkUrl={ githubUrl } icon={ GithubIcon } />
  }

  const urlButton = () => {
    if (linkUrl !== undefined) return <Button linkText={ linkText } linkUrl={ linkUrl } icon={ LinkIcon } />
  }


  return (
    <div className="drop-shadow m-top-10vw " style={{ background: "rgba(255,255,255,0.1" }}>
      <Slider {...sliderSettings}>
        { urls.map( ( url ) => { return <img src={ url.value } key={ url.key }></img> }) }
      </Slider>
      <div className="p-all-10vw">
        <p id={{ idTag }} style={{ color: "#fff" }}>
          { writeUpText.map( ( word ) => { return keyWords.includes(word)? <strong>{ `${word} ` }</strong> : `${word} ` }) }
        </p>
          { urlButton() }
          { githubButton() }
      </div>
    </div>
  )

}

export default Project;