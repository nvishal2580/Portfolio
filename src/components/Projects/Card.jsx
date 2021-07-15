import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
import { getTagColor } from "./../../Data/Details";
const ProjectCard = ({ project }) => {
  const { title, tags, details, demo, github } = project;

  return (
    <div className="card_body">
      <div className="card_title p-2">{title}</div>
      <div className="m-2">
        <div>
          {tags.map((tag) => (
            <span
              className="tag mr-2 badge p-1"
              style={{ background: `${getTagColor(tag)}` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card_text">{details}</div>
      <div className="card_footer">
        <a href={github} className="m-2">
          githhub
        </a>
        <a href={demo} className="m-2">
          Demo{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
