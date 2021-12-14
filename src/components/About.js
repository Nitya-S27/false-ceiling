import React, { useState } from "react";
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
      <h1>About Godrej Interio</h1>
      <div>
        <p>
          Godrej Interio is India&quot;s premium furniture brand in both home
          and institutional segments with a strong commitment to sustainability
          and centers of excellence in design, manufacturing and retail.
        </p>
        <p>
          Led by the largest in-house design team in the country in the
          furniture category and awarded with 34 India Design Mark Awards till
          date, Godrej Interio aims to transform spaces with its thoughtfully
          designed furniture to create brighter homes and offices with products
          that have the highest design quotient in aesthetics, functionality and
          technology. With consistent pursuit of excellence and a special focus
          on health and ergonomics, Godrej Interio&quot;s product portfolio
          comprises a massive range in the home, office and other specialized
          applications.
        </p>
        <p>
          Godrej Interio&quot;s commitment to the environment has resulted in
          manufacturing products with lesser carbon footprint. Godrej Interio
          has the widest range of green choices for our customers which not only
          includes products but also services such as green interiors and
          recycling.
        </p>
        <button
          style={display ? { display: "block" } : { display: "none" }}
          onClick={showDiv}
        >
          READ MORE
        </button>
      </div>
      <div style={display ? { display: "none" } : { display: "block" }}>
        <p>
          Currently present in over 430 cities with 52 company owned stores and
          over 800 dealers, Godrej Interio is one of the largest divisions of
          Godrej and Boyce Mfg. Co. Ltd.
        </p>
        <p>
          The brand boasts of noteworthy awards received so far- CII Exim Bank
          Award for Business Excellence 2017, Superbrands 2017-18, Asia&quot;s
          most admired brand 2016, Reader&quot;s Digest Most Trusted Brand 2018
          Gold &#40;Home Furniture &#41; and Reader&quot;s Digest Most Trusted
          Brand 2018 Gold &#40;Modular Kitchens &#41;.
        </p>
        <button onClick={hideDiv}>READ LESS</button>
      </div>
    </div>
  );
};

export default About;
