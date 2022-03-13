import React from "react";
import HeroBg from "../components/HeroBg";
import Qualities from "../components/Qualities";
import About from "../components/About";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import Spotlight from "../components/Spotlight";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroBg />
      <BestSelling />
      <Qualities />
      <Spotlight />
      <About />
      <Footer />
    </>
  );
};

export default Landing;
