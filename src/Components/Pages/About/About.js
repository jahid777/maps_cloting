import React, { useEffect } from "react";
import "./About.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Header />
      <section className="AboutUS">
        <div className="aboutHeader">
          <h2>About us</h2>
        </div>
        <div className="container mainContent">
          <p className="topContent">
            <span>MAPS Clothing Limited (MCL)</span> started its Garment
            business in 2012 with a small buying house in Dhaka, Bangladesh. It
            has now grown into an Internationally & Nationally trusted in
            knitting for skilled workmanship, progressive Research & Development
            consistent quality and services through a 100 strong workforce.
          </p>

          <div className="mission my-5">
            <h2 data-aos="fade-down">Our Mission</h2>
            <span data-aos="fade-left" className="missionContent">
              <div className="missionContentSections">
                <span
                  data-aos="fade-down"
                  className="missionContentSectionsHead"
                >
                  To Our Valued Customer
                </span>
                <span className="missionContentSectionsText">
                  Total satisfaction through providing on time delivery of
                  quality products and services by our best quality production.
                </span>
              </div>
              <br />
              <div className="missionContentSections">
                <span
                  data-aos="fade-right"
                  className="missionContentSectionsHead"
                >
                  To Our Employees
                </span>
                <span className="missionContentSectionsText">
                  Good working environment and compliance with national &
                  International labour rules.
                </span>
              </div>
              <br />
              <div className="missionContentSections">
                <span data-aos="fade-up" className="missionContentSectionsHead">
                  To Our Society
                </span>
                <span className="missionContentSectionsText">
                  Creation of better green tomorrow.
                </span>
              </div>
            </span>
          </div>
          <hr className="mapshr" />
          <div className="vision my-5">
            <h2 data-aos="fade-up">Our Vision</h2>
            <span data-aos="fade-right" className="visionContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>
        </div>
        <div className="aboutFooter">
          <span className="aboutFooterContent">
            <h2>Thank you</h2>
            <h5>Stay With us</h5>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
