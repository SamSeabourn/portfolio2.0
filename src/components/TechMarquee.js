import React, { Component } from 'react'
import TechCard from './TechCard';
import Slider from 'react-slick'
import Webpack from '../images/tech/tech (1).svg'
import JS from '../images/tech/tech (2).svg'
import node from '../images/tech/tech (3).svg'
import csharp from '../images/tech/tech (4).svg'
import dotnet from '../images/tech/tech (5).svg'
import azure from '../images/tech/tech (6).svg'
import react from '../images/tech/tech (7).svg'
import jira from '../images/tech/tech (8).svg'
import git from '../images/tech/tech (9).svg'
import firebase from '../images/tech/tech (10).svg'
import ai from '../images/tech/tech (11).svg'
import figma from '../images/tech/tech (12).svg'
import svg from '../images/tech/tech (13).svg'
import npm from '../images/tech/tech (14).svg'
import mongo from '../images/tech/tech (15).svg'
import xd from '../images/tech/tech (16).svg'
import ps from '../images/tech/tech (17).svg'
import ts from '../images/tech/tech (18).svg'
import mui from '../images/tech/tech (19).svg'

class TechMarquee extends Component {
  constructor() {
    super()

    this.state = {
      settings: {
        infinite: true,
        slidesToShow: 2,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: false,
        mobileFirst: true,
        cssEase: "ease-out",
        centerMode: false,
        swipe: true,
        swipeToSlide: true,
      },
    };
  }

  updateCardCount = () => {
    var windowWidth = window.innerWidth;
    if (windowWidth > 1278) {
      this.setState({
        settings: {
          infinite: true,
          slidesToShow: 6,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 2500,
          dots: false,
          arrows: false,
          mobileFirst: true,
          cssEase: "ease-out",
          centerMode: false,
          swipe: true,
          swipeToSlide: true,
        },
      });
    } else {
      this.setState({
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 2500,
          dots: false,
          arrows: false,
          mobileFirst: true,
          cssEase: "ease-out",
          centerMode: true,
          swipe: false,
          swipeToSlide: true,
          touchMove: false,
          draggable: false,
          accessibility: false,
        },
      });
    }
  };

  componentDidMount() {
    this.updateCardCount();
    window.addEventListener("resize", this.updateCardCount);
  }

  logos = [
    // JS,
    react,
    ts,
    dotnet,
    node,
    figma,
    csharp,
    azure,
    jira,
    git,
    firebase,
    ai,
    svg,
    npm,
    // mongo,
    xd,
    // ps,
    Webpack,
    mui,
  ].map((logo, i ) => <TechCard source={logo} key={'logo-' + i} />)

  
  render() {
    return (
      <Slider {...this.state.settings} className="tech-marquee">
        {
          this.logos
        }
      </Slider>
    );
  }
}

export default TechMarquee;
