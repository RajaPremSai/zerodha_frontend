import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";


import OpenAcc from "../OpenAcc";


function HomePage() {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAcc />
    </>
  );
}

export default HomePage;
