import React from 'react';
import ex1 from '../../assets/home/part-1.jpg';
import ex2 from '../../assets/home/part-2.jpg';
import ex3 from '../../assets/home/3.jpg';
import ex4 from '../../assets/home/4.jpg';
import ex5 from '../../assets/home/5.jpg';
import ex6 from '../../assets/home/blank.jpeg';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      img: ex1,
      title: 'Path of Timeless Wisdom :',
      subtitle:' Philosophy, Values and Spirituality',
      description: (<>A journey that showcases <span className='font-semibold'>philosophical concepts</span>, dating back millenia, that form the foundation of <span className='font-semibold'>core Jain and Indian values</span>. These remain <span className='font-semibold'>equally valid in present</span> turbulent times.</>),
      journeys: 'Included in Journey 1 & 3',
    },
    {
      id: 2,
      img: ex2,
      title: 'Path of Jain Culture and Tradition',
      subtitle:'',
      description: (<>A self-guided journey <span className='font-semibold'>celebrating the - beauty of art, grandeur of architecture, historic evolution, vast literature, vibrant culture and prosperous society.</span></>),
      journeys: 'Included in Journey 2 & 3',
    },
    {
      id: 3,
      img: ex3,
      title: 'Path to Happiness : relevance of Jain values today',
      subtitle:'',
      description: (<><span className='font-semibold'>Religion</span> is meant to enable the individual <span className='font-semibold'>to find inner peace and true happiness</span>. This is a gallery that illuminates how an individual, through understanding and <span className='font-semibold'>practice of the Jain Way of Life, can achieve greater personal happiness, confidence, contentment, and holistic well-being</span> in modern times.</>),
      journeys: 'Included in Journey 1, 2 & 3',
    },
    {
      id: 4,
      img: ex4,
      title: 'Eternal Stream of Indic Values : ',
      subtitle :'formative influence of Jain values on India’s diverse traditions',
      description: (<>A gallery that <span className='font-semibold'>highlights the Acharyas and Sants, who shaped the Bharatiya spiritual ethos. Common core values</span> of Jainism, Buddhism, and Vedic tradition, as explained and appreciated varyingly across traditions.</>),
      journeys: 'Included in Journey 1 ,2 & 3',
    },
    {
      id: 5,
      img: ex5,
      title: 'Heritage and Festival Walk',
      subtitle:'',
      description: (<>A serene <span>nature trail</span> along the River Indrayani, is a beautifully <span className='font-semibold'>landscaped lush 20 acre area</span>, adorned with exquisite <span className='font-semibold'>replicas of stunning Jain sites</span> conveying <span className='font-semibold'>timeless values</span> as expressed over millenia across <span className='font-semibold'>India’s geography.</span></>),
      journeys: 'Included in Journey 1,2,3 & 4',
    },
    {
      id: 6,
      img: ex6,
      title: 'Upcoming Childrens Museum',
      subtitle:'',
      description: '---',
      journeys: 'Included in ---',
    },
  ];

  return (
    <div className='flex justify-center my-10'>
      <div className='lg:mx-[50px] space-x-5 max-w-screen-xl'>
        <h2 className='py-10 font-bold text-center text-fipch-heading text-fipch-orange md:text-fipch-heading lg:text-fipch-heading'>EXPERIENCES AT THE CENTRE</h2>
        <section className='flex flex-wrap justify-center gap-4 mx-auto'>
          {experiences.map(experience => (
            <div key={experience.id} className='w-[22.5rem] h-[36rem] border relative flex flex-col'>
              <div className='relative'>
                <span className='absolute w-6 h-20 text-5xl text-center text-white top-3 right-4'>{experience.id}</span>
                <img className='object-fill w-full h-72' src={experience.img} alt={`Experience ${experience.id}`} />
                <span className='absolute flex items-center justify-center w-48 h-6 text-xs text-black transform -translate-x-1/2 bg-white -bottom-2 left-1/3'>{experience.journeys}</span>
              </div>
              <div className='flex-1 p-3 bg-fipch-conch'>
                <h3 className='text-xl font-bold text-fipch-orange'>{experience.title}</h3>
                <p className='pt-2 text-sm text-fipch-orange'>{experience.subtitle}</p>
                <p className='text-xs'>{experience.description}</p>
                <button className='py-5 text-black underline '>Read More</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
