
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//     const position = [21.1938, 81.3509]; // Replace with the latitude and longitude of your location

//     return (
//         <div className='pb-5 bg-gradient-to-r from-[#447af9ef] to-[#0df0ed44]' style={{ zIndex: 20, position: 'relative' }}>
//             <h2 className='text-white font-bold m-5 pt-3 text-center text-2xl'>Find Us on Map</h2>
//             <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238034.80178834114!2d81.07999439453124!3d21.220196000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2922583d732955%3A0x766f7722629e14b9!2sMehta%20Steels!5e0!3m2!1sen!2sin!4v1730283365045!5m2!1sen!2sin"
//                 width="100%"
//                 height="400"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//         </div>
//     );
// };

// export default Map;

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Factory, Warehouse, Construction } from 'lucide-react';
import cranerail from '../assets/cranerail.png';
import { FaIndustry } from 'react-icons/fa';

const CraneRail = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftParallelogramX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);
  const rightParallelogramX = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden flex items-center justify-center py-16"
    >
      {/* Subtle Gradient Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content Parallelogram */}
          <motion.div
            style={{
              x: leftParallelogramX,
              opacity: opacity
            }}
            className="transform skew-x-[-4deg] origin-center"
          >
            <div className="bg-white p-10 rounded-3xl shadow-2xl transform -skew-x-[4deg] border-l-6 border-blue-600 transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-bold text-gray-900 flex items-center space-x-4">
                  <Construction className="text-blue-600" size={44} />
                  <span>Crane Rail Systems</span>
                </h2>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Advanced engineering solutions featuring precision-crafted rail systems designed to optimize industrial infrastructure. Our cutting-edge beams provide exceptional structural integrity and performance across diverse construction environments.
              </p>

              {/* Industry Applications Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Warehouse, label: "Industrial Facilities" },
                  { icon: FaIndustry, label: "Manufacturing" },
                  { icon: Factory, label: "Infrastructure" }
                ].map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
                    className="text-center bg-slate-50 p-4 rounded-xl hover:bg-blue-50 transition transform hover:scale-105 group"
                  >
                    <Icon className="mx-auto mb-3 text-blue-600 group-hover:text-blue-700 transition" size={36} />
                    <span className="text-sm text-gray-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 items-center">
                <a 
                  href='/products/crane-rails' 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 group"
                >
                  <span>Explore Details</span>
                  <Construction className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-gray-500 text-sm">Precision Engineering Solutions</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Parallelogram */}
          <motion.div
            style={{
              x: rightParallelogramX,
              opacity: opacity
            }}
            className="transform skew-x-[4deg] origin-center"
          >
            <div className="relative bg-blue-600 rounded-3xl p-2 shadow-2xl transform -skew-x-[4deg] overflow-hidden">
              <div className="relative w-full aspect-video">
                <img
                  src={cranerail}
                  alt="Advanced Crane Rail Systems"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-100 opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default CraneRail;