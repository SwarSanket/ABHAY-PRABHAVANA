import React from 'react';
import AboutImg from "../../assets/about-img/Museum.jpg";

const AboutAbhayPrabhavana = () => {
  return (
    <div className="w-full">
      <div className="container px-4 py-20 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-10">
          <div className="text-justify md:col-span-7">
            <h1 className="mb-4 text-3xl font-bold text-fipch-heading text-fipch-orange">ABHAY PRABHAVANA</h1>
            <p className="mb-2 text-lg md:text-xl text-fipch-grey">
              <span className='font-bold'>Abhay Prabhavana</span> is a <span className='font-bold'>Knowledge Centre</span> created by the Firodia Institute of Philosophy, Culture and History (<span className='font-bold'>FIPCH</span>), which is a division of Amar Prerana Trust (<span className='font-bold'>APT</span>).</p>
            <p className="mb-2 text-lg md:text-xl text-fipch-grey">
              A <span className='font-bold'>‘Museum of Ideas’</span>, it showcases the <span className='font-bold'>timeless values of Jainism</span>, in a <span className='font-bold'>scientific, logical, easy to understand and modern perspective</span>. It highlights <span className='font-bold'>Jainism’s depth, diversity, and their crucial impact on the entire Indian value system, emphasizing its timeless appeal.</span>
            </p>
            <p className="mb-2 text-lg md:text-xl text-fipch-grey">
              The term <span className='font-bold'>‘Prabhavana’</span> means a <span className='font-bold'>precious gift to society, for the benefit of all - given selflessly</span>. This Center has been <span className='font-bold'>built under the vision and leadership of Shri Abhay Firodia</span>. It is developed <span className='font-bold'>over ten years in collaboration</span> with Jain scholars, thought leaders, artists and facilitators.
            </p>
          </div>
          <div className="md:col-span-3">
            <img src={AboutImg} alt="Abhay Prabhavana" className="w-full h-auto rounded-md shadow-md" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AboutAbhayPrabhavana;
