import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY PROJECTS</span>
          <h2 className={classes.heading}>Front-End Projects</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>INSTA-SHARE(CLONE-APP)</h3>
                <p>
                  Implemented responsive Insta Share app like Instagram Clone
                  where users can see like Instagram Stories, Home, Profile,
                  InstaPosts, and also can search users and view specific
                  details. Implemented different routes for features like login,
                  home, profile by using React Router components Route, Switch,
                  Link.
                </p>

                <a
                  href="https://instasharerahul.ccbp.tech/"
                  target="_blank"
                  rel="opener noreferrer"
                  className="links"
                >
                  VIEW
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>IPL-DASHBOARD</h3>
                <p>
                  Implemented IPL Dashboard app where users can list of ipl
                  team, individual team details and respective team matches info
                  Implemented UI such as home dashboard, individual team info
                  routes by using React Router library components like Route,
                  Switch, Link, props, lists & keys.
                </p>

                <a
                  href="https://rahulipldb.ccbp.tech/"
                  target="_blank"
                  rel="opener noreferrer"
                  className="links"
                >
                  VIEW
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.other}>
                <h3>WIKIPEDIA SEARCH APPLICATION</h3>
                <p>
                  Developed custom Wikipedia search application where users can
                  search and view curated results and can see detailed
                  explanations in Wikipedia by clicking on the specific result
                  The displayed list of search results with HTML list elements
                  with hyperlink as URL, styled list using CSS, Bootstrap, and
                  implemented responsiveness using Flex properties and CSS Box
                  model.
                </p>

                <a
                  href="https://wikipediarahul.ccbp.tech/"
                  target="_blank"
                  rel="opener noreferrer"
                  className="links"
                >
                  VIEW
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
