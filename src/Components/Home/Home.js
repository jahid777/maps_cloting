import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "./../Shared/Footer/Footer";
import Carousel from "./Sections/Carousel";
import VideoAndContent from "./Sections/VideoAndContent";
import TeamMember from "./Sections/TeamMember";
import Products from "./Sections/Products";
import CompanySlider from "./Sections/CompanySlider";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <VideoAndContent />
      <CompanySlider />
      <Products />
      <TeamMember />
      <Footer />
    </>
  );
};

export default Home;
