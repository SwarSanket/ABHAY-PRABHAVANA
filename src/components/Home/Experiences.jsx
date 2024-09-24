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
      description: (<>Fifteen first of their kind galleries. <span className='font-semibold'>Latest technologies</span> and hitech communication mediums make it easy to understand the complex, ancient <span className='font-semibold'>philosophical and metaphysical concepts</span>, dating back millennia. The foundation of <span className='font-semibold'>core Jain and Indian values, fully valid in modern</span> turbulent times.</>),
      journeys: ' Duration : 2.5 hrs uninterrupted, in batches of max. 40 people & 15 timed galleries',
    },
    {
      id: 2,
      img: ex2,
      title: 'Path of Jain Culture and History',
      subtitle:'',
      description: (<>Seven specially curated galleries showcasing <span className='font-semibold'>beautiful & unique art, sculptures, audio-visual & animation presentations</span>. A self-guided journey, celebrating the <span className='font-semibold'>beauty of Indic art</span>, the grandeur of its <span className='font-semibold'>architecture</span>, its historic evolution, the vast ocean of literature, of the <span className='font-semibold'>productive, prosperous & peaceful Bharatiya society</span> with a <span className='font-semibold'>vibrant culture.</span></>),
      journeys: 'Recommended time : Approx. 1 – 1.5 hrs & 7 galleries, Free flow',
    },
    {
      id: 3,
      img: ex3,
      title: 'Path to Happiness',
      subtitle:'Practicing Jain Values',
      description: (<><span className='font-semibold'>Religion</span> is meant to enable the individual to find<span className='font-semibold'> true prosperity</span> and <span className='font-semibold'>happiness</span> through <span className='font-semibold'>inner peace</span>. This part illuminates how an individual, through understanding and <span className='font-semibold'>practice of the Jain Way of Life</span>, can <span className='font-semibold'>achieve</span> greater <span className='font-semibold'>personal happiness, confidence, contentment, and holistic well-being</span> in modern times.</>),
      journeys: 'Recommended time : Approx. 40 mins & 7 galleries, Free flow',
    },
    {
      id: 4,
      img: ex4,
      title: 'Eternal Stream of Indic Values : ',
      subtitle :'formative influence of Jain values on India’s diverse traditions',
      description: (<>A unique gallery that explains and celebrates the near total commonality, of the <span className='font-semibold'>productive, tolerant, inclusive & peaceful core values</span>. The <span className='font-semibold'>Jain, Buddhist, and Vedic traditions</span> - elaborated & taught by the <span className='font-semibold'>great Acharyas and venerable Sants</span>, have shaped the <span className='font-semibold'>Bharatiya spiritual ethos</span> over millennia.</>),
      journeys: 'Recommended time : Approx. 20 mins & Single gallery, Free flow ',
    },
    {
      id: 5,
      img: ex5,
      title: 'Open Air Heritage Walk',
      subtitle:'',
      description: (<>A serene <span className='font-semibold'>nature trail</span> along the revered River Indrayani, is a beautifully <span className='font-semibold'>landscaped lush 8 hectares (20 acre) area</span>, adorned with <span className='font-semibold'>monumental modern creations and exquisite replicas of stunning Jain sites</span> conveying <span className='font-semibold'>timeless values</span> as expressed over millennia across <span className='font-semibold'>India’s geography.</span></>),
      journeys: 'Recommended time : Approx. 1 – 1.5 hrs & Landscape areas with replicas',
    },
    {
      id: 6,
      img: ex6,
      title: (<>Children’s Museum and Children’s Play Area (upcoming)</>),
      subtitle:'',
      description: <>An Outdoor Play Children’s Play Area of 3700 sq.m (40,000 sq.ft) and an indoor Children’s Museum of 1400 sq.m (15,000 sq.ft), is a facility that combines learning and play spaces, for children between 6 and 12 years, to understand the tradition and Indian value system.</>,
      journeys: '---',
    },
  ];

  return (
    <div className='flex justify-center my-10'>
      <div className='lg:mx-[50px] space-x-5 max-w-screen-xl'>
        <h2 className='py-10 font-bold text-center text-fipch-heading text-fipch-orange md:text-fipch-heading lg:text-fipch-heading'>PARTS OF ABHAY PRABHAVANA</h2>
        <section className='flex flex-wrap justify-center gap-4 mx-auto'>
          {experiences.map(experience => (
            <div key={experience.id} className='w-[22.5rem] h-[36rem] border relative flex flex-col'>
              <div className='relative'>
                <span className='absolute w-6 h-20 text-5xl text-center text-white top-3 right-4'>{experience.id}</span>
                <img className='object-fill w-full h-72' src={experience.img} alt={`Experience ${experience.id}`} />
                <span className='absolute flex items-center justify-center h-8 text-xs text-center text-black transform -translate-x-1/2 bg-white w-72 -bottom-2 left-1/2'>{experience.journeys}</span>
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
