import React from "react";
import ex1 from "../../../assets/home/1.jpg";
import Indoor from "./Indoor";

const Part1 = () => {
  return (
    <div className="w-full bg-[#f4f1ea]">
        {/* Indoor Component */}
        <Indoor />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    

        {/* Part 1 */}
        <div className="flex flex-col lg:flex-row lg:items-start mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Image and Number Section */}
          <div className="flex  justify-center w-[85%] lg:w-1/4 mx-auto lg:mx-6">
            <div className="text-[100px] sm:text-[150px] lg:text-[150px] font-bold text-fipch-grey-number leading-none mr-2 lg:mr-2">
              1
            </div>
            <img
              src={ex1}
              alt="Journey Image"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[70%] flex flex-col p-4 lg:p-9 ">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-fipch-grey">PART 1</h2>
            <h3 className="text-fipch-subheading lg:text-fipch-heading sm:text-[28px] font-bold text-[#e65100] mt-2">
              Path of Timeless Wisdom :
            </h3>
            <p className="text-[16px] font-medium text-[#e65100]">
              Philosophy, Values, and Spirituality
            </p>
            <p className="text-[16px] text-gray-700 mt-2">
              The scientific and logical foundations of Jain concepts, values, and philosophy are explored in this part of the Centre.
            </p>
            <button className="text-[16px] text-gray-700 font-medium mt-4 flex items-center">
              Details <span className="ml-2 transform rotate-180">&#9662;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
