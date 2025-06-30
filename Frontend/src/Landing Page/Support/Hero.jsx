import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5 ms-5 me-5" id="supportWrapper">
        <h1 className="fs-4">Support Portal</h1>
        <a href="" className="fs-5">
          Track ticket
        </a>
      </div>
      <div className="row ps-4 ms-5 me-5">
        <div className="col-6">
          <h1 className="fs-4 pe-5 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg:how do i activate F&O, why is my order getting rejected..."
            id="input"
          />
          <div className="pt-3 mb-5 pb-5">
            <a href="">Track account opening </a>
            <a href="" className="ps-4">
              Track segment activation
            </a>
            <a href="" className="ps-4">
              Intraday margins
            </a>
            <br />
            <a href="" className="my-5">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-6">
          <h1 className="fs-4 pt-5">Featured</h1>
          <ol>
            <li className="pt-3">
              <a href="">Connectivity issue - Support telephone line</a>
            </li>
            <li className="pt-4">
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
