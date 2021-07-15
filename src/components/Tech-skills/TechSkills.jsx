import React from "react";
import { Container } from "react-bootstrap";
import { Icons } from "../../Data/Details";
import Stack from "./TechDesign";
const Skills = () => {
  return (
    <Container fluid className="text-center mt-4 mb-4" id="tools">
      <h1 className="m-4" style={{ fontFamily: "Zen Tokyo Zoo" }}>
        # Tools
      </h1>
      <Stack path={Icons.Html} name="HTML5" />
      <Stack path={Icons.Css} name="CSS" />
      <Stack path={Icons.Javascript} name="Javascript" />
      <Stack path={Icons.Nodejs} name="NodeJs" />
      <Stack path={Icons.ReactJs} name="ReactJs" />
      <Stack path={Icons.MongoDb} name="MongoDB" />
      <Stack path={Icons.Git} name="Git" />
      <Stack path={Icons.Cpp} name="C++" />
      <Stack path={Icons.Python} name="Python" />
    </Container>
  );
};

export default Skills;
