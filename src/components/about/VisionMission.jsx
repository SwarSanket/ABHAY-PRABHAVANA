import React from 'react';

const MissionVision = () => {
  return (
    <div className="bg-[#f7f5f5] w-full">
      <div className="container px-4 py-20 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-1 md:col-span-5">
            <h1 className="mb-4 text-3xl font-bold text-fipch-subheading text-fipch-orange">OUR MISSION</h1>
            <ul className="pl-4 space-y-2 text-lg text-justify list-disc list-outside md:text-xl text-fipch-grey">
              <li>To provide ease of access to Jain thought, belief and history to the general public.</li>
              <li>Instill pride in Jain visitors by showcasing the heritage, aesthetic and educational value of their religion.</li>
              <li>To showcase the synergy between Jain deductive logic and Modern empirical science, and in turn highlight the contemporary relevance and day-to-day applicability of Jain thoughts.</li>
              <li>Show contribution to varied fields of humanism, law and politics, trade & commerce, etc.</li>
              <li>Document Jain History by displaying digital records & create a research base for interested persons, encouraging the visitor to explore and delve deeper in specific areas of interest.</li>
            </ul>
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-1">
            <div className="hidden h-full border-r border-gray-400 md:block"></div>
            <div className="block w-full h-px border-t border-gray-400 md:hidden"></div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <h1 className="mb-4 font-bold text-fipch-subheading md:text-fipch-subheading text-fipch-orange">OUR VISION</h1>
            <p className="text-lg text-justify md:text-xl text-fipch-grey">
              To create a repository and exposition of Jain values, discuss the impact of its thought on the ethical and cultural values of Indian philosophy, exhibit the role of Jainism in the evolution of pan-Indian culture, while showcasing the depth, diversity, and contemporary relevance of Jain culture, and the timelessness and universal appeal of Jain thoughts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
