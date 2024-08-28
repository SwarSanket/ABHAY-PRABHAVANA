import React, { useState } from "react";
import CarouselImg1 from "../../../assets/experiences/indoor/part-1/1.jpg";
import CarouselImg2 from "../../../assets/experiences/indoor/part-1/2.jpg";
import CarouselImg3 from "../../../assets/experiences/indoor/part-1/3.jpg";
import Indoor from "./Indoor";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Part1 = () => {
  // State to handle toggle for additional text
  const [showMore, setShowMore] = useState(false);

  // Carousel settings with default arrows
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
      {/* Indoor Component */}
      <Indoor />
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Part 1 */}
        <div className="flex flex-col mt-6 space-y-6 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-6">
          {/* Image and Number Section */}
          <div className="flex justify-center w-[85%] lg:w-1/4 mx-auto lg:mx-6">
            <div className="text-[100px] sm:text-[150px] lg:text-[150px] font-bold text-fipch-grey-number leading-none mr-2 lg:mr-2">
              1
            </div>
            {/* Carousel */}
            <Slider {...settings} className="w-full">
              {/* Slide 1 */}
              <div>
                <img
                  src={CarouselImg1}
                  alt="Journey Image 1"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* Slide 2 */}
              <div>
                <img
                  src={CarouselImg2}
                  alt="Journey Image 2"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* Slide 3 */}
              <div>
                <img
                  src={CarouselImg3}
                  alt="Journey Image 3"
                  className="w-full h-auto rounded"
                />
              </div>
            </Slider>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[70%] flex flex-col p-4 lg:p-9">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-fipch-grey">
              PART 1
            </h2>
            <h3 className="text-fipch-subheading lg:text-fipch-heading sm:text-[28px] font-bold text-fipch-orange mt-2">
              Path of Timeless Wisdom :
            </h3>
            <p className="text-[16px] font-medium text-fipch-orange">
              Philosophy, Values, and Spirituality
            </p>
            <p className="text-[16px] text-gray-700 mt-2">
              The scientific and logical foundations of Jain concepts, values, and philosophy are explored in this part of the Centre.
            </p>

            {/* Conditional text based on showMore state */}
            {showMore && (
              <p className="text-[16px] text-gray-700 mt-2">
                PART 1 DETAILS WILL BE ADDED HERE
              </p>
            )}

            {/* Toggle Button */}
            <button
              className="text-[16px] text-gray-700 font-medium mt-4 flex items-center"
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

export default Part1;
