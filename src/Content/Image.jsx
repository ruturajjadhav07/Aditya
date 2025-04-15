import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Image1 from "../assets/image.jpg";

const Image = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container py-5 mt-2 mb-2" id="about">
      <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
        {/* Left column */}
        <div className="mt-4 d-flex flex-column gap-4">
          <img
            src={Image1}
            alt="Main"
            className="img-fluid rounded"
            data-aos="fade-right"
            style={{ width: "100%", maxWidth: "600px" }}
          />
          <img
            src={Image1}
            alt="Portrait 1"
            className="img-fluid rounded align-self-end"
            data-aos="fade-right"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>

        {/* Right column */}
        <div className="d-flex flex-column gap-4">
          <img
            src={Image1}
            alt="Portrait 2"
            className="img-fluid rounded"
            data-aos="fade-left"
            style={{ width: "100%", maxWidth: "400px" }}
          />
          <img
            src={Image1}
            alt="Portrait 3"
            className="img-fluid rounded"
            data-aos="fade-left"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
