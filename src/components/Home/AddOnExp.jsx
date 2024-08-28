import React from 'react';

import expone from "../../assets/home/Add-On-Exp/MAN-1.jpg";
import exptwo from "../../assets/home/Add-On-Exp/MAN-2.jpg";
import expthree from "../../assets/home/Add-On-Exp/MAN-3.jpg";
import exp from "../../assets/JourneyOptions/op1/6.jpg";

const AddOnExp = () => {
  return (
    <div className="">
      <div className="container px-4 py-10 mx-auto bg-gray-100 md:max-w-5xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center mb-6 lg:w-1/2 lg:mb-0 lg:p-8">
            <h2 className="mb-2 text-2xl font-bold text-fipch-orange lg:text-3xl">
              ADD ON EXPERIENCE:
            </h2>
            <p className="text-xl font-semibold text-fipch-grey lg:text-2xl">
              MANSTAMBH VIEWING GALLERY
            </p>
          </div>

          {/* Images Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-2.5 lg:grid-cols-2 lg:grid-rows-3 lg:grid-flow-col">
            {/* First Image */}
            <div className="lg:row-span-3">
              <img
                src={exp}
                alt="Manstambh"
                className="object-cover w-full h-auto"
              />
            </div>
            {/* Second Image */}
            <div className="lg:col-span-2">
              <img
                src={exptwo}
                alt="Manstambh Top View"
                className="object-cover w-full h-auto"
              />
            </div>
            {/* Third Image */}
            <div className="lg:col-span-2">
              <img
                src={expthree}
                alt="Manstambh Inside"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center my-8">
        <button className="px-5 py-3 my-3 text-lg font-semibold text-white bg-gradient-to-br from-fipch-orange to-fipch-chandan">
          PLAN YOUR VISIT
        </button>
      </div>
    </div>
  );
};

export default AddOnExp;
