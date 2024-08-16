import React from "react";
import ex4 from "../../../assets/home/4.jpg";

const Part4 = () => {
  return (
    <div className="w-full bg-[#f4f1ea] py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1 */}
        <div className="flex flex-col lg:flex-row lg:items-start  space-y-6 lg:space-y-6 lg:space-x-6">
          {/* Text Content */}
          <div className="w-full lg:w-[70%] flex flex-col p-4 lg:p-9   ">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-fipch-grey">
              PART 4
            </h2>
            <h3 className="text-fipch-subheading lg:text-fipch-heading sm:text-[28px] font-bold text-[#e65100] mt-2">
              Eternal Stream of Indic Values :
            </h3>
            <p className="text-fipch-text font-medium text-fipch-grey">
              Formative Influence of Jain Values on India's Diverse Traditions.
            </p>
            <p className="text-fipch-text text-fipch-grey mt-2 ">
              This gallery presents numerous distinguished intellectuals, great
              teachers, and enlightened individuals, primarily from India, who
              have significantly shaped the inclusive and compassionate social
              and ethical values of the Indian spiritual tradition.
            </p>

            <button className="text-fipch-text text-gray-700 font-medium mt-4 flex items-center">
              Details <span className="ml-2 transform rotate-180">&#9662;</span>
            </button>
          </div>

          {/* Image and Number Section */}
          <div className="flex  justify-center w-[85%] lg:w-1/4 mx-auto lg:mx-6">
            <div className="text-[100px] sm:text-[150px] lg:text-[150px] font-bold text-fipch-grey-number leading-none mr-4 lg:mr-6">
              4
            </div>
            <img
              src={ex4}
              alt="Journey Image"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;
