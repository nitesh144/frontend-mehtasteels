// import React from 'react';
// import { motion } from 'framer-motion';
// import { Building2, TrendingUp, Truck, Users, CheckCircle2 } from 'lucide-react';

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// const WhoWeAreSection = () => {
//   const highlights = [
//     {
//       icon: Building2,
//       stat: "30+",
//       title: "Years of Excellence",
//       description: "Decades of trusted steel trading expertise"
//     },
//     {
//       icon: TrendingUp,
//       stat: "50K+",
//       title: "MT Annual Volume",
//       description: "Consistent high-volume delivery capability"
//     },
//     // {
//     //   icon: Truck,
//     //   stat: "20+",
//     //   title: "Countries Served",
//     //   description: "Global presence across continents"
//     // },
//     {
//       icon: Users,
//       stat: "1000+",
//       title: "Happy Clients",
//       description: "Long-term partnerships built on trust"
//     }
//   ];

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       variants={fadeIn}
//       className="relative py-24 bg-gradient-to-r from-blue-800 to-blue-600"
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center text-white mb-16">
//           <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
//           <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
//             Mehta Steels is a pioneering force in the steel trading industry, dedicated to delivering high-quality steel solutions with integrity and innovation. With more than 3 decades of experience and a forward-thinking approach, we empower industries worldwide through simplified steel procurement and exceptional service.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {["ISO 9001:2015 Certified", "BIS Certified", "SAIL Authorized"].map((certification, index) => (
//               <div key={index} className="flex items-center bg-white/10 rounded-full px-6 py-2">
//                 <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
//                 <span className="text-sm font-medium">{certification}</span>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {highlights.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
//             >
//               <div className="flex justify-center mb-4">
//                 <item.icon className="w-10 h-10 text-blue-200" />
//               </div>
//               <h3 className="text-3xl font-bold mb-2 text-blue-100">{item.stat}</h3>
//               <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
//               <p className="text-sm text-blue-100">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="inline-block bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl"
//           >
//             <p className="text-lg italic text-blue-100">
//               "Our mission is to be the most trusted name in steel trading, delivering value through quality products, innovative solutions, and unwavering commitment to customer success."
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default WhoWeAreSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhoWeAreSection = () => {
  const highlights = [
    {
      icon: Building2,
      stat: "30+",
      title: "Years of Excellence",
      description: "Decades of trusted steel trading expertise built on integrity and innovation.",
    },
    {
      icon: TrendingUp,
      stat: "50K+",
      title: "MT Annual Volume",
      description: "A reliable partner with the capability to deliver consistently high volumes.",
    },
    {
      icon: Users,
      stat: "1000+",
      title: "Happy Clients",
      description: "Long-term partnerships forged through trust and exceptional service.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "BIS Certified",
    "SAIL Authorized",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={fadeIn}
      className="relative py-8 bg-gradient-to-r from-blue-900 to-blue-900 font-proxima"
    >
      <div className="max-w-7xl mx-auto px-4 font-proxima">
        {/* Section Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Mehta Steels has been a pioneering force in the steel trading industry for over three decades. Guided by the principles of quality, integrity, and innovation, we deliver exceptional steel solutions that empower industries and foster long-term success.
          </p>
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {certifications.map((certification, index) => (
              <div
                key={index}
                className="flex items-center bg-white/10 rounded-full px-6 py-2"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm font-medium">{certification}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <item.icon className="w-10 h-10 text-blue-200" />
              </div>
              {/* Stat */}
              <h3 className="text-3xl font-bold mb-2 text-blue-100">{item.stat}</h3>
              {/* Title */}
              <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
              {/* Description */}
              <p className="text-sm text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl"
          >
            <p className="text-lg italic text-blue-100">
            "Guided by the teachings of the Bhagavad Gita, our mission is to be the most trusted name in steel trading, delivering value through quality products, innovative solutions, and an unwavering commitment to customer success, recognizing that our true purpose lies in selfless service, integrity, and the continuous pursuit of excellence."            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoWeAreSection;
