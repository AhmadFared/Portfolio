import React, { useState, useEffect } from "react";
import { FaTwitter, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import sanityClient from "../../../client";
import "./footerStyle.css";

const Footer = () => {
  const [social, setSocial] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "id"]{
          gmail,
          github,
          twitter,
          linkedin,
          telegram,
      }`
      )
      .then((data) => setSocial(data))
      .catch(console.error);
  }, []);
  return (
    <>
      {social &&
        social.map((post, index) => (
          <div className="container-fluid footer">
            <div className="row social">
              <div className="col github">
                <FaGithub />
                <a href={post.github} target="_blank">
                  <div className="social-media-platform-name">github</div>
                </a>
              </div>
              <div className="col twitter">
                <FaTwitter className="twitter-icon" />
                <a href={post.twitter} target="_blank">
                  <div className="social-media-platform-name">twitter</div>
                </a>
              </div>
              {/* <div className="col telegram">
                <FaTelegram />
                <a href={post.telegram} target="_blank">
                  <div className="social-media-platform-name">telegram</div>
                </a>
              </div> */}
              <div className="col linkedin">
                <FaLinkedin className="linkedin-icon" />
                <a href={post.linkedin} target="_blank">
                  <div className="social-media-platform-name">linkedin</div>
                </a>
              </div>
            </div>
            <div className="gmail">{post.gmail}</div>
          </div>
        ))}
    </>
  );
};

export default Footer;
