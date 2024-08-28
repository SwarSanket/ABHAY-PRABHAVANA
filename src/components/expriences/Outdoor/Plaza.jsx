import React from "react";

import Outimg1 from "../../../assets/experiences/outdoor/7.jpg";
const Plaza = () => {
  return (
    <div className="w-full bg-fipch-champa">
      
      <div className="container px-4 py-8 mx-auto">
        <div className="p-4 bg-white md:flex md:items-center lg:p-8">
          <div className="p-4 md:w-2/3">
            <h2 className="mb-4 font-bold text-orange-600 text-fipch-subheading lg:text-fipch-heading">
              Plaza of Equanimity
            </h2>
            <p className="text-justify text-fipch-text text-fipch-grey">
              A 17 m (56.5 feet) tall temple installation with a magnificent,
              tall, Sarvatobhadra statue (all four sides facing) standing
              inside, surrounded by a garden with beautiful flowering trees and
              a reflection pool, conducive to a contemplative and peaceful
              environment.
            </p>
          </div>
          <div className="mt-8 md:w-1/3 md:pl-8 md:mt-0">
            <img
              src={Outimg1}
              alt="Rishabhdev Statue"
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plaza;
