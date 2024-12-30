import React from 'react';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const Welcome = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  // const productFeatures = [
  //   { title: "MS plates (PM, MS, BQ, HT)", icon: <Star className="w-4 h-4" /> },
  //   { title: "HR coils & HR sheets", icon: <Star className="w-4 h-4" /> },
  //   { title: "Chequered plates & CR sheets", icon: <Star className="w-4 h-4" /> },
  //   { title: "Light & heavy joists", icon: <Star className="w-4 h-4" /> }
  // ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-teal-800 font-proxima">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Enhanced decorative elements */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-10 w-24 h-24 border-t-4 border-l-4 border-white/30 rounded-tl-2xl"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 right-10 w-24 h-24 border-b-4 border-r-4 border-white/30 rounded-br-2xl"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Your Trusted Partner for High-Quality Mild Steel Solutions
        </h2>
        {/* Welcome text with enhanced typing effect */}
        {/* <motion.div {...fadeIn} className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse mr-4" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center font-serif tracking-tight">
              <ReactTyped
                className="inline-block"
                strings={[
                  `Welcome to M<span class="text-red-400 animate-pulse">e</span>hta Steels`,
                  `Welcome to M<span class="text-red-400 animate-pulse">e</span>hta Steels`
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse ml-4" />
          </div>
        </motion.div> */}

        {/* Enhanced description card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl"
        >
          {/* Glassmorphism card */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
            {/* Gradient accent */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 animate-gradient"></div>

            {/* Content */}
            <div className="relative space-y-8">
              <motion.div {...fadeIn} className="text-center">

                <p className="text-white/90 text-xl leading-relaxed pb-2">
                  <span className="text-bold text-white font-extrabold">Mehta Steels</span> has emerged as the one-stop solution provider for all your mild steel product requirements.
                </p>
                
                <p className="text-white/90 text-xl leading-relaxed justify-normal">At Mehta Steels, we believe that business is not just about transactions but about building enduring 
                relationships based on trust, integrity, and service, values deeply rooted in the timeless wisdom of the Bhagavad Gita. Just as the Gita emphasizes duty, discipline, and dedication,
                 we strive to embody these principles in every aspect of our business, delivering excellence across our extensive range of mild steel products.</p> <br/>
                 <p className="text-white/90 text-xl leading-relaxed justify-normal">Whether you’re a manufacturer, contractor, or trader, Mehta Steels is your reliable partner for all your mild steel plates and structural steel needs. Trust us to deliver top-notch mild steel products, on-time delivery, and exceptional service. Connect with us today and experience the Mehta Steels difference!</p>
              </motion.div>

              {/* Enhanced products grid */}
              {/* <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid md:grid-cols-2 gap-6 mt-8"
              >
                {productFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {feature.icon}
                      </div>
                      <p className="text-lg text-white/90 font-medium">{feature.title}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div> */}

              {/* Enhanced final highlight */}
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;

