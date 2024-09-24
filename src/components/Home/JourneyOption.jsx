import React from "react";
import jrone1 from "../../assets/home/Jouney/JOURNEY1/1.jpg";
import jrone2 from "../../assets/home/Jouney/JOURNEY1/2.jpg";
import jrone3 from "../../assets/home/Jouney/JOURNEY1/3.jpg";
import jrone4 from "../../assets/home/Jouney/JOURNEY1/4.jpg";
import jrtwo1 from "../../assets/home/Jouney/JOURNEY2/1.jpg";
import jrtwo2 from "../../assets/home/Jouney/JOURNEY2/2.jpg";
import jrtwo3 from "../../assets/home/Jouney/JOURNEY2/3.jpg";
import jrtwo4 from "../../assets/home/Jouney/JOURNEY2/4.jpg";
import jrthree1 from "../../assets/home/Jouney/JOURNEY3/1.jpg";
import jrthree2 from "../../assets/home/Jouney/JOURNEY3/2.jpg";
import jrthree3 from "../../assets/home/Jouney/JOURNEY3/3.jpg";
import jrthree4 from "../../assets/home/Jouney/JOURNEY3/4.jpg";
import jrthree5 from "../../assets/home/Jouney/JOURNEY3/5.jpg";
import jrthree6 from "../../assets/home/Jouney/JOURNEY3/6.jpg";
import jrfour1 from "../../assets/home/Jouney/JOURNEY4/1.jpg";
import jrfour2 from "../../assets/home/Jouney/JOURNEY4/2.jpg";
import jrfour3 from "../../assets/home/Jouney/JOURNEY4/3.jpg";
import jrfour4 from "../../assets/home/Jouney/JOURNEY4/4.jpg";
import jrfour5 from "../../assets/home/Jouney/JOURNEY4/5.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-2xl text-orange-500"
      />
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-2xl text-orange-500 "
      />
    </div>
  );
}

export default function JourneyOption() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="relative flex justify-center w-full py-20 overflow-hidden">
      <div className="relative w-[90%] sm:w-[100%] md:w-[95%] lg:w-[85%] xl:w-1/2 mx-auto">
        <h1 className="mb-6 font-bold text-center text-fipch-heading text-fipch-orange">
        TICKETED JOURNEYS
        </h1>
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="flex flex-col h-full p-4">
            <div
              className="flex flex-col flex-1 border-4 rounded-lg shadow-lg"
              style={{ borderColor: "#F59886" }}
            >
              <div
                className="w-full px-5 py-5"
                style={{ backgroundColor: "#F59886" }}
              >
                <h2 className="text-2xl font-bold text-center text-white">
                  Journey 1
                </h2>
                <p className="text-white text-center text-sm sm:text-[12px] leading-4">
                  Part 1(Path of Timeless Wisdom) + <br />Part 3(Path to Happiness) + <br />Part 4(Eternal Stream of Indic Values) + <br />Part 5(Open Air Heritage Walk)
                </p>
              </div>

              <div className="text-fipch-grey text-center text-sm sm:text-[14px] leading-4 pt-2">
                <p>Batched (in Part 1) for max. 40 people + Free flow <br /> (Parts 3,4 and 5) Children below 12 not allowed.
