import React from "react";

import Outimg1 from "../../../assets/JourneyOptions/op1/2.jpg";
const Heritage = () => {
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
          <div className="md:w-2/3 p-4">
            <h2 className="text-fipch-heading font-bold text-fipch-orange mb-4">
              Heritage Walk - nature trail
            </h2>
            <p className="text-fipch-text text-fipch-grey justify-normal text-justify">
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
