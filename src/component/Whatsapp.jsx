
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const Whatsapp = () => {
  return (
    <div>
      <a href="https://wa.me/7880105811"
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-[65px] right-3 bg-green-500 rounded-full p-4 mb-2 shadow-lg hover:bg-green-600 transition duration-300 z-50'
        aria-label='Chat on Whatsapp'
      >
        <FaWhatsapp className='text-white text-2xl' />
      </a>
    </div>
  );
}

export default Whatsapp

