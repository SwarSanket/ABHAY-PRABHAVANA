import React from 'react';
import AbhayFirodiaPhoto from "../../assets/home/Abhay_photo.jpg";
import { Link } from "react-router-dom";

export default function FounderMessage() {
  return (
    <div className="bg-fipch-champa">
      <div className="container mx-auto my-5 py-5 flex flex-col md:flex-row justify-center w-[90%] md:w-[80%]">
        <div className="flex flex-col items-center w-full md:w-[30%] h-auto md:px-5 md:py-5">
          <img src={AbhayFirodiaPhoto} className="object-cover w-full h-auto" alt="Abhay Firodia" />
          <p className="mt-3 font-bold text-center text-fipch-grey">
            SHRI. ABHAY FIRODIA <br />
          </p>
          <p className="mt-1 text-sm text-center text-fipch-grey">
            Chairman, Amar Prerana Trust <br />
            Founder - Abhay Prabhavana
          </p>
        </div>
        <div className="w-full pt-4 md:w-1/2 md:my-10 md:mx-10">
          <h3 className="text-3xl font-bold text-center text-white md:text-left">
            FOUNDER'S MESSAGE
          </h3>
          <p className="pt-3 text-2xl font-bold text-center text-fipch-grey md:text-left">
            ABHAY PRABHAVANA:
            <br /> A PRECIOUS AND SELFLESS GIFT TO SOCIETY
          </p>
          <p className="pt-3 text-lg text-center text-fipch-text text-fipch-grey md:text-left">
            This is an attempt to create a comprehensive repository of <span className='font-semibold'>core Jain
            values</span>, showcase the evolution of its <span className='font-semibold'>vibrant culture, glorious
            history</span> and document <span className='font-semibold'>Jainism’s impact on the Indian value system.</span>
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/founder-message">
              <button className="px-8 py-2 mt-4 text-white transition-transform duration-300 ease-in-out transform bg-fipch-orange hover:bg-orange-700 hover:scale-105">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
