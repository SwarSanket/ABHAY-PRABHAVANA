import React from "react";
import ex3 from "../../../assets/home/3.jpg";

const Part3 = () => {
  return (
    <div className="w-full bg-[#f4f1ea]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1 */}
        <div className="flex flex-col lg:flex-row lg:items-start  space-y-6 lg:space-y-0 lg:space-x-9">
          {/* Image and Number Section */}
          <div className="flex  justify-center w-[85%] lg:w-1/4 mx-auto lg:mx-6">
            <div className="text-[100px] sm:text-[150px] lg:text-[150px] font-bold text-fipch-grey-number leading-none mr-2 lg:mr-2">
              3
            </div>
            <img
              src={ex3}
              alt="Journey Image"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[70%] flex flex-col p-4 lg:p-5 ">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-fipch-grey">
              PART 3
            </h2>
            <h3 className="text-fipch-heading sm:text-[28px] font-bold text-[#e65100] mt-2">
              Path to Happiness :
            </h3>
            <p className="text-fipch-text font-medium text-[#e65100]">
              Relevance Of Jain Values today
            </p>
            <p className="text-fipch-text text-fipch-grey mt-2">
              Each one of us constantly strives to ensure happiness, safety,
              security, and prosperity for ourselves, our families, and our
              society, especially our loved ones, despite the challenges we
              face.
            </p>
            <p className="text-fipch-text text-fipch-grey mt-2">
              Through six zones, this Gallery demonstrates how a lifestyle based
              on time-proven Jain values and practices enhances physical health,
              achieves mental peace and encourages harmonious and satisfactory
              relationships with family and society
            </p>
            <button className="text-fipch-text text-fipch-grey font-medium mt-4 flex items-center">
              Details <span className="ml-2 transform rotate-180">&#9662;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
