import React from "react";
import "./BestSelling.scss";
const BestSelling = () => {
  const bestSellers = [
    {
      id: 1,
      imgSrc: "assets/bestSelling/img1.png",
      title: "Grove King Size Bed",
      currentPrice: "₹34,463",
      oldPrice: "₹37,460",
      emiStart: "₹1,622",
      discount: "8%",
    },
    {
      id: 2,
      imgSrc: "assets/bestSelling/img1.png",
      title: "Grove King Size Bed",
      currentPrice: "₹34,463",
      oldPrice: "₹37,460",
      emiStart: "₹1,622",
      discount: "8%",
    },
    {
      id: 3,
      imgSrc: "assets/bestSelling/img1.png",
      title: "Grove King Size Bed",
      currentPrice: "₹34,463",
      oldPrice: "₹37,460",
      emiStart: "₹1,622",
      discount: "8%",
    },
  ];
  return (
    <div className="bestSellingWrapper">
      <div className="header">Best Selling Products</div>
      <div className="products">
        {bestSellers.map((product) => (
          <div className="productCard" key={product.id}>
            <img
              className="productImage"
              src={product.imgSrc}
              alt="bestsellerphoto"
            />
            <div className="title">{product.title}</div>
            <div className="divider"></div>
            <div className="priceDiv">
              <div className="currentPrice">{product.currentPrice}</div>
              <div className="oldPrice">
                <s>{product.oldPrice}</s>
              </div>
            </div>
            <div className="text">MRP inclusive of all taxes</div>
            <div className="emi">
              EMI Starting From <span className="bold">{product.emiStart}</span>
            </div>
            <div className="discount bold">{product.discount} Off</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
