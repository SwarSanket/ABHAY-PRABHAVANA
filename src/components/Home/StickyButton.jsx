// src/component/StickyButton.js
import React from 'react';

const StickyButton = () => {
  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 px-10 py-3 font-bold text-white bg-gradient-to-br from-[#f15a22] to-[#fcb415] rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
    >
   Book Now
    </button>
  );
};

export default StickyButton;
