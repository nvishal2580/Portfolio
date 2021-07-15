import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";
import Profile from "../../Data/images/profile-pic.jfif";
import Social from "./Social";
import { Details, Logos } from "./../../Data/Details";
import Wave from "../../Data/images/wave.svg";
import { useHistory } from "react-router-dom";
const AboutMe = () => {
  return (
    <Container fluid id="about">
      <div>
        <h3 className="section-title text-center"></h3>
      </div>
      <div id="main-about">
        <Row>
          <Col md={4} sm={12} className="text-center">
            <img src={Profile} alt="Profile picture" className="profile-pic" />
            <h4 className="img-title">Vishal Nagar</h4>
          </Col>
          <Col md={8} sm={12} className="description">
            <div className="inner-div text-center">
              Hi , I am vishal nagar , an undergraduate student in Electronics
              and communication Engineering from Sardar Vallabhbhai National
              Institute of Technology , Surat. I am passinate about web dev
              technologies ..
            </div>
            <div className="text-center connection-div">
              <div className="icon linkedin">
                <div className="tooltip">Linkedin</div>
                <a
                  href={Details.Linkedin}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
              </div>
              <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <a
                  href={Details.Facebook}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>
              </div>
              <div className="icon twitter">
                <div className="tooltip">Twitter</div>
                <a
                  href={Details.Twitter}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                </a>
              </div>
              <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <a
                  href={Details.Instagram}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>
                    <i
                      href={Details.Instagram}
                      className="fab fa-instagram"
                    ></i>
                  </span>
                </a>
              </div>
              <div className="icon github">
                <div className="tooltip">Github</div>
                <a
                  href={Details.Github}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <img src={Wave} alt="waveform" />
    </Container>
  );
};

export default AboutMe;
