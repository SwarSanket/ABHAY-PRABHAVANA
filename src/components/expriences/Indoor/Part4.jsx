import React, { useState } from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import CarouselImg1 from "../../../assets/experiences/indoor/part-4/1.jpg";
import CarouselImg2 from "../../../assets/experiences/indoor/part-4/2.jpg";
import CarouselImg3 from "../../../assets/experiences/indoor/part-4/3.jpg";
import CarouselImg4 from "../../../assets/experiences/indoor/part-4/4.jpg";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Part4 = () => {
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
    <div className="w-full bg-[#f4f1ea] py-7">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Part 4 */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:items-start lg:space-y-6 lg:space-x-6">
          {/* Text Content */}
          <div className="w-full lg:w-[70%] flex flex-col p-4 lg:p-9">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-fipch-grey">
              PART 4
            </h2>
            <h3 className="text-fipch-subheading lg:text-fipch-heading sm:text-[28px] font-bold text-[#e65100] mt-2">
              Eternal Stream of Indic Values :
            </h3>
            <p className="font-medium text-fipch-text text-fipch-grey">
              Formative Influence of Jain Values on India's Diverse Traditions.
            </p>
            <p className="mt-2 text-fipch-text text-fipch-grey">
              This gallery presents numerous distinguished intellectuals, great
              teachers, and enlightened individuals, primarily from India, who
              have significantly shaped the inclusive and compassionate social
              and ethical values of the Indian spiritual tradition.
            </p>

            {/* Conditional text based on showMore state */}
            {showMore && (
              <p className="mt-2 text-fipch-text text-fipch-grey">
                PART 4 DETAILS WILL BE ADDED HERE
              </p>
            )}

            {/* Toggle Button */}
            <button
              className="flex items-center mt-4 font-medium text-gray-700 text-fipch-text"
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

          {/* Image and Number Section with Carousel */}
          <div className="flex justify-center w-[85%] lg:w-1/4 mx-auto lg:mx-6">
            <div className="text-[100px] sm:text-[150px] lg:text-[150px] font-bold text-fipch-grey-number leading-none mr-4 lg:mr-6">
              4
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

              {/* Slide 4 */}
              <div>
                <img
                  src={CarouselImg4}
                  alt="Journey Image 4"
                  className="w-full h-auto rounded"
                />
              </div>
            </Slider>
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

export default Part4;
