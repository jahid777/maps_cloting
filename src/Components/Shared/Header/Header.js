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
      <div class="container-fluid topHeaderBody">
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
    </>
  );
};

export default Header;
