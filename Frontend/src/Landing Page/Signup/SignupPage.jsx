import React from "react";
import OpenAccount from "../OpenAccount";
import Hero from "./Hero";
import SignUpField from "./SignUpField";
import Investment from "./Investment";
function SignUpPage() {
  return (
    <>
      <Hero />
      <SignUpField />
      <Investment />
      <OpenAccount />
    </>
  );
}

export default SignUpPage;
