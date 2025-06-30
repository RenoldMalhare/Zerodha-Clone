import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
function SignUpField() {
  return (
    <div className="container mt-1 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="./images\account_open.svg" alt="Account Open" />
        </div>
        <div className="col-6 ps-5 mt-3">
          {/* <div>
            <h2 className="pt-4">Signup now</h2>
            <p className="mb-3 fs-5" style={{ color: "gray" }}>
              Or track your existing application
            </p>
            <input
              className="fs-5"
              placeholder="Enter your mobile number"
              type="number"
              style={{ height: "50px", width: "400px" }}
            />
            <Link class="active text-muted " to={"/login"}>
              <button
                className="btn btn-primary fs-5 mt-4"
                style={{ width: "250px", margin: " auto", height: "50px" }}
              >
                Get OTP
              </button>
            </Link>

            <p className="mt-5 small">
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
          </div> */}
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpField;
