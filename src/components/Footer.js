import React, { useState } from "react";
import "./Footer.scss";
import { places, footerData, items } from "../elements/footerData";
// import { AiOutlineArrowRight, AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your email is : " + email);
    setEmail("");
  };

  return (
    <div>
      <div className="footerWrapper">
        <div className="leftDiv">
          <div className="logoDiv">
            <img src="/assets/logo-white.svg" alt="logo" />
          </div>
          <div className="leftTop">
            {footerData.map((dataElement) => (
              <div className="leftTop__info">
                <h1>{dataElement.heading}</h1>
                <div className="linksDiv__top">
                  {dataElement.links.map((elementLink) => (
                    <a href={elementLink.link}>{elementLink.title}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="leftBottom">
            <h1>Visit Us In</h1>
            <div className="linksDiv__bottom">
              {places.map((city) => (
                <a href="#" target="_blank">
                  {city}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <div className="rightTop">
            <h1>Stay tuned to all our latest news</h1>
            <p>Connect with ws through - </p>
            {/* <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Your email"
              ></input>
              <button type="submit">
                <AiOutlineArrowRight />
              </button> */}
          </div>
          <div className="socialIcons">
            <RiWhatsappFill className="icon" />
            <ImFacebook className="icon" />
            <TiSocialInstagram className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
          <div className="rightBottom">
            <h1>Check Out Our</h1>
            <div className="linksDiv__bottom">
              {items.map((item) => (
                <a href="#" target="_blank">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; Godrej Interio Copyright {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
