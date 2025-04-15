import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Image1 from "../assets/image.jpg";

const Image = () => {
  return (
    <div className="container py-5 mt-2 mb-2" id="about">
      <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
        {/* Left column */}
        <div className="mt-4 d-flex flex-column gap-4">
          <img
            src={Image1}
            alt="Main"
            className="img-fluid rounded"
            style={{ width: "100%", maxWidth: "600px" }}
          />
          <img
            src={Image1}
            alt="Portrait 1"
            className="img-fluid rounded align-self-end"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>

        {/* Right column */}
        <div className="d-flex flex-column gap-4">
          <img
            src={Image1}
            alt="Portrait 1"
            className="img-fluid rounded"
            style={{ width: "100%", maxWidth: "400px" }}
          />
          <img
            src={Image1}
            alt="Portrait 2"
            className="img-fluid rounded"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
