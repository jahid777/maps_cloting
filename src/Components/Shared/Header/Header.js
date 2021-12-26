import React from "react";
import "./Header.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Header = () => {
  return (
    <>
      {/* Top Header Start*/}
      <div className="container-fluid topHeaderBody">
        <div className="contactInfo">
          <ul>
            <li className="contactEmail">
              <EmailIcon fontSize="small" />
              info@mysoftheaven.com
            </li>
            <li className="contactNumber">
              <CallIcon fontSize="small" />
              +88 01123456789
            </li>
            <li className="socialLink fb">
              <a href="/" className="mainIcon fb">
                <FacebookIcon fontSize="medium" />
              </a>
            </li>
            <li className="socialLink LI">
              <a href="/" className="mainIcon LI">
                <LinkedInIcon fontSize="medium" />
              </a>
            </li>
            <li className="socialLink tw">
              <a href="/" className="mainIcon tw">
                <TwitterIcon fontSize="medium" />
              </a>
            </li>
          </ul>
        </div>        
      </div>
      {/* Top Header End*/}
      {/* Bottom NavBar start */}
      <div className="navbar navbar-expand-lg sticky-top mapsNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="https://i.ibb.co/Y31CP6w/M-removebg.png" alt="MAPS CLOTHING LTD." className="logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      {/* Bottom NavBar End */}
    </>
  );
};

export default Header;
