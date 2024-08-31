import React from 'react';
import JourneyCard from './JourneyCard'; // Ensure you import the JourneyCard component
import img1 from '../../../assets/journey/10.jpg';
import img2 from '../../../assets/journey/2.jpg';
import img3 from '../../../assets/journey/3.jpg';

export default function Jrop2discription() {
  const cards = [
    {
      part: '2',
      title: 'Path of Jain Culture and History:',
      subtitle: '',
      description: 'This part of the Centre showcases the evolution, development, and geographic spread of Shraman and Jain philosophy, the most ancient tradition of India, across six exquisitely appointed galleries.',
      image: img1
    },
    {
      part: '3',
      title: 'Path to Happiness',
      subtitle: 'Relevance of Jain Values today',
      description: 'Each one of us constantly strives to ensure happiness, safety, security, and prosperity for ourselves, our families, and our society, especially our loved ones, despite the challenges we face.',
      image: img2
    },
    {
      part: '4',
      title: 'Eternal Stream of Indic Values:',
      subtitle: 'Formative Influence of Jain Values on India’s diverse traditions',
      description: 'This gallery presents numerous distinguished intellectuals, great teachers, and enlightened individuals, primarily from India, who have significantly shaped the inclusive and compassionate social and ethical values of the Indian spiritual tradition.',
      image: img3
    }
  ];

  return (
    <div className='flex justify-center mt-8'>
      <div className='container mx-auto sm:container-sm sm:mx-auto md:container-md md:mx-auto'>
        <div>
          {cards.map((card, index) => (
            <div key={index} className={index < cards.length - 1 ? 'border-b-2  border-gray-200' : ''}>
              <JourneyCard
                part={card.part}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
