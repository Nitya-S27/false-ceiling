import React from "react";
import "./Handpicked.scss";
const Handpicked = () => {
  return (
    <div className="handpickedWrapper">
      <div className="left">
        <div className="top">
          <div className="titleDiv">
            <img
              src="assets/handpicked/logo.png"
              alt="logo"
              className="handpickedLogo"
              style={{ width: "80px" }}
            />
            <div className="title">Handpicked For You</div>
            <div className="para">
              Here are a few products we think you'll love
            </div>
          </div>
          <div className="productDiv">
            <img
              className="productImg"
              src="assets/handpicked/img1.png"
              alt="product1"
            />
          </div>
        </div>
        <div className="bottom">
          <img
            className="productImg"
            src="assets/handpicked/img2.png"
            alt="product2"
          />
        </div>
      </div>
      <div className="right">
        <img
          className="productImg"
          src="/assets/handpicked/img3.png"
          alt="product3"
        />
      </div>
    </div>
  );
};

export default Handpicked;
