import React from "react";

function Pricing() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col pt-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="text-muted mb-3 fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none", fontWeight: "500" }}>
            See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col p-5">
          <div className="row text-muted pt-4">
            <div className="col">
              <span>
                <img
                  src="./images/pricing0.svg"
                  alt="zero"
                  style={{ width: "170%" }}
                  className="pt-2"
                />
              </span>
            </div>
            <div className="col">
              <span>
                <p className="pt-5" style={{ fontSize: "10px" }}>
                  Free account opening
                </p>
              </span>
            </div>
            <div className="col">
              <span>
                <img
                  src="./images/pricing0.svg"
                  alt="zero"
                  style={{ width: "170%" }}
                  className="pt-2"
                />
              </span>
            </div>
            <div className="col">
              <span>
                <p className="pt-5" style={{ fontSize: "10px" }}>
                  Free equity delivery and direct mutual funds
                </p>
              </span>
            </div>
            <div className="col">
              <span>
                <img
                  src="./images/pricing20.svg"
                  alt="20"
                  style={{ width: "170%" }}
                  className="pt-2"
                />
              </span>
            </div>
            <div className="col">
              <span>
                <p className="pt-5" style={{ fontSize: "10px" }}>
                  Intraday and F&O
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
