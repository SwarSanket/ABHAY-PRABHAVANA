import React, { useState } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Email is required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Add your form submission logic here
      console.log('Form submitted with email:', email);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-white bg-gradient-to-r from-fipch-orange to-fipch-chandan md:flex-row md:gap-8">
      <div className="flex flex-col items-center w-full mb-4 md:w-2/5 md:mb-0">
        <span className="mb-2 text-2xl font-semibold">Connect with us</span>
        <div className="flex space-x-7">
          <a href="https://facebook.com" target='_blank' className="text-4xl hover:text-gray-300">
            <FaFacebookF  />
          </a>
          <a href="https://youtube.com" target='_blank' className="text-4xl hover:text-gray-300">
            <FaYoutube  />
          </a>
          <a href="https://instagram.com" target='_blank' className="text-4xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target='_blank' className="text-4xl hover:text-gray-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:w-3/5 md:items-start">
        <span className="mb-2 text-2xl text-center md:mr-4 md:mb-4 md:text-left font-semibold">Experience Jainism in Your Inbox</span>
        <form className="flex w-2/3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address to receive our newsletter"
            className="flex-grow p-2 text-gray-700 rounded-l-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-fipch-orange rounded-r-md hover:bg-gray-100 focus:outline-none"
          >
            →
          </button>
        </form>
        {error && <p className="mt-2 text-white">{error}</p>}
      </div>
    </div>
  );
};

export default CTA;
