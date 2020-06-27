import React from 'react'
import Project from './Project'
import SlinkyImage1 from '../images/work_images/slinky_1.jpg'
import SlinkyImage2 from '../images/work_images/slinky_2.jpg'
import SlinkyImage3 from '../images/work_images/slinky_2.jpg'
import ExactDocsImage1 from '../images/work_images/exactdocs_1.jpg'
import ExactDocsImage2 from '../images/work_images/exactdocs_2.jpg'
import ExactDocsImage3 from '../images/work_images/exactdocs_3.jpg'
import demoGBImage1 from '../images/work_images/demo_gb1.jpg'
import demoGBImage2 from '../images/work_images/demo_gb2.jpg'
import demoGBImage3 from '../images/work_images/demo_gb3.jpg'

const MyWorkPanel = (props) => {
    return (
        <div className="project-panel" style={{ background: "rgba(0,0,0,0)"}}>
          <h2 className="text-gradient"> My Work.</h2>
          <Project
            nightMode={ props.nightMode }
            projectName={ "Slinky" }
            linkText={"Chrome Web Store"}
            linkUrl={ "https://chrome.google.com/webstore/detail/oiabgomphebmcdglaoppphombggcdbpg/publish-accepted?authuser=0&hl=en-GB"}
            githubUrl={"https://github.com/SamSeabourn/Slinky"}
            imageUrls={ [SlinkyImage1, SlinkyImage2, SlinkyImage3 ] }
            youtubeUrl={ "https://www.youtube.com/embed/CtrtrZHS5q8" }
            keyWords={ ["Firebase", "React", "Slinky", "Chrome", "Extension" ] }
            writeUp={
              "Slinky is a Chrome Extension designed to manage and search though bookmarks with hotkeys and hashtags. This application is built with React using a custom webpack and utilizes Firebase live database and Anoynmous authentication to deliver a faster alternative to bookmarking pages."}
          />
            
          <Project
            nightMode={ props.nightMode }
            projectName={ "ExactDocs" }
            linkText={"ExactDocs.com"}
            linkUrl={ "https://exactdocs.com/"}
            imageUrls={ [ExactDocsImage1, ExactDocsImage2, ExactDocsImage3] }
            keyWords={ ["ExactDocs", "C#", ".Net" ] }
            writeUp={
              "With ExactDocs you can centralize and control all of your document templates and use them to generate perfectly compliant and accurate documents every time. ExactDocs is built with Microsoft .Net in C# with has been undergoing continious product updates based on users feedback."}
          />

          <Project
            nightMode={ props.nightMode }
            projectName={ "DemoGB" }
            linkText={"DemoGB"}
            linkUrl={ "https://exactdocs.com/"}
            githubUrl={"https://github.com/SamSeabourn/Slinky"}
            imageUrls={ [demoGBImage1, demoGBImage2, demoGBImage3] }
            youtubeUrl={ "https://www.youtube.com/embed/5S6PauVO7To" }
            keyWords={ ["Mongo.DB", "Node.js,", "Express,", "Server", "Side", "Rendering"] }
            writeUp={
              "DemoGB allows indy GameBoy game developers to updload and try each other's creations on a 3D css GameBoy in the browser. This app was built in just over a week and utlises Server Side Rendering with Express and was build with Node.js, Mongo.DB "}
          />
        </div>
    )
}

export default MyWorkPanel