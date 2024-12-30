import React from 'react';
import hero from '../images/sir.jpg';

function Achievement() {
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Text */}
        <div className="text-center md:text-left md:ml-16 space-y-4">
          <h2 className="text-4xl font-bold">Padma Vibhushan</h2>
          <h3 className="text-3xl font-semibold bg-blue-600 inline-block px-4 py-2 rounded-lg mt-2">
            Name
          </h3>
          <p className="text-xl mt-4">28.12.1964 – 09.10.2024</p>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <img className="h-[500px] w-auto rounded-lg shadow-lg bg-transparent" src={hero} alt="Hero Image" />
        </div>
        
      </div>
    </div>
  );
}

export default Achievement;
