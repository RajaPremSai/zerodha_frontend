import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-5">{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <span>→</span>
          </a>
        </div>
        <div className="col-7 text-center">
          <img src={imageURL} className="p-5" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
