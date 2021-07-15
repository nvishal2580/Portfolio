import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../Data/images/file1.svg";
import "./Intro.css";
const Intro = () => {
  return (
    <Container fluid style={{ marginTop: "56px" }}>
      <Row>
        <Col md={6} className="class1">
          <div className="intro-title">
            <h1 className="text-center">
              Hi <span className="wave">👋</span>, I'm Vishal
            </h1>
            <div className="info text-center">
              MERN Stack Developer & Programmer
            </div>
            <div className="text-center  resume-btn-div">
              <button className="resume-button">Resume</button>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <img src={Img} alt="logo" className="file1" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
