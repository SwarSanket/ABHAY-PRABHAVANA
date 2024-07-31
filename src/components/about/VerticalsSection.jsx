import React from 'react';
import navalLogo from '../../assets/about-img/Naval_Veerayatan_logo.png';
import navalPhoto from '../../assets/about-img/Naval_Veerayatan_Photo.png';
import abhayLogo from '../../assets/about-img/Abhay_Prabhavana_Logo.png';
import abhayPhoto from '../../assets/about-img/Abhay_Prabhavana_Photo.png';
import isjsLogo from '../../assets/about-img/ISJS_Logo.png';
import isjsPhoto from '../../assets/about-img/ISJS_Photo.png';

const VerticalsSection = () => {
  const verticals = [
    {
      logo: navalLogo,
      title: 'Naval Veearayatan',
      description: 'A scenic campus for value education',
      photo: navalPhoto,
    },
    {
      logo: abhayLogo,
      title: 'Abhay Prabhavana',
      description: 'Firodia Institute of Philosophy, Culture & History (FIPCH): A cultural and educational center, with focus on the Shramana tradition of Jainism.',
      photo: abhayPhoto,
    },
    {
      logo: isjsLogo,
      title: 'ISJS (International School for Jain Studies)',
      description: 'An academic organization collaborating with many European and American Universities, for promoting Jain studies.',
      photo: isjsPhoto,
    },
  ];

  return (
    <div className="container px-4 pb-10 mx-auto">
      <h1 className="pb-5 mb-8 font-bold md:text-left text-fipch-heading text-fipch-orange md:text-fipch-heading sm:text-center">
        THE AMAR PRERANA TRUST OPERATES THREE VERTICALS
      </h1>
      <div className="space-y-8">
        {verticals.map((vertical, index) => (
          <div key={index} className="flex flex-col items-center md:flex-row md:items-start">
            <img
              src={vertical.logo}
              alt={`${vertical.title} logo`}
              className="object-contain w-24 h-24 mb-4 md:w-32 md:h-32 md:mb-0 md:mr-4"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-fipch-grey">{vertical.title}</h3>
              <p className='text-lg text-fipch-grey'>{vertical.description}</p>
            </div>
            <img
              src={vertical.photo}
              alt={`${vertical.title} photo`}
              className="w-full h-auto mt-4 md:mt-0 md:ml-4 md:w-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalsSection;
