import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="./images/homeHero.png" alt="Hero Image" className="mb-5" />

        <h1 className="mt-5">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
