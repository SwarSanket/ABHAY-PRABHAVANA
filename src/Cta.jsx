import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white bg-gradient-to-r from-fipch-orange to-fipch-chandan md:flex-row md:gap-8">
      <div className="flex flex-col items-center w-full mb-4 md:w-2/5 md:mb-0">
        <span className="mb-2 text-3xl">Connect with us</span>
        <div className="flex space-x-7">
          <a href="https://facebook.com" className="text-4xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" className="text-4xl hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" className="text-4xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-4xl hover:text-gray-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:w-3/5 md:items-start">
        <span className="mb-2 text-3xl md:mr-4 md:mb-4 sm:text-center">Experience Jainism in Your Inbox</span>
        <form className="flex w-2/3">
          <input
            type="email"
            placeholder="Enter your email address to receive our newsletter"
            className="flex-grow p-2 text-gray-700 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-fipch-orange rounded-r-md hover:bg-gray-100 focus:outline-none"
          >
            →
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
