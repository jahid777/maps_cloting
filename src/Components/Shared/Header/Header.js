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
  }, []);
  let navbarClasses = [""];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <>
      {/* Top Header Start*/}
      <div className="container-fluid topHeaderBody">
        <div className="contactInfo">
          <div className="gifTop">
            <img
              src="https://i.ibb.co/ZK18NPH/Happy-Shopping-White.gif"
              alt="happu-Shopping2"
              border="0"
              className="gifImg"
            />
          </div>
          <ul>
            <span className="emailPhone">
              <li className="contactEmail">
                <EmailIcon fontSize="small" />
                admin@mapsclothing.com
              </li>
              <li className="contactNumber">
                <CallIcon fontSize="small" />
                +880 19581-55100
              </li>
            </span>
            <li className="socialLink fb">
              <a href="https://www.facebook.com/profile.php?id=100006060858934" target="_blank" className="mainIcon fb">
                <FacebookIcon fontSize="medium" />
              </a>
            </li>
            <li className="socialLink LI">
              <a href="https://www.linkedin.com/" target="_blank" className="mainIcon LI">
                <LinkedInIcon fontSize="medium" />
              </a>
            </li>
            <li className="socialLink tw">
              <a href="https://twitter.com/" target="_blank"  className="mainIcon tw">
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
            <i className="bi bi-list"></i>
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
                <Link className="nav-link mapsNavlink" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mapsNavlink" to="/about">
                  About us
                </Link>
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
