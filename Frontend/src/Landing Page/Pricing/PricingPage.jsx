import React from "react";
import Hero from "./Hero";
import Brokrage from "./Brokrage";
import Footer from "../Footer";
import Table from "./Table";
import Charge from "./Charge";
import Equity from "./Equity";
function PricingPage() {
  return (
    <div>
      <Hero />
      <Table />
      <Equity />
      <Brokrage />
      <Charge />
      <Footer />
    </div>
  );
}

export default PricingPage;
