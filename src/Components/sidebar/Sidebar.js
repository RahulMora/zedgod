import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FiExternalLink } from "react-icons/fi";
import logo from "../images/sam.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div style={{ color: "black", fontWeight: "bold" }} className="tagtop">
          {" "}
          # programmer_life{" "}
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          {" "}
          # Hello Stranger!{" "}
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          {" "}
          # I'M{" "}
        </div>
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Rahul Mora
          </Link>
        </h1>

        <img src={logo} />
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          <a
            href="mailto:morarahul8.mr@gmail.com"
            rel="opener noreferrer"
            target="_blank"
            className="fa fa-envelope"
          ></a>{" "}
          morarahul8.mr@gmail.com{" "}
        </p>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              ABOUT ME
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#Skill" className="links">
              MY SKILLS
            </Link>
          </li>

          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              MY PROJECTS
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              MY JOURNEY
            </Link>
          </li>
          {
            <li className="sidebar-nav-items">
              <a
                href="mailto:morarahul8.mr@gmail.com"
                target="_blank"
                rel="opener noreferrer"
                className="links"
              >
                {" "}
                CONTACT ME
                <FiExternalLink />
              </a>
            </li>
          }
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:morarahul8.mr@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-envelope fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-github fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/rahulmora/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href=""
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-twitter fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href=""
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-instagram fa-lg"
              ></a>
            </li>

            <li className="sidebar-nav-icons">
              {" "}
              <a
                href=""
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-facebook fa-lg"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
