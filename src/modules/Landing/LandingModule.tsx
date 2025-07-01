import React from "react";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits/Benefits";
import FAQ from "./components/FAQ/FAQ";

function LandingModule() {
  return (
    <div className="container">
      <HeroSection />
      <Benefits />
      <FAQ />
    </div>
  );
}

export default LandingModule;
