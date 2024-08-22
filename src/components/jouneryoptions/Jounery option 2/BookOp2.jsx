


import React from 'react';

const BookOp2 = () => {
  return (
    <div className="flex flex-col items-center space-y-4 pt-5">
      {/* Important Guidelines Button */}
      <button className="border-[2px] text-xl text-fipch-pink border-fipch-pink py-2 px-6 rounded-md  font-semibold tracking-wide">
        IMPORTANT GUIDELINES
      </button>

      {/* Book Now Button */}
      <button className="bg-gradient-to-r from-[#f15a22] to-[#fcb415] text-white py-2 px-6 rounded-md text-xl font-semibold tracking-wide hover:opacity-90">
        BOOK NOW
      </button>
    </div>
  );
};

export default BookOp2;
