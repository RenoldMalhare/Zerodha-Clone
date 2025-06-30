import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center p-5 ">
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="mt-3" style={{ fontSize: "1.1em" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="container text-center">
        <div className="row text-muted" style={{ fontSize: "12px" }}>
          <div className="col text-center">
            <img
              src="./images/zerodhaFundhouse.png"
              alt="zerodhafundhouse"
              style={{ width: "50%" }}
              className="pt-4"
            />
            <p className="pt-4">
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>
          <div className="col text-center">
            <img
              src="./images/sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ width: "70%" }}
              className="pt-4"
            />
            <p className="pt-4">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine
              <br /> data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col text-center">
            <img
              src="./images/tijori.svg"
              alt="tijori"
              style={{ width: "45%" }}
              className="pt-4"
            />
            <p className="pt-4">
              Investment research platform <br />
              that offers detailed insights on stocks,
              <br /> sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row text-muted" style={{ fontSize: "12px" }}>
          <div className="col text-center">
            <img
              src="./images/streak-logo.png"
              alt="streakLogo"
              style={{ width: "50%" }}
              className="pt-4"
            />
            <p className="pt-4">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>
          <div className="col text-center">
            <img
              src="./images/smallcaseLogo.png"
              alt="smallcaseLogo"
              className="pt-4"
            />
            <p className="pt-4">
              Thematic investing platform
              <br /> that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col text-center">
            <img
              src="./images/dittoLogo.png"
              alt="dittoLogo"
              style={{ width: "40%" }}
              className="pt-4"
            />
            <p className="pt-4">
              Personalized advice on life <br />
              and health insurance. No spam
              <br /> and no mis-selling.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center p-5">
        <button
          className="btn btn-primary fs-5"
          style={{ width: "200px", margin: " auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
