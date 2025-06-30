import React from "react";

function Table() {
  return (
    <div className="container pb-4">
      <div className="row">
        <nav class="navbar border-bottom" data-bs-theme="light">
          <div class="container-fluid">
            <span>
              <a
                class="navbar-brand"
                href="./Pricing/Equity.jsx"
                className="fs-3 p-2 ps-5"
                style={{ textDecoration: "none" }}
              >
                Equity
              </a>
              <a
                class="navbar-brand"
                href="#"
                className="fs-3 p-2 ps-5"
                style={{ textDecoration: "none" }}
              >
                Currency
              </a>
              <a
                class="navbar-brand"
                href="#"
                className="fs-3 p-2 ps-5"
                style={{ textDecoration: "none" }}
              >
                Commodity
              </a>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Table;
