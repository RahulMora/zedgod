import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              {" "}
              My name is <b>Rahul Mora</b> and I am currently doing Internship
              of "Full Stack Development Trainee" at{" "}
              <a
                target="_blank"
                rel="opener noreferrer"
                href="https://www.ccbp.in/"
              >
                {" "}
                <b>NxtWave</b>
              </a>
              . I completed my degree in Bachelor of Technology in Electronic's
              and Communication Engineering from Jayamukhi Institute of
              Technological Sciences at Warangal . I am much interested in
              developing new things which excite me a lot. :){" "}
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like
              to stay on top of latest trends. I try to leave every line of code
              I write more readable, accessible, and modular.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
