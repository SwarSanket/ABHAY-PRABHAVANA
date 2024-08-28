import React from "react";

import Outimg1 from "../../../assets/experiences/outdoor/9.jpg";
const Mandal = () => {
  return (
    <div className="w-full bg-fipch-champa">
      <div className="container px-4 py-4 mx-auto sm:container-sm">
        <div className="p-4 bg-white md:flex md:items-center lg:p-8">
         
          <div className="p-4 md:w-2/3">
            <h2 className="mb-4 font-bold text-fipch-subheading lg:text-fipch-heading text-fipch-orange">
              Mandal Wall - Murals
            </h2>
            <p className="text-justify text-fipch-text text-fipch-grey justify-normal">
              The modern Museum building stands on a large platform representing
              the traditional Mandala form. The Mandal plinth Walls display
              stunning artistic murals of magnificent Jain pilgrim centers.
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

export default Mandal;
