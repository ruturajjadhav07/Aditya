import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image2 from "../assets/image2.jpg";
const Team = () => {
  return (
    <section>
      <div>
        <div className="container py-2">
          <h1
            className="mb-2"
            style={{
              color: "#263149",
              fontSize: "clamp(2.5rem, 10vw, 3rem)",
              textDecoration: "underline",
            }}
          >
            Team
          </h1>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src={image2}
                alt="team-1"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover", height: "250px" }}
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src={image2}
                alt="team-2"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover", height: "250px" }}
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src={image2}
                alt="team-3"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover", height: "250px" }}
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src={image2}
                alt="team-4"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
