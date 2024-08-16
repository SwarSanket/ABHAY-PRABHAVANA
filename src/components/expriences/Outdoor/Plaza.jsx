import React from "react";

import Outimg1 from "../../../assets/JourneyOptions/op1/3.jpg";
const Plaza = () => {
  return (
    <div className="w-full bg-fipch-champa">
      
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center  bg-white p-4 lg:p-8">
          <div className="md:w-2/3 p-4">
            <h2 className="text-fipch-heading font-bold text-orange-600 mb-4">
              Plaza of Equanimity
            </h2>
            <p className="text-fipch-text text-fipch-grey text-justify">
              A 17 m (56.5 feet) tall temple installation with a magnificent,
              tall, Sarvatobhadra statue (all four sides facing) standing
              inside, surrounded by a garden with beautiful flowering trees and
              a reflection pool, conducive to a contemplative and peaceful
              environment.
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

export default Plaza;
