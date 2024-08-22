import "./App.css";
import Experiences from "./components/Home/Experiences";
import SpecialFeatures from "./components/Home/Special_Features";
import FoundersMessage from "./components/Home/Founder-Msg";
import MuseumDirections from "./components/Home/MuseumDirections";
import Facilities from "./components/Home/Facilities";
import UpcomingFacilities from "./components/Home/UpcomingFacilities";
import CTA from "./components/Home/Cta";

import Header from "./components/header-footer/Header";
import FipchVideo from "./components/Home/FipchVideo";
import Welcome from "./components/Home/Welcome";
import JourneyOption from "./components/Home/JourneyOption";
// import JourneySwiper from "./JouerneySwiper";
import FooterNew from "./components/header-footer/FooterNew";
import StickyButton from "./components/Home/StickyButton"


function App() {
  return (
    <>
      <Header />
      <FipchVideo />
      <Welcome />
      <SpecialFeatures />
      <Experiences />
      <FoundersMessage />
      <JourneyOption />
      <MuseumDirections />
      <Facilities />
      <UpcomingFacilities />
      <CTA />
      <StickyButton/>
      <FooterNew />
      
      
    </>
  );
}

export default App;
