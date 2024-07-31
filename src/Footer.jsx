import React from 'react';
import LogoVertical from "./assets/Logo-Vertical.png";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-fipch-grey bg-fipch-conch">
      <div className="container flex flex-col mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex-1 space-y-4">
          <img src={LogoVertical} alt="Abhay Prabhavana Logo" className="w-60" />
          <div className="space-y-1">
            <p className='text-xl font-semibold text-fipch-grey'>Firodia Institute of Philosophy, <br/>Culture & History</p>
            <p className='text-sm'>A Division of Amar Prerana Trust</p>
            <hr className='w-20 border-2 border-gray-700' />
            <p>Parwadi, Mawal, Pune-412106</p>
            <p>Email: <a href="mailto:info@abhayprabhavana.org" className="font-medium text-fipch-grey">info@abhayprabhavana.org</a></p>
            <p>Mobile:</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h4 className="font-semibold">QUICK LINKS</h4>
          <ul className="space-y-2 list-disc">
            <li><a href="#about" className="hover:text-fipch-orange">About us</a></li>
            <li><a href="#exhibitions" className="hover:text-fipch-orange">Exhibitions</a></li>
            <li><a href="#events" className="hover:text-fipch-orange">Events</a></li>
            <li><a href="#visit" className="hover:text-fipch-orange">Visit us</a></li>
            <li><a href="#offerings" className="hover:text-fipch-orange">Offerings/resources</a></li>
          </ul>
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt />
            <h4 className="font-semibold">Operating Days</h4>
          </div>
          <p>TBD</p>
          <div className="flex items-center space-x-2">
            <FaClock />
            <h4 className="font-semibold">Operating Hours</h4>
          </div>
          <ul className="space-y-2 list-disc">
            <li>Children below 12 years will not be admitted</li>
            <li>ID verification will be required</li>
            <li>Photography is not permitted inside the Museum.</li>
            <li>Cellphones and electronic gadgets must be deposited on entry</li>
          </ul>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <a href="#directions" className="hover:text-fipch-orange">Get Museum Directions</a>
          </div>
        </div>
      </div>
      <div className="px-8 pt-4 mt-8 text-center text-gray-600 border-t md:flex md:justify-between">
        <p>Copyright © 2024 All Rights Reserved. Amar Prerana Trust</p>
        <div className="flex justify-center space-x-4">
          <a href="#privacy" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-500">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
