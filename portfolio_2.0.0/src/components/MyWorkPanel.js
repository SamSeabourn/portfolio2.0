import React from 'react'
import Project from './Project'

import SlinkyImage0 from '../images/work_images/Slinky/image_0.jpg'
import SlinkyImage1 from '../images/work_images/Slinky/image_1.jpg'
import SlinkyImage2 from '../images/work_images/Slinky/image_2.jpg'
import SlinkyImage3 from '../images/work_images/Slinky/image_3.gif'


const MyWorkPanel = () => {
    return (
        <div className="center-text p-top-10vw p-bottom-10vw m-bottom-10vw" style={{ background: '#202536' }}>
          <h2 className="text-gradient"> My Work.</h2>
          <Project
            projectName={ "Slinky" }
            linkText={"Chrome Web Store"}
            linkUrl={ "https://chrome.google.com/webstore/detail/oiabgomphebmcdglaoppphombggcdbpg/publish-accepted?authuser=0&hl=en-GB"}
            githubUrl={"https://github.com/SamSeabourn/Slinky"}
            imageUrls={ [SlinkyImage0, SlinkyImage1, SlinkyImage2 ,SlinkyImage3] }
            keyWords={ ["Firebase", "React", "Slinky", "Chrome", "Extension" ] }
            writeUp={
              "Slinky is a Chrome Extension designed to manage and search though bookmarks with hotkeys and hashtags. This application is built with React using a custom webpack and utilizes Firebase live database and Anoynmous authentication to deliver a faster alternative to bookmarking pages."}
            />

        </div>
    )
}

export default MyWorkPanel