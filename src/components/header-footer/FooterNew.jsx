import React from "react";
// import LogoVertical from "./assets/header-footer/Logo-Vertical.png";
import LogoVertical from "../../assets/header-footer/Logo-Vertical.png";

import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-fipch-grey">
      <div className="flex flex-col w-full space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center px-16 py-16 space-y-4 sm:items-start">
          <img
            src={LogoVertical}
            alt="Abhay Prabhavana Logo"
            className="w-1/2"
          />
          <div className="space-y-1 text-left">
            <p className="text-xl font-semibold text-fipch-grey">
              Firodia Institute of Philosophy, <br />
              Culture & History
            </p>
            <p className="text-sm">A Division of Amar Prerana Trust</p>
            <hr className="w-20 border-2 border-gray-700" />
            <p>Parwadi, Mawal, Pune-412106</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@abhayprabhavana.org"
                className="font-medium text-fipch-grey"
              >
                info@abhayprabhavana.org
              </a>
            </p>
            <p>Mobile:</p>
          </div>
        </div>
        {/* Links div */}
        <div className="w-full bg-[#f1eee8]">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-16 py-16 space-y-4 border-b-2 border-white sm:py-8 md:border-b-2 md:border-r-2">
              <div className="sm:text-left md:text-left">
                <h4 className="font-semibold">QUICK LINKS</h4>
                <ul className="p-5 space-y-2 list-disc">
                  <li>
                    <a href="#about" className="hover:text-fipch-orange">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#exhibitions" className="hover:text-fipch-orange">
                      Exhibitions
                    </a>
                  </li>
                  <li>
                    <a href="#events" className="hover:text-fipch-orange">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#visit" className="hover:text-fipch-orange">
                      Visit us
                    </a>
                  </li>
                  <li>
                    <a href="#offerings" className="hover:text-fipch-orange">
                      Offerings/resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 px-16 py-16 space-y-4 border-b-2 border-white ">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt />
                <h4 className="font-semibold">Operating Days</h4>
              </div>
              <p>TBD</p>
               <div className="w-1/4 border border-fipch-grey"></div>
              <div className="flex items-center space-x-2">
                <FaClock />
                <h4 className="font-semibold">Operating Hours</h4>
              </div>
              <ul className="space-y-2 list-disc">
                <li>Children below 12 years will not be admitted</li>
                <li>ID verification will be required</li>
                <li>Photography is not permitted inside the Museum.</li>
                <li>
                  Cellphones and electronic gadgets must be deposited on entry
                </li>
              </ul>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <a
                  href="#directions"
                  className="font-semibold hover:text-fipch-orange"
                >
                  Get Museum Directions
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-8 py-4 mt-8 text-center text-gray-600 md:flex md:justify-between">
            <p>Copyright © 2024 All Rights Reserved. Amar Prerana Trust</p>
            <div className="flex justify-center mt-4 space-x-4 md:mt-0">
              <a href="#privacy" className="hover:text-fipch-orange">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-fipch-orange">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;