import React, { useState } from "react";
import "./Product.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import { AllProducts } from "./ProductData";
import { useEffect } from "react";

const Product = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    setAllProduct(AllProducts);
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid ProductPage">
        {/* <!-- Gallery --> */}
        <div className="row">
          <span className="productPageHeading">
            <p>Our Products </p>
            <hr className="productPageHr" />
          </span>

          {allProduct.map((singleProduct) => (
            <div key={singleProduct?.id} className="col-md-3 productBody">
              <img
                src={singleProduct?.img}
                className="w-100 mb-4"
                alt="Waves at Sea"
              />
            </div>
          ))}
        </div>
        {/* <!-- Gallery --> */}
      </div>
      <Footer />
    </>
  );
};

export default Product;
