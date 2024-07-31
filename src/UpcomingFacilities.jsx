import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faLocationDot, faCalendarDays, faStopwatch, faChildren, faChildReaching, faMasksTheater } from "@fortawesome/free-solid-svg-icons"; 

const UpcomingFacilities = () => {
  const facilities = [
    {
      title: "Children's Museum",
      description: "a facility that combines learning and play spaces, for children between 6 and 12 years.",
      icon: <FontAwesomeIcon icon={faChildren} size='md' className='mr-2 icon text-fipch-grey'/>,
    },
    {
      title: "Outdoor Children's play area",
      description: 'for children between 6 and 12 years.',
      icon: <FontAwesomeIcon icon={faChildReaching} size='md' className='mr-2 icon text-fipch-grey'/>, 
    },
    {
      title: 'Outdoor Amphitheatre',
      description: 'for discourses, cultural events and concerts',  
      icon: <FontAwesomeIcon icon={faMasksTheater} size='md' className='mr-2 icon text-fipch-grey'/>, 
    },
  ];

  return (
    <div className="container px-4 py-20 mx-auto">
      <h2 className="mb-8 font-bold text-center text-fipch-heading text-fipch-orange">UPCOMING FACILITIES</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {facilities.map((facility, index) => (
          <div key={index} className="p-6 shadow-md bg-fipch-conch">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-4xl">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-fipch-grey">{facility.title}</h3>
            </div>
            <p className="text-fipch-grey">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingFacilities;
