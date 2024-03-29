import React from "react";
import Project from "./Project";
import saltImages1 from "../images/work_images/salt_1.png";
import saltImages2 from "../images/work_images/salt_2.png";
import saltImages3 from "../images/work_images/salt_3.png";
import SlinkyImage1 from "../images/work_images/slinky_1.jpg";
import SlinkyImage2 from "../images/work_images/slinky_2.jpg";
import SlinkyImage3 from "../images/work_images/slinky_3.jpg";
import ExactDocsImage1 from "../images/work_images/exactdocs_1.jpg";
import ExactDocsImage2 from "../images/work_images/exactdocs_2.jpg";
import ExactDocsImage3 from "../images/work_images/exactdocs_3.jpg";
import demoGBImage1 from "../images/work_images/demo_gb1.jpg";
import demoGBImage2 from "../images/work_images/demo_gb2.jpg";
import demoGBImage3 from "../images/work_images/demo_gb3.jpg";

const MyWorkPanel = (props) => {
  return (
    <div className="project-panel" style={{ background: "rgba(0,0,0,0)" }}>
      <h2 className="text-gradient"> My Work.</h2>
      <Project
        nightMode={props.nightMode}
        projectName={"Salt Compliance LMS"}
        linkText={"GRC Solutions"}
        linkUrl={"https://www.grcsolutions.com.au/platforms/our-platforms"}
        imageUrls={[saltImages1, saltImages2, saltImages3]}
        keyWords={[
          "Salt",
          "Hooks,",
          "React,",
          "Context",
          "API",
          "CSS",
          "Modules.",
        ]}
        writeUp={
          "Salt is a purpose built Compliance Learning Management System (LMS) developed GRC Solutions. The Front End has been redesigned and rebuilt from the ground up using React, Hooks, Context API and CSS Modules. This includes a rework and integration with a 20 year old LMS player and has been designed to be a completely white label product that a client can tailor to suit their own branding."
        }
      />
      <Project
        nightMode={props.nightMode}
        projectName={"Slinky"}
        linkText={"Chrome Web Store"}
        linkUrl={
          "https://chrome.google.com/webstore/detail/oiabgomphebmcdglaoppphombggcdbpg/publish-accepted?authuser=0&hl=en-GB"
        }
        githubUrl={"https://github.com/SamSeabourn/Slinky"}
        imageUrls={[SlinkyImage1, SlinkyImage2, SlinkyImage3]}
        youtubeUrl={"https://www.youtube.com/embed/CtrtrZHS5q8"}
        keyWords={["Firebase's", "React", "Slinky", "Chrome", "Extension"]}
        writeUp={
          "Slinky is a Chrome Extension designed to manage and search through bookmarks with hotkeys and hashtags. This application is built with React using a custom webpack and utilizes Firebase's live database and anonymous authentication to deliver a faster alternative to vanilla bookmarking."
        }
      />
      <Project
        nightMode={props.nightMode}
        projectName={"ExactDocs"}
        linkText={"ExactDocs.com"}
        linkUrl={"https://exactdocs.com/"}
        imageUrls={[ExactDocsImage1, ExactDocsImage2, ExactDocsImage3]}
        keyWords={["ExactDocs", "C#", ".Net"]}
        writeUp={
          "With ExactDocs you can centralize and control all of your document templates and use them to generate perfectly compliant and accurate documents every time. ExactDocs is built with Microsoft .Net in C# by Solentive Software and has been undergoing continuous product updates based on user feedback."
        }
      />
      <Project
        nightMode={props.nightMode}
        projectName={"DemoGB"}
        linkText={"DemoGB"}
        linkUrl={"https://demomygb.herokuapp.com/"}
        githubUrl={"https://github.com/SamSeabourn/DemoGB"}
        imageUrls={[demoGBImage1, demoGBImage2, demoGBImage3]}
        youtubeUrl={"https://www.youtube.com/embed/5S6PauVO7To"}
        keyWords={[
          "Mongo.DB.",
          "Node.js,",
          "Express",
          "Server",
          "Side",
          "Rendering",
        ]}
        writeUp={
          "DemoGB allows indie GameBoy game developers to upload and try each other's creations on a simulated 3D GameBoy in the browser. This app was built in just over a week and utlises Server Side Rendering with Express, blob storage and Mongo.DB."
        }
      />
    </div>
  );
};

export default MyWorkPanel;
