import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "./../Shared/Footer/Footer";
import Carousel from "./Sections/Carousel";
import VideoAndContent from "./Sections/VideoAndContent";
import TeamMember from "./Sections/TeamMember";
import Products from "./Sections/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <VideoAndContent />
      <Products />
      <TeamMember />
      <Footer />
    </>
  );
};

export default Home;
