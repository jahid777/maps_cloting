import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "./../Shared/Footer/Footer";
import Carousel from "./Sections/Carousel";
import VideoAndContent from "./Sections/VideoAndContent";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <VideoAndContent />
      <Footer />
    </>
  );
};

export default Home;
