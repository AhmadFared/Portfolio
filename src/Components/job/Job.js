import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import "./jobStyle.css";

const Job = () => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "id"]{
          jobtitle,
          jobdescription,  
      }`
      )
      .then((data) => setJob(data))
      .catch(console.error);
  }, []);
  return (
    <>
      {job &&
        job.map((post, index) => (
          <div className="container job">
            <div className="job-header">{post.jobtitle}</div>
            <div className="job-description">{post.jobdescription}</div>
          </div>
        ))}
    </>
  );
};

export default Job;
