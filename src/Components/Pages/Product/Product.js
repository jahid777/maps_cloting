import React, { useState } from "react";
import "./Product.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import { AllProducts } from "./ProductData";

const Product = () => {
  const [allProduct, setallProduct] = useState(AllProducts);
  return (
    <>
      <Header />
      <div className="container-fluid ProductPage">
        {/* <!-- Gallery --> */}
        <div class="row my-5">
          {allProduct.map((singleProduct) => (
            <div className="col-md-3">
              <img
                src={singleProduct?.img}
                class="w-100 mb-4"
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
