import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/image3.jpg";
import Footer from "../Elements/Footer";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "", text: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", data);
  };

  return (
    <>
      {/* Section with Yellow Parallax Background */}
      <section
        style={{
          position: "relative",
          zIndex: 0,
          overflow: "hidden",
        //   minHeight: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffeb3b",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
            opacity: "0.7",
          }}
        />

        <div className="container py-5">
          <div className="row align-items-center justify-content-center">
            {/* Image */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                src={image1}
                alt="Visual"
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Form */}
            <div className="col-12 col-md-5">
              <form
                onSubmit={handleSubmit}
                className="p-4 rounded bg-white bg-opacity-75 shadow-sm border"
              >
                <h2 className="text-center mb-4">Get In Touch</h2>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    name="text"
                    value={data.text}
                    onChange={handleChange}
                    placeholder="Query"
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Form;
