import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5  mt-5 mb-5">
        <h1 className="text-center">Pricing</h1>
        <h5 className="text-muted text-center mt-3">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
      </div>
      <div className="row border-top border-bottom  p-5 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" className="p-4" />
          <h3>Free equity delivery</h3>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" className="p-4" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingMF.svg" className="p-4" />
          <h3>Free direct MF</h3>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
