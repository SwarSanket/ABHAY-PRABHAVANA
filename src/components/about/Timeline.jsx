import React from 'react';

function Timeline() {
  const timelineItems = [
    {
      
      title: (<> <span className='font-bold'>Nurturing spiritual and ethical advancement</span>, as well as academic excellence. </>)
      
    },
    {
      
      title:  (<> <span className='font-bold'>Establishing educational institutions</span> as well as providing support to various centres of knowledge.</>) 
      
    },
    {
      
      title: (<> <span className='font-bold'>Providing medical relief</span> to the poor and disabled, disease prevention and general public utility.</>)
      
    },  
    {
      
        title: (<>Promoting studies in <span className='font-bold'>Indian culture, history, philosophy, ancient languages</span> as well as training in <span className='font-bold'>meditation and yogic practices</span>.</>)
        
      },
      {
      
        title: (<>Appreciating and <span className='font-bold'>rewarding achievements in fields of arts, sciences, and humanitarian work.</span></>)
        
      },
  ];

  return (
    <div className="container px-4 mx-auto">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timelineItems.map((item, index) => (
          <li key={index} className="mb-5 ml-4">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1 -left-1.5 border border-white dark:border-gray-400 dark:bg-gray-300"></div>
            
            <h3 className="text-lg text-fipch-grey dark:text-white">{item.title}</h3>
            
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
