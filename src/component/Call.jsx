import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const CallButton = () => {
  return (
    <div>
      <a
        href="tel:+7880105811"
        className="fixed bottom-[10px] right-3 bg-blue-500 rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-300 z-50"
        aria-label="Call Us"
      >
        <FaPhone className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default CallButton;
