import React from 'react';
import kundanmalPhoto from '../../assets/about-img/Shri_Kundanmal_Firodia.jpg'; // Replace with the actual path to your image
import navalmalkundanmalPhoto from '../../assets/about-img/Shri_Navalmal_Firodia.jpg'; // Replace with the actual path to your image
import abhayFirodiaPhoto from '../../assets/about-img/Shri_Abhay_Firodia.jpg'; // Replace with the actual path to your image


const FoundersAndTrustees = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 font-bold text-left text-fipch-heading text-fipch-orange">FOUNDERS AND TRUSTEES</h2>
      <div className="space-y-16">
        
        <div className="md:flex md:items-start md:space-x-8">
          
         

          <div className="mt-4 md:mt-0">
            <p className="mb-4 text-xl text-justify text-fipch-grey">
              The <span className='font-bold'>Firodia Family</span> have been successful entrepreneurs for generations.
              They have founded and nurtured many businesses, companies as well as
              social, educational and healthcare institutions.
            </p>
            <p className="mb-4 text-xl text-justify text-fipch-grey">
             <span className='font-bold'>Late Shri Kundanmal Firodia</span> was the first Speaker of Vidhan Sabha,
              “Bombay Presidency Province”, from 1946 to 1952. He founded <span className='font-bold'>Shri Firodia
              Trust</span> in 1947.
            </p>
          </div>

          <div className="flex-shrink-0 text-center md:text-left">
            <img
              src={kundanmalPhoto}
              alt="Shri Kundanmal Firodia"
              className="object-contain w-48 h-auto mx-auto mb-4"
            />
            <div className="text-center">
              <p className="font-bold">Shri Kundanmal Firodia</p>
              <p>Founder, Shri Firodia Trust, 1947</p>
            </div>
          </div>
        </div>
        
        <div className="md:flex md:items-start md:space-x-8">
         
         

          <div className="mt-4 md:mt-0">
            <p className="mb-4 text-xl text-justify text-fipch-grey">
              His son, <span className='font-bold'>Late Shri Navalmalkundanmal Firodia</span>, was a <span className='font-bold'>freedom fighter,
              pioneer industrialist and passionate philanthropist</span>. Among other
              institutions, he founded the <span className='font-bold'>Amar Prerana Trust</span> in 1991. He is the inventor of
              the autorickshaw, industrialized in a partnership between Firodia and Bajaj,
              in what is known now as Bajaj Auto Limited. He was a pioneer of building light
              commercial vehicles – Tempos.
            </p>
          </div>

          <div className="flex-shrink-0 text-center md:text-left">
            <img
              src={navalmalkundanmalPhoto}
              alt="Shri Navalmalkundanmal Firodia"
              className="object-contain w-48 h-auto mx-auto mb-4"
            />
            <div className="text-center">
              <p className="font-bold">Shri Navalmalkundanmal Firodia</p>
              <p>Founder, Amar Prerana Trust, 1991</p>
            </div>
          </div>
        </div>
        
        <div className="md:flex md:items-start md:space-x-8">
          
          

          <div className="mt-4 md:mt-0">
            <p className="mb-4 text-xl text-justify text-fipch-grey">
              <span className='font-bold'>Shri Abhay Firodia</span> is the son of late Shri Navalmalkundanmal Firodia, and
              the Chairman of Force Motors Limited. Force Motors is a pioneer in the
              Automobile Industry in India for more than 60 years. It has manufactured
              Tempo 3-Wheeler Auto-rickshaws, Matadors, Travellers, Trax and such iconic
              vehicles. It is focused on producing utilitarian cost-effective products,
              especially made to suit the Indian economy and rural environment.
            </p>
          </div>

          <div className="flex-shrink-0 text-center md:text-left">
            <img
              src={abhayFirodiaPhoto}
              alt="Shri Abhay Firodia"
              className="object-contain w-48 h-auto mx-auto mb-4"
            />
            <div className="text-center">
              <p className="font-bold">Shri Abhay Firodia</p>
              <p>Chairman, Amar Prerana Trust</p>
              <p>Founder, Abhay Prabhavana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersAndTrustees;
