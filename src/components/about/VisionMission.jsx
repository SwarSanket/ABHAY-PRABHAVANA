import React from 'react';

const MissionVision = () => {
  return (
    <div className="bg-[#f7f5f5] w-full">
      <div className="container px-4 py-20 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-1 md:col-span-5">
            <h1 className="mb-4 text-3xl font-bold text-fipch-subheading text-fipch-orange">OUR MISSION</h1>
            <ul className="pl-4 space-y-2 text-lg text-justify list-disc list-outside md:text-xl text-fipch-grey">
              <li>To provide ease of <span className='font-bold'>access to Jain thought, belief and history</span> to the general public.</li>
              <li><span className='font-bold'>Instil pride in Jain visitors</span> by showcasing the heritage, aesthetic and educational value of their religion.</li>
              <li>To showcase <span className='font-bold'>the synergy between Jain deductive logic and Modern empirical science</span>, and in turn, highlight the <span>contemporary relevance</span> and day – to – day applicability of Jain thoughts.</li>
              <li>Show <span className='font-bold'>contribution to varied fields</span> of humanism, law and politics, trade & commerce, etc. </li>
              <li>To <span className='font-bold'>document the glorious Jain History</span> by displaying <span className='font-bold'>digital records</span> & create a <span className='font-bold'>research base</span> for interested persons, encouraging the visitor to explore and delve deeper in specific areas of interest.
</li>
            </ul>
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-1">
            <div className="hidden h-full border-r border-gray-400 md:block"></div>
            <div className="block w-full h-px border-t border-gray-400 md:hidden"></div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <h1 className="mb-4 font-bold text-fipch-subheading md:text-fipch-subheading text-fipch-orange">OUR VISION</h1>
            <p className="text-lg text-justify md:text-xl text-fipch-grey">
            To <span className='font-bold'>create a repository and exposition of Jain values</span>, discuss the <span className='font-bold'>impact</span> of its thought <span className='font-bold'>on the ethical and cultural values of Indian philosophy</span>, exhibit the role of Jainism in the evolution of pan-Indian culture, while showcasing the <span className='font-bold'>depth, diversity, and contemporary relevance of Jain culture</span>, and the <span className='font-bold'>timelessness and universal appeal of Jain thoughts</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
