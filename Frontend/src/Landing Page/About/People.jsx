import React from "react";

function People() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div className="row pb-5 mb-5">
        <div className="col text-center">
          <img
            src="images/nithinKamath.jpg"
            alt="NithinPhoto"
            style={{ width: "60%", borderRadius: "100%" }}
          />
          <h5 className="p-4">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div
          className="col p-3"
          style={{ lineHeight: "1.7em", fontSize: "1.1em" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
          </p>
          <p>
            Today, Zerodha has changed the landscape of the Indian broking
            industry. He is a member of the SEBI Secondary Market Advisory
            Committee (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row pt-5 mb-5 pb-5 text-center">
        <div className="col">
          <img
            src="./images/Nikhil.jpg"
            alt="Nikhil"
            style={{ width: "70%", borderRadius: "100%" }}
          />
          <h5>Nikhil Kamath </h5>
          <p>Co-founder & CFO</p>
        </div>

        <div className="col">
          <img
            src="./images/Venu.jpg"
            alt="Nikhil"
            style={{ width: "70%", borderRadius: "100%" }}
          />
          <h5>Dr. Kailash Nadh </h5>
          <p>CTO</p>
        </div>

        <div className="col">
          <img
            src="./images/Kailash.jpg"
            alt="Nikhil"
            style={{ width: "70%", borderRadius: "100%" }}
          />
          <h5>Venu Madhav </h5>
          <p>COO</p>
        </div>
      </div>
    </div>
  );
}

export default People;
