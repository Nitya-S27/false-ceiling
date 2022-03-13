import React from "react";
import "antd/dist/antd.css";
import "./HeroBg.scss";
import HeroOverlay from "../elements/HeroBgOverlay";
import { Carousel } from "antd";

const HeroBg = () => {
  const images = [
    {
      id: 1,
      src: "assets/A.jpg",
    },
    {
      id: 2,
      src: "assets/B.jpg",
    },
    {
      id: 3,
      src: "assets/C.jpg",
    },
    {
      id: 4,
      src: "assets/D.jpg",
    },
  ];

  return (
    <div className="carousel">
      <Carousel effect="fade" dots={true}>
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.src} alt="images" />
            </div>
          );
        })}
      </Carousel>
      <div className="container-background">
        <HeroOverlay />
      </div>
    </div>
  );
};
export default HeroBg;
