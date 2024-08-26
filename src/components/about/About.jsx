import Header from "../header-footer/Header";
import AmarPreranaTrust from "./AmarPreranaTrust";
import VerticalsSection from "./VerticalsSection";
import FoundersAndTrustees from "./FoundersAndTrustees";
import CTA from "../Home/Cta";
import Footer from "../header-footer/FooterNew";
import Tradition from "./Tradition";
import Legacy from "./Legacy";
import StickyButton from "../Home/StickyButton";
import Timeline from "./Timeline";

export default function About() {
  return (
    <div>
      <Header />
      <AmarPreranaTrust />
      <Timeline />
      <VerticalsSection />
      <FoundersAndTrustees />
      <Tradition />
      <Legacy />
      <CTA />
      <StickyButton />
      <Footer />
    </div>
  );
}
