import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import "./IDStyle.css";
import { FaRegAddressCard } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";

const ID = ({}) => {
  const [id, setID] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "id"]{
          fullname,
          age,
          birthdate,
          image {
            asset->{
              _id,
              url,
            },alt
          }
      }`
      )
      .then((data) => setID(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {id &&
        id.map((post, index) => (
          <div className="sidebar col">
            <div className="row header-container">
              <div className="profile-header">Profile</div>
            </div>
            <div className="row id-img">
              <a>
                <img
                  className=" img-thumbnail personal-img"
                  src={post.image.asset.url}
                />
              </a>
            </div>
            <div className="col id-details">
              <div className="row fullname">
                <div className="col-sm-4 icon">
                  <FaRegAddressCard />
                </div>
                <div className="col id-info">{post.fullname}</div>
              </div>
              <div className="row age">
                <div className="col-sm-4 icon">
                  <GoCalendar />
                </div>
                <div className="col id-info">{post.birthdate}</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ID;
