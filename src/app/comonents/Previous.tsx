import React from 'react';

const Previous = () => {
  return (
    <div
      className="flex flex-col lg:flex-row bg-vibe min-h-screen w-full"
    >
      <div className="flex-1 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
        {/* Left Side Content */}
        <span className="text-xl font-bold">Left Side</span>
      </div>
      <div className="flex-1 p-8 flex items-center justify-center">
        {/* Right Side Content */}
        <span className="text-xl font-bold">Right Side</span>
        
      </div>
    </div>
  );
};

export default Previous;