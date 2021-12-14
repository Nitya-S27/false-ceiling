import React from "react";
import Handpicked from "../components/Handpicked";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import Spotlight from "../components/Spotlight";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <BestSelling />
      <Spotlight />
      <Handpicked />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
