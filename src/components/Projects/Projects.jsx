import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./Card";
import { Projects as projects } from "../../Data/Details";

const Projects = () => {
  return (
    <div className=" container-fluid text-center mt-4 mb-4" id="projects">
      <h1 style={{ fontFamily: "Zen Tokyo Zoo" }}># Projects</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => (
          <ProjectCard project={project} id={projects.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
