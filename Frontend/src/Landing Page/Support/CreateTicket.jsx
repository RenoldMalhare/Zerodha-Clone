import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <p className="text-muted fs-4">
          To create a ticket, select a relevant topic
        </p>
      </div>
      <div className="row">
        <div className="col">
          <p className=" fs-5">
            <i class="fa-solid fa-circle-plus"></i>&nbsp; Account Opening
          </p>
          <div className="ps-4" style={{ lineHeight: "2.2" }}>
            <a href="" style={{ textDecoration: "none" }}>
              Resident individual
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Minor
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Non Resident Indian (NRI)
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Company, Partnership, HUF and LLP
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Glossary
            </a>
            <br />
          </div>
        </div>
        <div className="col">
          <p className=" fs-5">
            <i class="fa-regular fa-user"></i>&nbsp; Your Zerodha Account
          </p>
          <div className="ps-4" style={{ lineHeight: "2.2", fontSize: "15px" }}>
            <a href="" style={{ textDecoration: "none" }}>
              Your Profile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Account modification
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Nomination
              <br />
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Transfer and conversion of securities
            </a>
          </div>
        </div>
        <div className="col">
          <p className=" fs-5">
            <i class="fa-solid fa-chart-simple"></i>&nbsp; Kite
          </p>
          <div className="ps-4" style={{ lineHeight: "2.2" }}>
            <a href="" style={{ textDecoration: "none" }}>
              IPO
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Trading FAQs
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Margin Trading Facility (MTF) and Margins
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Charts and orders
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Alerts and Nudges
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              General
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5 pb-5">
        <div className="col">
          <p className=" fs-5">
            <i class="fa-solid fa-money-bills"></i>&nbsp; Funds
          </p>
          <div className="ps-4" style={{ lineHeight: "2.2" }}>
            <a href="" style={{ textDecoration: "none" }}>
              Add money
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Withdraw money
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Add bank accounts
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              eMandates
            </a>
          </div>
        </div>
        <div className="col">
          <p className=" fs-5">
            <i class="fa-solid fa-timeline"></i>&nbsp; Console
          </p>
          <div className="ps-4" style={{ lineHeight: "2.2", fontSize: "15px" }}>
            <a href="" style={{ textDecoration: "none" }}>
              Portfolio
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Corporate actions
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Funds statement
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Reports
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Profile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Segments
            </a>
          </div>
        </div>
        <div className="col">
          <p className=" fs-5">
            <i class="fa-solid fa-coins"></i>&nbsp; Coin
          </p>
          <div className="ps-4" style={{ lineHeight: "2.2" }}>
            <a href="" style={{ textDecoration: "none" }}>
              Understanding mutual funds and Coin
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Coin app
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Coin web
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Transactions and reports
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              National Pension Scheme (NPS)
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
