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

export default function Journeys() {
  return (
    <div className="relative flex flex-col items-center w-full py-20 overflow-hidden">
      <div className="relative w-[90%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] mx-auto">
        <h1 className="mb-6 font-bold text-center text-fipch-heading text-fipch-orange">
          PLAN YOUR VISIT
        </h1>
        <h2 className="text-center text-3xl font-semibold text-fipch-grey mb-4">Prepare for an enriching experience</h2>
        <div className="flex flex-wrap justify-between gap-4">
          {/* Card 1 */}
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%] p-4">
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
                  Part 1 + Part 3 + Part 4 + Outdoor <br />
                  (Ushered)
                </p>
              </div>
              <div className="flex flex-wrap justify-center flex-1 p-3">
                <div className="w-1/2 p-1">
                  <img
                    src={jrone1}
                    className="object-cover w-full h-full"
                    alt="Journey 1 Image 1"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrone2}
                    className="object-cover w-full h-full"
                    alt="Journey 1 Image 2"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrone3}
                    className="object-cover w-full h-full"
                    alt="Journey 1 Image 3"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrone4}
                    className="object-cover w-full h-full"
                    alt="Journey 1 Image 4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-4">
                <button
                  className="w-32 py-2 mb-2 text-white"
                  style={{ backgroundColor: "#F59886" }}
                >
                  Know more
                </button>
                <p className="text-xs text-center">
                  Viewing Time Required Approx 3 hrs
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%] p-4">
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
                  Part 1 + Part 3 + Part 4 + Outdoor <br /> (Ushered)
                </p>
              </div>
              <div className="flex flex-wrap justify-center flex-1 p-3">
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo1}
                    className="object-cover w-full h-full"
                    alt="Journey 2 Image 1"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo2}
                    className="object-cover w-full h-full"
                    alt="Journey 2 Image 2"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo3}
                    className="object-cover w-full h-full"
                    alt="Journey 2 Image 3"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrtwo4}
                    className="object-cover w-full h-full"
                    alt="Journey 2 Image 4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-4">
                <button
                  className="w-32 py-2 mb-2 text-white"
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
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%] p-4">
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
                  Journey 1 + Journey 2 = Part 1 + Part 2 + Part 3 + Part 4 +
                  Outdoors <br />(Ushered + Free flow)
                </p>
              </div>
              <div className="flex flex-wrap justify-center flex-1 p-3">
                <div className="w-[32%] p-1">
                  <img
                    src={jrthree1}
                    className="object-cover w-full h-full"
                    alt="Journey 3 Image 1"
                  />
                </div>
                <div className="w-[32%] p-1">
                  <img
                    src={jrthree2}
                    className="object-cover w-full h-full"
                    alt="Journey 3 Image 2"
                  />
                </div>
                <div className="w-[32%] p-1">
                  <img
                    src={jrthree3}
                    className="object-cover w-full h-full"
                    alt="Journey 3 Image 3"
                  />
                </div>
                <div className="w-[64%] p-1">
                  <img
                    src={jrthree4}
                    className="object-cover w-full h-full"
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
                    className="object-cover w-full h-full"
                    alt="Journey 3 Image 6"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-3">
                <button
                  className="w-32 py-2 mb-5 text-white"
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
          <div className="flex flex-col w-full sm:w-[48%] lg:w-[23%] p-4">
            <div
              className="flex flex-col flex-1 border-4 rounded-lg shadow-lg"
              style={{ borderColor: "#4D4D4D" }}
            >
              <div
                className="w-full px-5 py-5"
                style={{ backgroundColor: "#4D4D4D" }}
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
                    className="object-cover w-full h-full"
                    alt="Journey 4 Image 1"
                  />
                </div>
                <div className="w-1/2 p-1">
                  <img
                    src={jrfour2}
                    className="object-cover w-full h-full"
                    alt="Journey 4 Image 2"
                  />
                </div>
                <div className="w-[42.2%] p-1">
                  <img
                    src={jrfour3}
                    className="object-cover w-full h-full"
                    alt="Journey 4 Image 3"
                  />
                </div>
                <div className="w-3/12 p-1">
                  <img
                    src={jrfour4}
                    className="object-cover w-full h-full"
                    alt="Journey 4 Image 4"
                  />
                </div>
                <div className="w-3/12 p-1">
                  <img
                    src={jrfour5}
                    className="object-cover w-full h-full"
                    alt="Journey 4 Image 5"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mb-2">
                <button
                  className="w-32 py-2 mb-2 text-white"
                  style={{ backgroundColor: "#4D4D4D" }}
                >
                  Know more
                </button>
                <p className="text-xs text-center">
                  Viewing Time Required Approx 1.5 hrs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <h3 className="text-xs sm:text-sm md:text-xl text-center font-semibold border-8 border-[#F59886] rounded-full text-[#F59886] py-3 px-5">
            ADD ON EXPERIENCE : MANTSTAMBH VIEWING GALLERY
          </h3>
        </div> */}

        <div className="flex justify-center">
          <button className="py-3 bg-gradient-to-br from-[#f15a22] to-[#fcb415] my-3 px-8 text-white font-bold text-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
