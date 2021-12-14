import React from "react";
import { places, footerData } from "./footerData";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="left-div">
        <div className="left-top">
          {footerData.map((dataElement) => (
            <div>
              <h1>{dataElement.heading}</h1>
              {dataElement.links.map((elementLink) => (
                <a href={elementLink.link}>{elementLink.title}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="left-bottom">
          <h1>Visit Us In</h1>
          {places.map((city) => (
            <span>{city}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
