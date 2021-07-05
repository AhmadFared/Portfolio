import React, { useState, useEffect } from "react";
import "./projectsStyle.css";
import Project from "../project/Project";
import sanityClient from "../../client";

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url,
          },
          alt,
        },
        body,
        github,
        
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  console.log(projectData);
  return (
    <div className="row flex-wrap projects">
      {projectData && (
        <Project project={projectData[0]} slug={projectData[0].slug.current} />
      )}
      {projectData && (
        <Project project={projectData[1]} slug={projectData[1].slug.current} />
      )}
    </div>
  );
};

export default Projects;
