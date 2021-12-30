import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="container my-5 py-3 contactMain">
        <div className="row">
          <div className="col-lg-12 text-center mb-3 contactHead">
            <h3 className="mb-3">Contact us</h3>

            <p>
              <i className="bi bi-geo-alt-fill"></i>
              <span className="contact-text">
                Holding No- 40, Main Road, Dhaka Uddan, Haji Dil Mohammad
                Avenue, Mohammadpur, Dhaka-1207
              </span>
            </p>

            <div className="justify-content-center emailPhone">
              <p>
                <i className="bi bi-envelope-fill"></i>{" "}
                mapsclothingerc2021@gmail.com
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +8801958155100
              </p>
            </div>
            <hr className="ContactHr"></hr>
          </div>
          <div className="col-md-6 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.7737132736434!2d90.34352570535707!3d23.763513067261997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08270542263%3A0x4b906a112628c08c!2sHaji%20Dil%20Mohammad%20Ave%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sro!2sro!4v1640840338158!5m2!1sro!2sro"
              title="map"
              loading="lazy"
              style={{ width: "100%", height: "450px" }}
            ></iframe>
          </div>
          <form className="col">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="inputName"
                placeholder="Your name"
                name="name"
                required
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="inputAddress">Phone Number</label>
              <input
                type="number"
                className="form-control mt-2"
                id="inputAddress"
                placeholder="Your phone"
                name="number"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control mt-2"
                id="inputEmail"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                type="text"
                className="form-control mt-2"
                id="inputMessage"
                placeholder="Type your message........"
                name="message"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn mt-4 mapsButton">
                Send
              </button>
            </div>
            <div>
              <h4
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "12px",
                }}
              >
                {message}
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
