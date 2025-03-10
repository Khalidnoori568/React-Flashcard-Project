import React, { useState } from 'react';

const Flashcard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-200">
     
      <div
        className="relative w-64 h-40 cursor-pointer perspective"
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-500 transform-style-3d ${
            flipped ? 'rotate-y-180' : 'rotate-y-0'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        {/* Back Side */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-500 transform-style-3d ${
            flipped ? 'rotate-y-0' : 'rotate-y-180'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;