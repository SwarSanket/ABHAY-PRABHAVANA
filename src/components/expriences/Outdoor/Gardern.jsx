import React from "react";

import Outimg1 from "../../../assets/JourneyOptions/op1/4.jpg";
const Gardern = () => {
  return (
    <div className="w-full bg-fipch-champa">
      <div className="container sm:container-sm mx-auto px-4 py-4">
        <div className="md:flex md:items-center  bg-white p-4 lg:p-8">
          <div className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <img
              src={Outimg1}
              alt="Rishabhdev Statue"
              className="w-full h-auto  shadow-lg"
            />
          </div>
          <div className="md:w-2/3 p-4 lg:p-8">
            <h2 className="text-fipch-subheading lg:text-fipch-heading font-bold text-fipch-orange mb-4">
              Garden of the Revered
            </h2>
            <p className="text-fipch-text text-fipch-grey justify-normal text-justify">
             Walk around the lovely miniature verisons of trees, dedicated to the 24 Tirthankars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gardern;
