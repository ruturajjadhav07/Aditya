import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image from "../assets/image2.jpg";
import Image from "./Image";

const Main = () => {
  return (
    <div className="container-fluid p-0">
      <div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${image})`,
            backgroundAttachment: "fixed", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 2,
          }}
        ></div>

        {/* Content */}
        <div
          className="position-relative d-flex justify-content-center align-items-center min-vh-100"
          style={{ zIndex: 3 }}
        >
          <div className="row w-100 text-center px-3">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
              <h1
                className="fw-bold"
                style={{
                  color: "#263149",
                  fontSize: "clamp(2.5rem, 10vw, 6rem)",
                }}
              >
                Photography
              </h1>
              <p className="my-4 fs-5" style={{ color: "#263149" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="btn border border-dark-subtle rounded shadow-sm fs-6 px-4 py-2">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image />
    </div>
  );
};

export default Main;
