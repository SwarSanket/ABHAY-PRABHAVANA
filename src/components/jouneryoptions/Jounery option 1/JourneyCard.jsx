import React from 'react';

const JourneyCard = ({ part, title, subtitle, description, image }) => {
  return (
    <div className='flex flex-col md:flex-row items-start p-4'>
      <div className='flex-1 '>
        <h3 className='text-lg font-bold text-fipch-grey'>PART {part}</h3>
        <h2 className='text-2xl font-bold text-fipch-orange'>
          {title} :
        </h2>
        <h4 className='text-lg text-fipch-orange mt-2'>{subtitle}</h4>
        <p className='text-gray-700 mt-2 mx-auto'>{description}</p>
        <button className='mt-4 text-fipch-grey underline flex items-center'>
          Details <span className='ml-2 text-fipch-grey'>&#9660;</span>
        </button>
      </div>
      <div className='mt-4 lg:mt-0 lg:ml-8    w-11/12 mx-auto md:w-[20%]'>
        <img src={image} alt={title} className='w-auto h-auto' />
      </div>
    </div>
  );
};

export default JourneyCard;
