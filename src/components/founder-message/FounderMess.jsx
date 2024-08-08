import React from "react";
import Header from "../header-footer/Header";
import Values from "./Values";
import Objective from "./Objective";
import CTA from "../Home/Cta";
import Footer from "../header-footer/FooterNew";

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
