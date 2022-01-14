import React, { useEffect } from "react";
import "./About.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
    <Header/>
    <section className="AboutUS">
      
      <div className="aboutHeader">
        <h2>About us</h2>
      </div>
      <div className="mainContent">
      <p><span>MAPS Clothing Limited (MCL)</span> is one of the largest garments in the country representing the ready made garment products. Particularly the under garments and formal dress like shirt, pant, suits are manufactured here. 
      Starting its journey in 1983, today MCL takes care of an industry that is at the backbone of Bangladesh’s economy.</p>

      <div className="mission my-5">
        <h2 data-aos="fade-down">Our Mission</h2>
        <span data-aos="fade-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
      <hr className="mapshr"/>
      <div className="vision my-5">        
        <span data-aos="fade-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        <h2 data-aos="fade-up">Our Vision</h2>
      </div>
      </div>
      <div className="aboutFooter">
      <span className="aboutFooterContent">
      <h2>Thank you</h2>
      <h5>Stay With us</h5>
      </span>
      </div>
      
    </section>
    <Footer/>
    </>
  );
};



export default About;
