import React from "react";

function Charge() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3 pb-2">Charges for account opening</h1>
      </div>
      <div className="row pb-5">
        <table class="table table-borderless border">
          <thead>
            <tr
              className="border"
              style={{ fontWeight: "500", padding: "20px" }}
            >
              <td scope="col">Type of account </td>
              <td scope="col" style={{ padding: "12px" }}>
                Charges
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account </td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>TNRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only){" "}
              </td>
              <td> ₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <h1 className="fs-3 pb-2">Charges for optional value added services</h1>
      </div>
      <div className="row pb-5">
        <table class="table table-borderless border">
          <thead>
            <tr
              className="border"
              style={{ fontWeight: "500", padding: "20px" }}
            >
              <td scope="col">Service </td>
              <td scope="col" style={{ padding: "12px" }}>
                Billing
              </td>
              <td> Frquency Charges</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape </td>
              <td> Monthly / Annual </td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction </td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect </td>
              <td>Monthly</td>
              <td>Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charge;
