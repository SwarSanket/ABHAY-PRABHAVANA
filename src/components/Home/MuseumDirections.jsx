import React from "react";
import mapImage from "../../assets/MAP.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faLocationDot,
  faCalendarDays,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const MuseumDirections = () => {
  return (
    <div className="box-border relative flex flex-col items-center justify-between mt-8 bg-fipch-conch lg:flex-row">
      <div className="relative w-full md:w-full">
        <img
          src={mapImage}
          alt="Museum Directions Map"
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 px-4 py-2 text-xl font-semibold text-white rounded-br-lg bg-fipch-pink">
          <a href="#">GET MUSEUM DIRECTIONS</a>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full p-3 rounded-lg 2xl:p-12 ">
        <div className="">
          <div className="flex items-center mb-2 lg:md-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              className="mr-2 icon text-fipch-grey"
            />
            <div className="text-sm font-bold 2xl:text-2xl text-fipch-grey">
              45 km From Pune, 1 hr by road
            </div>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              className="mr-2 icon text-fipch-grey"
            />
            <div className="text-sm font-bold 2xl:text-2xl text-fipch-grey">
              115 km From Mumbai, 2 hrs by road
            </div>
          </div>
          <div className="pt-4 border-t-2 border-fipch-grey">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                className="mr-2 text-fipch-grey icon"
              />
              <div className="text-sm font-semibold 2xl:text-2xl text-fipch-grey">
                Operating Days
              </div>
            </div>
            <div className="mb-2 text-sm text-fipch-grey 2xl:text-base">
            All days (365 days) <br />
              
            </div>
          </div>
          <div className="pt-4 border-t-2 border-fipch-grey">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faStopwatch}
                size="lg"
                className="mr-2 text-fipch-grey icon"
              />
              <div className="text-sm font-semibold 2xl:text-2xl text-fipch-grey">
                Operating Hours : 9 am to 9.30 pm
              </div>
              

            </div>
            <div className="mb-2 text-sm text-fipch-grey 2xl:text-base">
            First Batch Admission Time - 9.30 am,<br />
            Last Batch Admission Time - 6 pm,<br />
            Closing Time - 9.30 pm
              
            </div>
            <div className="pt-4 border-t-2 border-fipch-grey">
            <ul className="text-sm list-disc list-inside text-fipch-grey 2xl:text-base">
              <li>Children below 12 years will not be admitted</li>
              <li>ID verification will be required</li>
              <li>Photography is not permitted inside the Museum</li>
              <li>
                Cellphones and electronic gadgets must be deposited on entry
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumDirections;