import React from "react";
import "./../Home.css";

const Products = () => {
  return (
    <div className="container-fluid homeProduct">
      {/* <!-- Gallery --> */}
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://i.ibb.co/P4JMR61/calvin-k.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="https://i.ibb.co/vYVmqD1/black-coat.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://i.ibb.co/55s2Rb7/white-coat.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="https://i.ibb.co/jVGBgdF/women-lengeric.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://i.ibb.co/LvbVQ4P/mens-lengeric.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://i.ibb.co/YfsqcS5/blue-coat.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
      {/* <!-- Gallery --> */}
    </div>
  );
};

export default Products;
