import React from "react";

import Outimg1 from "../../../assets/JourneyOptions/op1/6.jpg";
const Manastambh = () => {
  return (
    <div className="w-full bg-fipch-champa mb-5">
      <div className="container sm:container-sm mx-auto px-4 py-4">
        <div className="md:flex md:items-center  bg-white p-4 lg:p-8">
          <div className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <img
              src={Outimg1}
              alt="Rishabhdev Statue"
              className="w-full h-auto  shadow-lg"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-fipch-heading font-bold text-fipch-orange mb-4">
              Manastambh
            </h2>
            <p className="text-fipch-text text-fipch-grey justify-normal text-justify">
              The 30.5 m (100 feet) tall Manstambh tower, inspired by
              traditional design, is our modern interpretation of stages of
              spiritual elevation. The seven intricately carved layers/tiers
              represent important aspects of Jainism and human life, which
              includes the householders, ascetics, Tirthankars and Siddhas. The
              viewing gallery on top allows a glimpse into the space we inhabit,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manastambh;
