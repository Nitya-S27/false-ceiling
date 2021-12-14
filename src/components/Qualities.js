import React from "react";
import "./Qualities.scss";
import { GiSofa, GiMineTruck } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";

const Qualities = () => {
  const features = [
    {
      image: <GiSofa className="icon" />,
      title: "High Quality Products",
      des: "Commitetd to crafting products from the best quality materials to give you fruniture that will last a lifetime and more.",
    },
    {
      image: <FaMapMarkedAlt className="icon" />,
      title: "Large Store Network",
      des: "We have over 400 stores across 84 cities. Visit us to experience our product first hand or interact with our team.",
    },
    {
      image: <GiMineTruck className="icon" />,
      title: "Free Delivery & Installation",
      des: "We will deliver your furniture to the doorstep and will installit by our technician at no extra cost.",
    },
  ];

  return (
    <div className="qualitiesWrapper">
      <div className="qualities__statement">
        <p>
          We at <br></br> <strong>Godrej Interio</strong> promise you
        </p>
      </div>
      <div className="qualities__des">
        {features.map((feature) => (
          <div>
            {feature.image}
            <h2>{feature.title}</h2>
            <p>{feature.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualities;
