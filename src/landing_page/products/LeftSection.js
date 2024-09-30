import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 text-center p-5">
          <img src={imageURL} className="p-5" />
        </div>
        <div className="col-4 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-5">{productDescription}</p>
          <div className="row">
            <div className="col-6">
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <span>→</span>
              </a>
            </div>
            <div className="col-6">
              <a
                href={learnMore}
                style={{textDecoration: "none" }}
              >
                Learn More <span>→</span>
              </a>
            </div>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
