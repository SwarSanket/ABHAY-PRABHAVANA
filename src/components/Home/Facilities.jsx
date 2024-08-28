import React from 'react';

// Import the image icon for facilities
import gallery from "../../assets/home/gallery.png";

const features = [
  {
    title: "Sattva-the food court",
    description: "State-of-the-art Food Court that seats 600 guests at a time, offering vegeterian multicuisinedelicaies.",
  },
  {
    title: "Souvenir Shop",
    description: "Featuring crafted products inspired by Jain concepts and stunning art exhibits from the Center.",
  },
  {
    title: "Kundanmal Firodia Auditorium",
    description: "Well-equipped auditorium seating 120, and seminar rooms, for academic purposes and programmes.",
  },
  {
    title: "Taxila Library",
    description: "A well-stocked library, with digital connectivity to various online libraries which facilitates research, especially on Jainism.",
  },
];

const featurestwo = [
  {
    title: "Baijabai Firodia Gallery",
    description: "A spacious Gallery dedicated to facilitate temporary displays by National and International Museums.",
  },
  {
    title: "Jamnabai Firodia Gallery",
    description: "A secure space for those who wish to display their historic, cultural and art collections, at our Center.",
  },
  {
    title: "Wheelchair Friendly",
    description: "Wheelchair facility, with attendant, available on charge (Pre-booking required).",
  },
];

export default function Facilities() {
  return (
    <div className="">
      <div className="px-4 py-10 text-white bg-[#FBE2C5]">
        <h3 className="pt-5 font-bold text-center text-fipch-heading text-fipch-orange">
          FACILITIES AT ABHAY PRABHAVANA
        </h3>
        
        <div className="flex flex-wrap justify-center pt-6 pb-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative mx-2 mb-2 w-full text-fipch-grey sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ${
                index !== features.length - 1
                  ? "border-b-[1px] border-fipch-grey sm:border-b-0 sm:border-r-2"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 mt-2 ml-2 border-2 rounded-full border-fipch-grey">
                <img src={gallery} alt="Icon" className="w-6 h-6" />
              </div>

              
              {/* Feature Title and Description */}
              <h3
                className="px-1 py-2 mt-10 text-xl font-bold text-left text-fipch-grey sm:text-left"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></h3>
              <p className="px-2 content-all sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center pb-6">
          {featurestwo.map((featuretwo, index) => (
            <div
              key={index}
              className={`relative mx-2 mb-2 w-full text-fipch-grey sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ${
                index !== featurestwo.length - 1
                  ? "border-b-[1px] border-fipch-grey sm:border-b-0 sm:border-r-2"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 mt-2 ml-2 border-2 rounded-full border-fipch-grey">
                <img src={gallery} alt="Icon" className="w-6 h-6" />
              </div>

              {/* Feature Title and Description */}
              <h3
                className="px-1 py-2 mt-10 text-xl font-bold text-left text-fipch-grey sm:text-left"
                dangerouslySetInnerHTML={{ __html: featuretwo.title }}
              ></h3>
              <p className="pr-2 content-all sm:text-left">
                {featuretwo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
