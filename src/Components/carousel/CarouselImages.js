import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselImages.css";

import { h1 } from "./CarouselImages.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from "react-icons/go";
import { FaArrowCircleDown } from "react-icons/fa";

class CarouselImages extends Component {
  render() {
    return (
      <div className="main-container">
        <Carousel
          infiniteLoop={true}
          interval={3000}
          useKeyboardArrows={true}
          transitionTime={500}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className="carousel-container">
            <img
              src="https://res.cloudinary.com/morarahul1/image/upload/v1665581107/tutorial/laptop1_wsypy3.jpg"
              alt="myImage"
            />
            <div className="containers">
              <h1>I'm Rahul</h1>
              <a
                href="https://docs.google.com/document/d/1NSUtwYvsyvavi8xkjYesiJ9mDxM5LAt_Pif4JDlPANE/edit"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className="carousel-container">
            <img
              className="image1"
              src="https://res.cloudinary.com/morarahul1/image/upload/v1665581110/tutorial/Pencil_ejyhu8.jpg"
              alt="myImage"
            />
            <div className="containers">
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a href="" rel="opener noreferrer" target="_blank">
                VIEW PROJECTS <GoProject />
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
