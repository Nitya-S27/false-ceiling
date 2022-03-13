import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./About.scss";

const About = () => {
  const [display, setDisplay] = useState(true);
  const showDiv = () => {
    setDisplay(false);
  };
  const hideDiv = () => {
    setDisplay(true);
  };

  return (
    <div className="about">
      <div>
        <h1>About Us</h1>
        <BsPersonCircle className="icon" />
        <h3>Digumber Singh</h3>
        <p>
          Digumber Singh is not only one, he is a tree of false ceiling
          installation contractors for past 30 years. He is the most decorated
          contractor of false ceiling. He is well-known for completing progress
          on time and successfully dealing with various issues of false ceiling
          and creation to give excellent service.
        </p>
        <button
          style={display ? { display: "block" } : { display: "none" }}
          onClick={showDiv}
        >
          READ MORE
        </button>
      </div>
      <div style={display ? { display: "none" } : { display: "block" }}>
        <h2>About Our Firm</h2>
        <p>
          Classic false ceiling solutions is a firm specialized in false
          ceiling, false flooring. acoustical installments etc. in commercial,
          residential or industrial buildings or everywhere where it need.
        </p>
        <p>
          Our products are an integral, functional, design and sustainable
          component of modern and emotional architecture. We all have dreamt of
          living in a house that is the epitome of luxury and aesthetic. The
          easiest way to achieve this, is by installing a false ceiling. If you
          want to add more elegance feel in your home/office. You can take a
          chance by adding various trending false ceiling in your ceiling. False
          Ceiling helps to electrify your ceiling with latest stunning designs
        </p>

        <button onClick={hideDiv}>READ LESS</button>
      </div>
    </div>
  );
};

export default About;
