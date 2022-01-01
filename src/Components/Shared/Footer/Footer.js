import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer class="text-center text-lg-start myFooter">
      {/* <!-- Section: Links  --> */}
      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 class="text-uppercase fw-bold mb-4 footerHighlight">
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
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4 footerHighlight">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset">
                  Suits
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Under Garments
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Formal Dress
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4 footerHighlight">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4 footerHighlight">
                Contact
              </h6>
              <p>
                <i class="bi bi-geo-fill"></i> New York, NY 10012, US
              </p>
              <p>
                <i class="bi bi-envelope-open-fill"></i> info@example.com
              </p>
              <p>
                <i class="bi bi-telephone-fill"></i> + 01 234 567 88
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div class="text-center p-4 bottomFooter">
        © {new Date().getFullYear()} Copyright:
        <span class="text-reset fw-bold"> MAPS CLOTHINGS LTD.</span>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
};

export default Footer;
