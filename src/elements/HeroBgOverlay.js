import React from "react";
import "./HeroBgOerlay.scss";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HeroOverlay = () => {
  const statements = [
    {
      id: 1,
      des: "CUSTOMIZED AND ERGOROMIC DESIGN.",
    },
    {
      id: 2,
      des: "DESIGN AND BUILT TURNKEY SOLUTIONS.",
    },
    {
      id: 3,
      des: "STRICT QUALITY COMPILANCE.",
    },
    {
      id: 4,
      des: "AFTER SERVICE SUPPORT",
    },
  ];

  return (
    <div className="overlay-hero">
      <p>
        To create false ceilings that are flexible, smart and interactive. This
        not only ensures good health but also results in a stress-free
        environment and improved productivity.
      </p>
      <Carousel autoplay={0.3} effect="fade" dots={false}>
        {statements.map((description) => {
          return <h2 key={description.id}>{description.des}</h2>;
        })}
      </Carousel>
    </div>
  );
};
export default HeroOverlay;
