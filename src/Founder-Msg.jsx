import React from 'react';
import AbhayFirodiaPhoto from "./assets/home/Abhay_photo.jpg";
import { Link } from "react-router-dom";

export default function FounderMessage() {
  return (
    <div className=" bg-fipch-champa">
      <div className="container w-[80%]  mx-auto my-5 py-5 flex flex-col md:flex-row justify-center ">
        <div className="w-full md:w-[22%] h-auto ">
          <img src={AbhayFirodiaPhoto} className="object-cover w-full h-auto px-5 py-5" />
          <p className="font-bold text-center text-fipch-grey">
            SHRI. ABHAY FIRODIA <br />
          </p>
          {/* <span className="text-xs font-normal leading-[0px] ">
             
          </span> */}
          <p className="text-sm text-center text-fipch-grey">
            Chairman, Amar Prenana Trust <br />
            Founder - Abhay Prabhavana
          </p>
        </div>
        <div className="w-full pt-4 md:w-1/2 md:my-10 md:mx-10 ">
          <h3 className="text-3xl font-bold text-white ">
            FOUNDER'S MESSAGE
          </h3>

          <p className="pt-3 text-2xl font-bold text-fipch-grey">
            ABHAY PRABHAVANA:
            <br /> A PRECIOUS AND SELFLESS GIFT TO SOCIETY
          </p>
          <p className="pt-3 text-left text-fipch-text text-fipch-grey">
            This is an attempt to create a comprehensive repository of core Jain
            values, showcase the evolution of its vibrant culture, glorious
            history and document Jainism’s impact on the Indian value system.
          </p>
          <Link to="/founder-message"><button className="px-8 py-2 mt-4 text-white transition-transform duration-300 ease-in-out transform bg-fipch-orange hover:bg-orange-700 hover:scale-105">
              Know More
            </button></Link>
            
        </div>
      </div>
    </div>
  );
}





