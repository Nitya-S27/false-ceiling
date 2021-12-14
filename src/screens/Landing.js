import React from "react";
import Handpicked from "../components/Handpicked";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import Spotlight from "../components/Spotlight";

const Landing = () => {
  return (
    <>
      <BestSelling />
      <Spotlight />
      <Handpicked />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
