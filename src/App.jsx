import "./App.css";
import Experiences from "./Experiences";
import SpecialFeatures from "./Special_Features";
import FoundersMessage from "./Founder-Msg";
import MuseumDirections from "./MuseumDirections";
import Facilities from "./Facilities";
import UpcomingFacilities from "./UpcomingFacilities";
import CTA from "./Cta";
import Footer from "./Footer";
import Header from "./Header";
import FipchVideo from "./FipchVideo";
import Welcome from "./Welcome";
import JourneyOption from "./JourneyOption";



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
      <Footer />
      
    </>
  );
}

export default App;
