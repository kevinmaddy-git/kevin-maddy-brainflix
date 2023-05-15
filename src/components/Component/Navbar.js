import React from "react";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import user from "../../assets/images/Mohan-muruge.jpg";
import eyeglass from "../../assets/images/Icons/search.svg";
import arrow from "../../assets/images/Icons/upload.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo" />
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
        <button className="navbar__upload" type="button">
          <img className="navbar__upload-icon" src={arrow} alt="upload-icon" />
          UPLOAD
        </button>
        <img className="navbar__user2" src={user} alt="user" />
      </div>
    </div>
  );
}



