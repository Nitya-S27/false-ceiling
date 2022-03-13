import React from "react";
import "./Qualities.scss";
import { HiLightBulb } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { GoGraph } from "react-icons/go";
// import { GiSofa, GiMineTruck } from "react-icons/gi";
// import { FaMapMarkedAlt } from "react-icons/fa";

const Qualities = () => {
  const features = [
    {
      image: <HiLightBulb className="icon" />,
      title: "One Step Solution",
      des: "Commitetd to crafting products from the best quality materials to give you fruniture that will last a lifetime and more.",
    },
    {
      image: <MdGroups className="icon" />,
      title: "On-Site meetings",
      des: "We have over 400 stores across 84 cities. Visit us to experience our product first hand or interact with our team.",
    },
    {
      image: <GoGraph className="icon" />,
      title: "Professional Project Management",
      des: "We will deliver your furniture to the doorstep and will installit by our technician at no extra cost.",
    },
  ];

  return (
    <div className="qualitiesWrapper">
      <div className="qualities__statement">
        <h1>Why Us?</h1>
        <p>
          Our team comprises of experienced contractors and site managers
          including carefully selected and well trained workmen to provide A+
          serivice of false ceiling design and installation across India.
          {/* We at <br></br> <strong>Godrej Interio</strong> promise you */}
        </p>
      </div>
      <div className="qualities__des">
        {features.map((feature) => (
          <div>
            {feature.image}
            <h2>{feature.title}</h2>
            {/* <p>{feature.des}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualities;
