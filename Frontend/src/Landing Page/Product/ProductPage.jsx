import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imgUrl="./images/kite.png"
        heading="Kite"
        discription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo →"
        learnMore="Learn More →"
        goolePlay="./images/googlePlayBadge.svg"
        appStore="./images/appstoreBadge.svg"
      />
      <RightSection
        imgUrl="./images/console.png"
        heading="Console"
        discription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn More →"
        learnMore=""
      />
      <LeftSection
        imgUrl="./images/coin.png"
        heading="Coin"
        discription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin →"
        learnMore=""
        goolePlay="./images/googlePlayBadge.svg"
        appStore="./images/appstoreBadge.svg"
      />
      <RightSection
        imgUrl={"./images/landing.svg"}
        heading="Kite Connect API"
        discription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect  →"
      />

      <LeftSection
        imgUrl="./images/varsity.png"
        heading="Varsity mobile"
        discription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        goolePlay="./images/googlePlayBadge.svg"
        appStore="./images/appstoreBadge.svg"
      />
      <div className="row text-center p-5">
        <h5>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h5>
      </div>
      <Universe />
      <Footer />
    </div>
  );
}

export default ProductPage;
