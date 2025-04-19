import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Team from "./Team";
import Form from "./Form";
const About = () => {
  return (
    <div>
      <div className="container py-2">
        <div className="bg-white p-3">
          <h1
            style={{
              color: "#263149",
              fontSize: "clamp(2.5rem, 10vw, 3rem)",
              textDecoration: "underline",
            }}
          >
            About
          </h1>
          <h3 className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            vitae rem velit, nisi culpa voluptatibus porro nobis? Quisquam
            doloremque quia fugiat possimus! Praesentium cumque omnis a
            exercitationem nobis possimus tenetur.
          </h3>
        </div>
        <Team />
      </div>
      <Form/>
    </div>
  );
};

export default About;
