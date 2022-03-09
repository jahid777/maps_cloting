import React from "react";
import "../Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="container-fluid companyImagesSection">
      <h1 className="text-center">Our Production</h1>
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/ccG3FSB/OfficeC1.jpg"
            alt=""
            className="img-fluid productionImage"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/Xy250WR/OfficeC2.jpg"
            alt=""
            className="img-fluid productionImage"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/6gk4PbW/OfficeC3.jpg"
            alt=""
            className="img-fluid productionImage"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/VYcLjsj/OfficeC4.jpg"
            alt=""
            className="img-fluid productionImage"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CompanySlider;
