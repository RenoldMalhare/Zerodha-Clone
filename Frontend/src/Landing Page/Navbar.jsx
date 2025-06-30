import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container" style={{ padding: "8px 0 8px 0" }}>
        <Link className="navbar-brand" to={"/"}>
          <img src="./images/logo.svg" alt="Zerodha" style={{ width: "25%" }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-muted" to={"/signup"}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to={"/about"}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-muted" to={"/product"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to={"/support"}>
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to={"#"}>
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
