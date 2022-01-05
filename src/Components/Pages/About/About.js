import React from "react";
import "./About.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";

const About = () => {
  return (
    <>
    <Header/>
    <section className="AboutUS">
      <img src="https://i.ibb.co/RTK6B5Q/AboutUs.png" alt=" " className="aboutHeaderImg" />
      <div className="mainContent">
      <p><span>MAPS Clothing Limited (MCL)</span> is one of the largest garments in the country representing the ready made garment products. Particularly the under garments and formal dress like shirt, pant, suits are manufactured here. 
      Starting its journey in 1983, today MCL takes care of an industry that is at the backbone of Bangladesh’s economy.</p>

      <div className="mission my-5">
        <h2>Our Mission</h2>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
      <hr className="mapshr"/>
      <div className="vision my-5">        
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        <h2>Our Vision</h2>
      </div>
      </div>
      <img src="https://i.ibb.co/mtySS3r/About-us-Bottom.png" alt=" " className="aboutHeaderImg" />
    </section>
    <Footer/>
    </>
  );
};



export default About;
