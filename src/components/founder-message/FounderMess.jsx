import React from "react";
import Header from "../../Header";
import Values from "./Values";
import Objective from "./Objective";
import CTA from "../../Cta";
import Footer from "../../Footer";
import AboutAbhayPrabhavana from "../about/AboutAbhayPrabhavana";
import MissionVision from "../about/VisionMission";


export default function FounderMess() {
  return (
    <div>
      <Header />
      <AboutAbhayPrabhavana />   
      <MissionVision />
      <Values />
      <Objective />
      <CTA />
      <Footer />
    </div>
  );
}
