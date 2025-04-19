import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-white py-4 m-0">
      <hr className="bg-light" />
      <h5 className="fw-bold text-white">Connect with Me</h5>

      <div className="d-flex justify-content-center gap-3 mt-2">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/ruturajj_07/"
          className="text-white fs-4"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>

        {/* Youtube */}
        <a href="" className="text-white fs-4" target="_blank" rel="noreferrer">
          <i className="bi bi-youtube"></i>
        </a>
      </div>

      <hr className="bg-light" />
      <p className="fs-5 m-0 text-white">Create Memories with us 📸</p>
    </footer>
  );
};

export default Footer;
