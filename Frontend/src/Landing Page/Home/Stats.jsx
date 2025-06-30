import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="fs-5 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h4 className="fs-4">No spam or gimmicks</h4>
          <p className="fs-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="">Our philosophies.</a>
          </p>
          <h4 className="fs-4">The Zerodha universe</h4>
          <p className="fs-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="fs-4">Do better with money</h4>
          <p className="fs-5 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 text-center">
          <img
            src="./images/ecosystem.png"
            alt="Investing Ecosystem"
            style={{ width: "100%" }}
            className="mb-5"
          />
          <a
            href=""
            className="mx-5"
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            Explore our products <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a href="" style={{ textDecoration: "none", fontWeight: "500" }}>
            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="text-center m-5">
        <img src="./images/pressLogos.png" alt="Press Logos" />
      </div>
    </div>
  );
}

export default Stats;
