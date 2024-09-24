import React from "react";

const features = [
  {
    title: (
      <>
        65.5+ hectares <br /> (162+ acres) of land available
      </>
    ),
    description: (
      <>
        On the banks of the revered Indrayani river, possibly the
        <span className="font-semibold"> Largest Museum in the World.</span>
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
        32,500 sq.m (3.5 lakh sq.ft)
      </>
    ),
    description: (<><span className="font-semibold">Built-up space</span> of curated <span className="font-semibold">experiences</span>.</>),
  },
  {
    title: (
      <>
        8 hectares (20 acres)
      </>
    ),
    description: (<>Of <span className="font-semibold">specially curated lush landscape</span> with <span className="font-semibold">replicas of historic monuments </span>.</>),
  },
  {
    title: <>350 awe inspiring, specially created pieces of art, spread over 30 hitech, breathtaking galleries</>,
    description:
      (<>In the form of Installations, Murals, Illustrations for various Audio-Visuals, Graphics, Touch tables, Kiosks and Dome experience.</>),
  },
  {
    title: <>All 7 days a week edutainment</>,
    description:
      (<>With latest technology systems and processes</>),
  },
  {
    title: <>All day activities for the entire family</>,
    description:
      (<>Supported by 300+ service staff.</>),
  },
  {
    title: <>2000 footfall per day capacity</>,
    description:
      (<></>),
  },
  {
    title: <>Sustainable development </>,
    description:
      (<></>),
  },
  {
    title: <>Leed certification </>,
    description:
      (<>in process </>),
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
