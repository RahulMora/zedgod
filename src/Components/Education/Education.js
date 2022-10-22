import React, { Component } from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}
                        >
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Internship <span>Dec(2021)-Present</span>
                          </h2>
                          <p>
                            I am currently pursuing as{" "}
                            <b>Full Stack Development Trainee</b> at{" "}
                            <a href="https://www.ccbp.in">
                              <b>NxtWave</b>{" "}
                            </a>
                            <i></i>
                            and boosting my professional skills.
                          </p>

                          <p>
                            I Done Some of Real-Time-Projects on "STATIC,
                            RESPONSIVE, & DYNAMIC" Web-Applications.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Graduation B-Tech <span>2017-2021</span>
                          </h2>
                          <p>
                            In Further, my Graduation Was Finished in ECE
                            (Electronic's and Communication Engineering) from{" "}
                            <a href="https://jayamukhi.ac.in/">
                              <b>JITS</b>
                            </a>
                            -Jayamukhi institute of Technological Sciences at
                            Narsampet,Warangal,Telangana. with overall 68.88%.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                        >
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Higher Education <span>2014-2016</span>
                          </h2>
                          <p>
                            In Additional I had done my higher education from
                            Shri Cv Raman Junior College at Warangal, Telangana,
                            with major subjects as Maths, Physics, Chemistry.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            ST Mary's High School <span>2013-2014</span>
                          </h2>
                          <p>
                            In Begining My 10th Standard was Completed at
                            Maheshwaram,Narsampet,Warangal-506132,Telangana.
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          ></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
