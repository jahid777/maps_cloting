import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="text-center text-lg-start myFooter">
      {/* <!-- Section: Links  --> */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold mb-4 footerHighlight">
                Company Information
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4 footerHighlight">
                Products
              </h6>
              <p>
                <Link to="/product" className="text-reset">
                  Suits
                </Link>
              </p>
              <p>
                <Link to="/product" className="text-reset">
                  Under Garments
                </Link>
              </p>
              <p>
                <Link to="/product" className="text-reset">
                  Formal Dress
                </Link>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4 footerHighlight">
                Useful links
              </h6>
              <p>
                <Link to="/about" className="text-reset">
                  About us
                </Link>
              </p>
              <p>
                <Link to="/contact_us" className="text-reset">
                  Help
                </Link>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4 footerHighlight">
                Contact
              </h6>
              <p>
                <i className="bi bi-geo-fill"></i> Holding No- 40, Main Road,
                Dhaka Uddan, Haji Dil Mohammad Avenue, Mohammadpur, Dhaka-1207.
              </p>
              <p>
                <i className="bi bi-envelope-open-fill"></i>{" "}
                admin@mapsclothing.com
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +880 19581-55100
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center p-4 bottomFooter">
        © {new Date().getFullYear()} Copyright:
        <span className="text-reset fw-bold"> MAPS CLOTHINGS LTD.</span>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
};

export default Footer;
