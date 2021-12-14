import React from "react";
import Handpicked from "../components/Handpicked";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";

const Landing = () => {
  return (
    <>
      <BestSelling />
      <Handpicked />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
