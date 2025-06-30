import React from "react";

function Investment() {
  return (
    <>
      <div className="container">
        <h2 className="p-5" style={{ textAlign: "center" }}>
          Investment options with Zerodha demat account
        </h2>
        <div className="row mt-5">
          <div className="col-6">
            <span
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <img
                src="./images\stocks-acop.svg"
                alt="Stocks"
                style={{ width: "150px" }}
              />
              <div>
                <h2>Stocks</h2>
                <p>Invest in all exchange-listed securities</p>
              </div>
            </span>
          </div>
          <div className="col-6">
            <span
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <img
                src="./images\mf-acop.svg"
                alt="Mutual Funds"
                style={{ width: "150px" }}
              />
              <div>
                <h2>Mutual funds</h2>
                <p>Invest in commission-free direct mutual funds</p>
              </div>
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-6">
            <span
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <img
                src="./images\ipo-acop.svg"
                alt="Stocks"
                style={{ width: "150px" }}
              />
              <div>
                <h2>IPO</h2>
                <p> Apply to the latest IPOs instantly via UPI</p>
              </div>
            </span>
          </div>
          <div className="col-6">
            <span
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <img
                src="./images\fo-acop.svg"
                alt="Stocks"
                style={{ width: "150px" }}
              />
              <div>
                <h2>Futures & options</h2>
                <p>
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </span>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-primary fs-5 mt-4"
            style={{ width: "250px", margin: " auto" }}
          >
            Explore Investments
          </button>
        </div>
      </div>
    </>
  );
}

export default Investment;
