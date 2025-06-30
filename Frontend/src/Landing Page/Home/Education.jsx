import React from "react";

function Education() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <img src="./images/education.svg" alt="Education" />
        </div>
        <div className="col pt-5">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p className="text-muted mb-3 fs-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            className="pb-4"
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            Varsity &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mt-4 mb-3 fs-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none", fontWeight: "500" }}>
            TradingQ&A &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
