import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <h2 className="text-center mt-5">The Zerodha Universe</h2>
        <p className="text-center mt-5 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mb-5">
        {/* Individual row 1*/}
        <div className="col-4 p-3">
          <div className="p-2">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ maxWidth: "100px" }}
            />
            <br></br>
            <br></br>
            <span class="text-12 text-light-grey">
              Our asset management venture <br></br>that is creating simple and
              transparent index <br></br>funds to help you save for your goals.
            </span>
          </div>
          <div className="mt-5 p-3">
            <img
              src="media/images/streakLogo.png"
              style={{ maxWidth: "100px" }}
            />
            <br></br>
            <br></br>
            <span class="text-12 text-light-grey">
              Systematic trading platform <br></br>that allows you to create and
              backtest <br></br>strategies without coding.
            </span>
          </div>
        </div>
        {/* Individual row 2*/}
        <div className="col-4 p-3">
          <div className="p-2 mb-2">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ maxWidth: "100px" }}
            />
            <br></br>
            <br></br>
            <span class="text-12 text-light-grey sensibull-desc">
              Options trading platform that lets you <br></br>create strategies,
              analyze positions, and examine <br></br>data points like open
              interest, FII/DII, and more.
            </span>
          </div>
          <div className="mt-5 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ maxWidth: "100px" }}
            />
            <br></br>
            <br></br>
            <span className="text-12 text-light-grey">
              Thematic investing platform <br></br>that helps you invest in
              diversified <br></br>that helps you invest in diversified{" "}
              <br></br>
              baskets of stobaskets of stocks on ETFs.
            </span>
          </div>
        </div>
        {/* Individual row 3*/}
        <div className="col-4 p-3">
          <div className="p-2">
            <img
              src="media/images/dittoLogo.png"
              style={{ maxWidth: "80px" }}
            />
            <br></br>
            <br></br>
            <span class="text-12 text-light-grey">
              Personalized advice on life <br></br>and health insurance. No spam{" "}
              <br></br>and no mis-selling.
            </span>
          </div>
          <div className="mt-4 p-3">
            <img
              src="media/images/goldenpiLogo.png"
              style={{ maxWidth: "100px" }}
            />
            <br></br>
            <br></br>
            <span className="text-12 text-light-grey">
              Thematic investing platform <br></br>that helps you invest in
              diversified <br></br>that helps you invest in diversified{" "}
              <br></br>
              baskets of stobaskets of stocks on ETFs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
