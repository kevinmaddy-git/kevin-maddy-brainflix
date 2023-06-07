import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/Logo/BrainFlix-logo.svg";
import user from "../../../assets/images/Mohan-muruge.jpg";
import arrow from "../../../assets/images/Icons/upload.svg";
import "../Navbar/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <Link to="/" className="navbar__logo-link">
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar__search-container">
        <div className="navbar__search-input">
          <input
            className="navbar__search"
            type="text"
            placeholder="Search"
          />
        </div>
        <img className="navbar__user" src={user} alt="user" />
      </div>
      <div className="navbar__upload-container">
        <Link to="/upload" className="navbar__upload-link">
          <button className="navbar__upload" type="button">
            <img className="navbar__upload-icon" src={arrow} alt="upload-icon" />
            UPLOAD
          </button>
        </Link>
        <img className="navbar__user2" src={user} alt="user" />
      </div>
    </div>
  );
}

export default Navbar;




