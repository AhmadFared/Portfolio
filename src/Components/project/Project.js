import React from "react";
import { Link } from "react-router-dom";
import "./projectStyle.css";

const Project = ({ project, slug }) => {
  return (
    <div className="project-container d-flex flex-column">
      <div className="project-title">{project.title}</div>
      <Link to={"/project/" + slug}>
        <div className="project-img-container">
          <a>
            <img
              className="img-thumbnail"
              id="project-img"
              src={project.mainImage.asset.url}
              alt={project.mainImage.alt}
            />
          </a>
        </div>
      </Link>
      <div className="row project-footer">
        <a className="project-demo disabled" href="#">
          demo
        </a>
        <a className="project-github" href={project.github} target="_blank">
          github
        </a>
      </div>
    </div>
  );
};

export default Project;