</p>
              </div>
      

              <div className="flex flex-wrap justify-center flex-1 p-3">
                <div className="w-1/2 p-1">
                  <img
                    src={jrone1}
                    className="object-cover w-full h-full "
                    alt="Journey 1 Image 1"
                  />
                </div>
                <div className="w-1/2 p-1 ">
                  <img
                    src={jrone2}
                    className="object-cover w-full h-full "
                    alt="Journey 1 Image 2"
                  />
                </div>
                <div className="w-1/2 p-1 ">
                  <img
                    src={jrone3}
                    className="object-cover w-full h-full "
                    alt="Journey 1 Image 3"
                  />
                </div>
                <div className="w-1/2 p-1 ">
                  <img
                    src={jrone4}
                    className="object-cover w-full h-full"
                    alt="Journey 1 Image 4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-4">
                <button
                  className="w-32 py-2 mb-2 text-white "
                  style={{ backgroundColor: "#F59886" }}
                >
                  Know More
                </button>
                <p className="text-sm text-center">
                  Recommended Time : Approx. 3.5 hrs
                </p>
                <p className="text-xs text-center">
                  Viewing Time Required Approx 3 hrs
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full p-4">
            <div
              className="flex flex-col flex-1 border-4 rounded-lg shadow-lg"
              style={{ borderColor: "#F9BA78" }}
            >
              <div
                className="w-full px-5 py-5"
                style={{ backgroundColor: "#F9BA78" }}
              >
                <h2 className="text-2xl font-bold text-center text-white">
                  Journey 2
                </h2>
                <p className="text-white text-center text-sm sm:text-[12px] leading-4">
                  Part 2(Path of Jain Culture & History) + <br />Part 3(Path to Happiness) + <br />Part 4(Eternal Stream of Indic Values) + <br />Outdoors (Ushared)
                </p>
              </div>
              <div className="flex flex-wrap justify-center flex-1 p-3 ">
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo1}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 1"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo2}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 2"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo3}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 3"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo4}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-4">
                <button
                  className="w-32 py-2 mb-2 text-white "
                  style={{ backgroundColor: "#F9BA78" }}
                >
                  Know more
                </button>
                <p className="text-xs text-center">
                  Viewing Time Required Approx 3 hrs
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full p-4 mb-8">
            <div
              className="flex flex-col flex-1 border-4 rounded-lg shadow-lg"
              style={{ borderColor: "#F15A22" }}
            >
              <div
                className="w-full px-5 py-5"
                style={{ backgroundColor: "#F15A22" }}
              >
                <h2 className="text-2xl font-bold text-center text-white">
                  Journey 3
                </h2>
                <p className="text-white text-center text-sm sm:text-[12px] leading-4">
                  Journey 1 + Journey 2 = <br />Part 1(Path of Timeless Wisdom) + <br />Part 2(Path of Jain Culture & History) + <br />Part 3(Path to Happiness) +
                  <br />Outdoors (Ushered + Free flow)
                </p>
              </div>
              <div className="flex flex-wrap justify-center flex-1 p-3">
                <div className="w-[32%] p-1">
                  <img
                    src={jrthree1}
                    className="object-cover w-full h-full "
                    alt="Journey 3 Image 1"
                  />
                </div>
                <div className="w-[32%] p-1">
                  <img
                    src={jrthree2}
                    className="object-cover w-full h-full "
                    alt="Journey 3 Image 2"
                  />
                </div>
                <div className="w-[32%] p-1">
                  <img
                    src={jrthree3}
                    className="object-cover w-full h-full "
                    alt="Journey 3 Image 3"
                  />
                </div>
                <div className="w-[64%] p-1">
                  <img
                    src={jrthree4}
                    className="object-cover w-full h-full "
                    alt="Journey 3 Image 4"
                  />
                </div>
                <div className="w-[32%] p-1 flex flex-col gap-1">
                  <img
                    src={jrthree5}
                    className="object-cover w-full h-full"
                    alt="Journey 3 Image 5"
                  />
                  <img
                    src={jrthree6}
                    className="object-cover w-full h-full "
                    alt="Journey 3 Image 6"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-3">
                <button
                  className="w-32 py-2 mb-5 text-white "
                  style={{ backgroundColor: "#F15A22" }}
                >
                  Know more
                </button>
                <p className="text-xs text-center">
                  Viewing Time Required Approx 4 hrs
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col p-4 h-1/2">
            <div
              className="flex flex-col flex-1 border-4 rounded-lg shadow-lg"
              style={{ borderColor: "#f4a82c" }}
            >
              <div
                className="w-full px-5 py-5"
                style={{ backgroundColor: "#f4a82c" }}
              >
                <h2 className="text-2xl font-bold text-center text-white">
                  Journey 4
                </h2>
                <p className="text-white text-center text-sm sm:text-[12px] leading-4">
                  Only Outdoor <br /> (Free flow)
                </p>
              </div>
              <div className="flex flex-wrap justify-center flex-1 p-3">
                <div className="w-[42.2%] p-1">
                  <img
                    src={jrfour1}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 1"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrfour2}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 2"
                  />
                </div>
                <div className="w-[42.2%] p-1">
                  <img
                    src={jrfour3}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 3"
                  />
                </div>
                <div className="w-3/12 p-1">
                  <img
                    src={jrfour4}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 4"
                  />
                </div>
                <div className="w-3/12 p-1">
                  <img
                    src={jrfour5}
                    className="object-cover w-full h-full "
                    alt="Journey 2 Image 4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-2 ">
                <button
                  className="w-32 py-2 mb-2 text-white "
                  style={{ backgroundColor: "#f4a82c" }}
                >
                  Know more
                </button>
                <p className="text-xs text-center ">
                  Viewing Time Required Approx 1.5 hrs
                </p>
              </div>
            </div>
          </div>
        </Slider>

        
      </div>
    </div>
  );
}
