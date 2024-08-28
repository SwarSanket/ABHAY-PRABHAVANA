import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import Outimg1 from "../../../assets/experiences/outdoor/manastambha/1.jpg";
import Outimg2 from "../../../assets/experiences/outdoor/manastambha/2.jpg";
import Outimg3 from "../../../assets/experiences/outdoor/manastambha/3.jpg";
import Outimg4 from "../../../assets/experiences/outdoor/manastambha/4.jpg";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Manastambh = () => {
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
    <div className="w-full mb-5 bg-fipch-champa">
      <div className="container px-4 py-4 mx-auto sm:container-sm">
        <div className="p-4 bg-white md:flex md:items-center lg:p-8">
          <div className="mt-8 md:w-1/3 md:pl-8 md:mt-0">
            {/* Carousel */}
            <Slider {...settings} className="w-full h-auto">
              {/* Slide 1 */}
              <div>
                <img
                  src={Outimg1}
                  alt="Manastambh"
                  className="w-full h-auto shadow-lg"
                />
              </div>
              {/* Slide 2 */}
              <div>
                <img
                  src={Outimg2}
                  alt="Manastambh"
                  className="w-full h-auto shadow-lg"
                />
              </div>
              {/* Slide 3 */}
              <div>
                <img
                  src={Outimg3}
                  alt="Manastambh"
                  className="w-full h-auto shadow-lg"
                />
              </div>
              {/* Slide 4 */}
              <div>
                <img
                  src={Outimg4}
                  alt="Manastambh"
                  className="w-full h-auto shadow-lg"
                />
              </div>
            </Slider>
          </div>
          <div className="p-4 md:p-10 md:w-2/3">
            <h2 className="mb-4 font-bold text-fipch-subheading lg:text-fipch-heading text-fipch-orange">
              Manastambh
            </h2>
            <p className="text-justify text-fipch-text text-fipch-grey justify-normal">
              The 30.5 m (100 feet) tall Manstambh tower, inspired by traditional design, is our modern interpretation of stages of spiritual elevation. The seven intricately carved layers/tiers represent important aspects of Jainism and human life, which includes the householders, ascetics, Tirthankars and Siddhas. The viewing gallery on top allows a glimpse into the space we inhabit,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manastambh;
