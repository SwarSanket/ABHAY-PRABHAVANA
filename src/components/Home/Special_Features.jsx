import React from "react";

const features = [
  {
    title: (
      <>
        20+ hectares<br />(50+ acres) land
      </>
    ),
    description: (
      <>
        On the banks of the revered Indrayani river, making it one of the{" "}
        <span className="font-semibold">Largest Museums in the World.</span>
      </>
    ),
  },
  {
    title: <>Historic Relevance</>,
    description: (
      <>
      <span className="font-semibold">Located near the historic Pale Jain Cave</span>, which has a 2,200 years old inscription, in the Jain tradition.
      </>
    )
      ,
  },
  {
    title: (
      <>
        40,000 sq.m<br />(4 lakh sq.ft)
      </>
    ),
    description: (<><span className="font-semibold">Built-up space</span> of curated <span className="font-semibold">experiences</span>.</>),
  },
  {
    title: (
      <>
        8 hectares<br />(20 acres)
      </>
    ),
    description: (<>Of <span className="font-semibold">lush landscape</span> with <span className="font-semibold">outdoor exhibits</span>.</>),
  },
  {
    title: <>350 artworks</>,
    description:
      (<>Spread over <span className="font-semibold">30 galleries</span> in the form of Installations, Murals, Illustrations for various Audio-Visuals, Graphics, Touch tables and Kiosks and Dome experience.</>),
  },
];

function SpecialFeatures() {
  return (
    <div className="">
      <div className="px-4 py-16 text-white bg-fipch-champa">
        <h3 className="pt-5 font-bold text-center text-fipch-heading text-fipch-orange">
          SPECIAL FEATURES
        </h3>
        <div className="flex flex-wrap justify-center py-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`mx-2 mb-2 w-full text-fipch-grey sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ${
                index !== features.length - 1
                  ? "border-b-[1px] border-fipch-grey sm:border-b-0 sm:border-r-2"
                  : ""
              }`}
            >
              <h3 className="px-1 text-2xl font-bold text-center headingOrange text-fipch-grey sm:text-left">
                {feature.title}
              </h3>
              <p className="px-1 py-1 text-lg text-center content-all sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialFeatures;
