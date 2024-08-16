import React from "react";
import Outdoor from "./Outdoor";
import Outimg1 from "../../../assets/home/Jouney/JOURNEY4/1.jpg";
const RishabhdevSection = () => {
  return (
    <div className="w-full bg-fipch-champa">
      <Outdoor />
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center  bg-white p-4 lg:p-8">
          <div className="md:w-2/3 p-4">
            <h2 className="text-fipch-heading font-bold text-fipch-orange mb-4">
              Rishabhdev : Fountainhead of Civilizational Values
            </h2>
            <p className="text-fipch-text text-fipch-grey text-justify">
              The magnificent 13.2 m (43 feet) installation of first Tirthankar
              Rishabhdev, in meditation pose, is placed at the end of the
              Festival Walk. This statue draws inspiration from the Art Deco
              style – a unique and contemporary interpretation of the Tirthankar
              statues, as against the traditional depictions. All around the
              statue are murals depicting the teachings of the founder of our
              civilization - Tirthankar Rishabhdev and inspiring stories of
              achievements of his daughters Brahmi and Sundari, as also his sons
              Bharat and Bahubali.
            </p>
          </div>
          <div className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <img
              src={Outimg1}
              alt="Rishabhdev Statue"
              className="w-full h-auto  shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RishabhdevSection;
