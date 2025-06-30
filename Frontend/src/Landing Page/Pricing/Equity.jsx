import React from "react";

function Equity() {
  return (
    <div className="container">
      <table class="table table-borderless border">
        <thead>
          <tr className="border" style={{ fontWeight: "500", padding: "20px" }}>
            <td scope="col"></td>
            <td scope="col" style={{ padding: "12px" }}>
              Equity delivery
            </td>
            <td scope="col">Equity intraday </td>
            <td scope="col">F&O - Futures</td>
            <td scope="col">F&O - Options</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage </td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>0.1% on buy & sell</td>
            <td> 0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td>
              <li>
                0.125% of the intrinsic value on options that are bought and
                exercised
              </li>
              <li> 0.1% on sell side (on premium)</li>
            </td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00173% <br />
              BSE: 0
            </td>
            <td>
              NSE: 0.03503% (on premium) <br />
              BSE: 0.0325% (on premium)
            </td>
          </tr>

          <tr>
            <td>GST </td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>SEBI charges </td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
      <p className="fs-5 text-center pt-3">
        <a href="" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
}

export default Equity;
