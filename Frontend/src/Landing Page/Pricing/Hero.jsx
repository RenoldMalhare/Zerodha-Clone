import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 m-5">
        <h1>Charges</h1>
        <p className="p-2 fs-4" style={{ color: "grey" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row text-center pb-5 mb-5">
        <div className="col">
          <img src="./images/pricing0.svg" alt="pricing0" className="p-5" />
          <h1 className="fs-2 pb-3">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col">
          <img src="./images/pricing20.svg" alt="pricing20" className="p-5" />
          <h1 className="fs-2 pb-3">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across <br />
            equity, currency, and commodity trades. Flat
            <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="./images/pricing0.svg" alt="pricing0" className="p-5" />
          <h1 className="fs-2 pb-3">Free direct MF</h1>
          <p>
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
