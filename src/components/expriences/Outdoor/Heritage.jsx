import React from "react";

import Outimg1 from "../../../assets/experiences/outdoor/6.jpg";
const Heritage = () => {
  return (
    <div className="w-full bg-fipch-champa">
      <div className="container px-4 py-4 mx-auto sm:container-sm">
        <div className="p-4 bg-white md:flex md:items-center lg:p-8">
          <div className="mt-8 md:w-1/3 md:pl-8 md:mt-0">
            <img
              src={Outimg1}
              alt="Rishabhdev Statue"
              className="w-full h-auto shadow-lg"
            />
          </div>
          <div className="p-4 md:w-2/3">
            <h2 className="mb-4 font-bold text-fipch-subheading lg:text-fipch-heading text-fipch-orange">
              Heritage Walk - nature trail
            </h2>
            <p className="text-justify text-fipch-text text-fipch-grey justify-normal">
              Designed along the Indrayani River, the 320 m (1050 feet) long
              nature trail/walk showcasing beautifully recreated miniatures of
              ancient Jain monuments, displaying the glorius cultural and
              historical legacy of Jain heritage across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
