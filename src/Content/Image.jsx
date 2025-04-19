import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Image1 from "../assets/image.jpg";
import About from "./About";

const Image = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="container py-3 mt-2" id="about">
        <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
          {/* Left column */}
          <div className="mt-4 d-flex flex-column gap-4">
            <img
              src={Image1}
              alt="Main"
              className="img-fluid rounded"
              data-aos="fade-down"
              style={{ width: "100%", maxWidth: "600px" }}
            />
            <img
              src={Image1}
              alt="Portrait 1"
              className="img-fluid rounded align-self-end"
              data-aos="fade-left"
              data-aos-delay="1800"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>

          {/* Right column */}
          <div className="d-flex flex-column gap-4">
            <img
              src={Image1}
              alt="Portrait 2"
              className="img-fluid rounded"
              data-aos="fade-right"
              data-aos-delay="1200"
              style={{ width: "100%", maxWidth: "400px" }}
            />
            <img
              src={Image1}
              alt="Portrait 3"
              className="img-fluid rounded"
              data-aos="fade-down"
              data-aos-delay="1500"
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Image;
