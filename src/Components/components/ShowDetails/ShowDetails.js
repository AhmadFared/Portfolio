import React from "react";
import "./showDetailsStyle.css";
import { CgProfile } from "react-icons/cg";

const ShowDetails = ({ onShow, showDetails }) => {
  return (
    <div className="">
      {!showDetails ? (
        <button
          type="button"
          className="btn show-btn btn-outline-secondary"
          onClick={(e) => onShow()}
        >
          <CgProfile id="profile" />
        </button>
      ) : (
        <button
          type="button"
          className="btn close-btn btn-outline-danger"
          onClick={(e) => onShow()}
        >
          <CgProfile id="profile" />
        </button>
      )}
    </div>
  );
};

export default ShowDetails;
