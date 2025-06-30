import React from "react";

function LeftSection({
  imgUrl,
  heading,
  discription,
  tryDemo,
  learnMore,
  goolePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-7 pt-5">
          <img src={imgUrl} />
        </div>
        <div className="col-1"></div>
        <div className="col-4 pt-5 mt-5">
          <h1>{heading}</h1>
          <p style={{ fontSize: "1.2em" }}>{discription}</p>
          <div className="">
            <a
              href={tryDemo}
              style={{
                fontSize: "1.2em",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              {tryDemo}
            </a>
            <a
              href={learnMore}
              style={{
                fontSize: "1.2em",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              {learnMore}
            </a>
          </div>
          <div className="pt-4">
            <a href="">
              <img src={goolePlay} alt="" style={{ marginRight: "20px" }} />
            </a>
            <a href="">
              <img src={appStore} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
