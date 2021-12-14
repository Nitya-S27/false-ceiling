import React from "react";
import "./Spotlight.scss";
const Spotlight = () => {
  const spotlights = [
    {
      id: 1,
      imgSrc: "assets/spotlight/img1.png",
      title: "Work From Home Range",
      products: "69",
      price: "₹37,460",
    },
    {
      id: 2,
      imgSrc: "assets/spotlight/img1.png",
      title: "Work From Home Range",
      products: "69",
      price: "₹37,460",
    },
    {
      id: 3,
      imgSrc: "assets/spotlight/img1.png",
      title: "Work From Home Range",
      products: "69",
      price: "₹37,460",
    },
    {
      id: 4,
      imgSrc: "assets/spotlight/img1.png",
      title: "Work From Home Range",
      products: "69",
      price: "₹37,460",
    },
  ];
  return (
    <div className="spotlightWrapper">
      <div className="header">In the Spotlight</div>
      <div className="products">
        {spotlights.map((product) => (
          <div className="productCard" key={product.id}>
            <img
              className="productImage"
              src={product.imgSrc}
              alt="spotlightphoto"
            />
            <div className="title">{product.title}</div>
            <div className="textDiv">
              <div className="price">
                Starting from{" "}
                <span style={{ fontWeight: 500 }}>{product.price}</span>
              </div>
              <div className="count">{product.products} Products</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
