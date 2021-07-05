import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./headerStyle.css";
import ShowDetails from "../ShowDetails/ShowDetails";

const Header = ({ onShow, show }) => {
  return (
    <nav className="row navbar mb-4">
      <div className="col-3 nav-brand">
        <ShowDetails onShow={onShow} showDetails={show} />
      </div>
      <ul className="col nav nav-pills justify-content-end">
        <li className="nav-item ml-3 py-3">
          <Link to="/home">
            <a className="nav-link active" id="active" href="#">
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item ml-3 py-3">
          {/* <Link to="/clients"> */}
          <a className="nav-link disabled" href="#">
            Clients
          </a>
          {/* </Link> */}
        </li>
        <li className="nav-item ml-3 py-3">
          {/* <Link to="/gallery"> */}
          <a className="nav-link disabled" href="#">
            Gallery
          </a>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
