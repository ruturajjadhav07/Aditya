import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Team from "./Team";

const About = () => {
  return (
    <div className="container py-5">
      <div className="bg-white p-4 ">
        <h1
          className=""
          style={{
            color: "#263149",
            fontSize: "clamp(2.5rem, 10vw, 3rem)",
            textDecoration: "underline",
          }}
        >
          About
        </h1>
        <h3 className="text-dark">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          accusamus magni, blanditiis rem quae dolore aspernatur, ea veritatis
          eveniet quibusdam omnis eum labore consectetur atque ut temporibus
          nam! Ad, neque. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. At veritatis placeat earum corporis sint doloribus quasi magnam
          adipisci laudantium eveniet modi quaerat ullam velit, voluptas id
          corrupti sunt, ut deserunt?
        </h3>

        <div className="py-4 mt-2">
          <Team />
        </div>
      </div>
    </div>
  );
};

export default About;
