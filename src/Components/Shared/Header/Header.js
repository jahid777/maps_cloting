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
      <nav
        className="container-fluid navbar navbar-expand-lg navbar-light mapsNav"
        style={{ width: "100%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand LogoMain" href="/">
            <img
              // src="https://i.ibb.co/gS3TJp5/M-removebg.png"
              src="https://i.ibb.co/wNX51tC/1-removebg-preview.png"
              alt="MAPS CLOTHING LTD."
              className="logo"
            ></img>
            <span>MAPS CLOTHING LTD.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end rightMenuBottomNav"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link mapsNavlink active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mapsNavlink" href="/">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link mapsNavlink dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      CEO Message
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Company profile
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link mapsNavlink" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Bottom NavBar End */}
    </>
  );
};

export default Header;
