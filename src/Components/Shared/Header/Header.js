import React, { useEffect, useState } from "react";
import "./Header.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 91) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = [""];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
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
        className={`container-fluid navbar navbar-expand-lg sticky-top mapsNav ${navbarClasses.join(
          " "
        )}`}
        style={{ width: "100%" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand LogoMain" to="/">
            <img
              // src="https://i.ibb.co/gS3TJp5/M-removebg.png"
              src="https://i.ibb.co/wNX51tC/1-removebg-preview.png"
              alt="MAPS CLOTHING LTD."
              className="logo"
            ></img>
            <span>MAPS CLOTHING LTD.</span>
          </Link>
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
                <Link
                  className="nav-link mapsNavlink active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mapsNavlink" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link mapsNavlink dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      CEO Message
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Company profile
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link mapsNavlink" to="/contact_us">
                  Contact Us
                </Link>
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
