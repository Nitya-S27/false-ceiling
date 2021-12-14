import React from "react";
import Qualities from "../components/Qualities";
import Handpicked from "../components/Handpicked";
import About from "../components/About";
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
      <Qualities />
      <Handpicked />
      <About />
      <Footer />
    </>
  );
};

export default Landing;
