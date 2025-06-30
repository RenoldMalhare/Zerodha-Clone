import React from "react";

function RightSection({ imgUrl, heading, discription, tryDemo }) {
  return (
    <div className="container">
      <div className="row" style={{ display: "flex", alignItems: "center" }}>
        <div className="col-4">
          <h1>{heading}</h1>
          <p style={{ fontSize: "1.2em" }}>{discription}</p>
          <div className="">
            <a
              href={tryDemo}
              style={{
                fontSize: "1.2em",
                textDecoration: "none",
              }}
            >
              {tryDemo}
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7 pt-5">
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
