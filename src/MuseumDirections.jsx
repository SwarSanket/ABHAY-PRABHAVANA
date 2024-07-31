import React from 'react';
import mapImage from './assets/direction-map.jpeg'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faLocationDot, faCalendarDays, faStopwatch } from "@fortawesome/free-solid-svg-icons"; 

const MuseumDirections = () => {
    return (
      <div className="relative flex flex-col items-center justify-between mt-8 bg-fipch-conch md:flex-row">
        
        <div className="relative w-full md:w-2/3">
          <img src={mapImage} alt="Museum Directions Map" className="w-full h-auto" />
          <div className="absolute top-0 left-0 px-4 py-2 text-xl font-semibold text-white rounded-br-lg bg-fipch-pink">
            <a href="#">GET MUSEUM DIRECTIONS</a>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full p-16 rounded-lg md:w-1/3">
          <div>
            <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 icon text-fipch-grey" />
              <div className="text-lg font-bold text-fipch-grey">45 km From Pune</div>
            </div>
            <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 icon text-fipch-grey" />
              <div className="text-lg font-bold text-fipch-grey">100 km From Mumbai</div>
            </div>
            <div className="pt-4 border-t-2 border-fipch-grey">
              <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCalendarDays} size="lg" className='mr-2 text-fipch-grey icon' />
                <div className="text-lg font-bold text-fipch-grey">Operating Days</div>
              </div>
              <div className="mb-4 text-fipch-grey">Open all days of the week, <br />except 15<sup>th</sup> Aug, 26<sup>th</sup> Jan, 2<sup>nd</sup> Oct, 1<sup>st</sup> May</div>
            </div>
            <div className="pt-4 border-t-2 border-fipch-grey">
              <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faStopwatch} size="lg" className='mr-2 text-fipch-grey icon' />
                <div className="text-lg font-bold text-fipch-grey">Operating Hours</div>
              </div>
              <ul className="list-disc list-inside text-fipch-grey">
                <li>Children below 12 years will not be admitted</li>
                <li>ID verification will be required</li>
                <li>Photography is not permitted inside the Museum</li>
                <li>Cellphones and electronic gadgets must be <br />deposited on entry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default MuseumDirections;
