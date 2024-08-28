import React, { useState } from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import ex3 from "../../../assets/experiences/outdoor/3.jpg"; // Example images for the carousel

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Part3 = () => {
  // State to handle toggle for additional text
  const [showMore, setShowMore] = useState(false);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Use default arrows
  };

  return (
    <div className="w-full bg-[#f4f1ea]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Part 3 */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-9">
          {/* Image and Number Section */}
          <div className="flex justify-center w-[85%] lg:w-1/4 mx-auto lg:mx-6">
            <div className="text-[100px] sm:text-[150px] lg:text-[150px] font-bold text-fipch-grey-number leading-none mr-2 lg:mr-2">
              3
            </div>
            {/* Carousel */}
            <Slider {...settings} className="w-full">
              {/* Slide 1 */}
              <div>
                <img
                  src={ex3}
                  alt="Journey Image 1"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* Slide 2 */}
              <div>
                <img
                  src={ex3}
                  alt="Journey Image 2"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* Slide 3 */}
              <div>
                <img
                  src={ex3}
                  alt="Journey Image 3"
                  className="w-full h-auto rounded"
                />
              </div>
            </Slider>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[70%] flex flex-col p-4 lg:p-5">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-fipch-grey">
              PART 3
            </h2>
            <h3 className="text-fipch-subheading lg:text-fipch-heading sm:text-[28px] font-bold text-[#e65100] mt-2">
              Path to Happiness :
            </h3>
            <p className="text-fipch-text font-medium text-[#e65100]">
              Relevance Of Jain Values today
            </p>
            <p className="mt-2 text-fipch-text text-fipch-grey">
              Each one of us constantly strives to ensure happiness, safety,
              security, and prosperity for ourselves, our families, and our
              society, especially our loved ones, despite the challenges we
              face.
            </p>

            {/* Conditional text based on showMore state */}
            {showMore && (
              <p className="mt-2 text-fipch-text text-fipch-grey">
                PART 3 DETAILS WILL BE ADDED HERE
              </p>
            )}

            {/* Toggle Button */}
            <button
              className="flex items-center mt-4 font-medium text-fipch-text text-fipch-grey"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less" : "Details"}
              <span
                className={`ml-2 transform transition-transform ${
                  showMore ? "rotate-180" : "rotate-0"
                }`}
              >
                &#9662;
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Inline CSS for custom Slick arrow colors */}
      <style jsx global>{`
        .slick-prev:before,
        .slick-next:before {
          color: #4a4a4a !important; /* Dark grey color */
        }
      `}</style>
    </div>
  );
};

export default Part3;
