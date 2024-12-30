import React, { useState } from 'react';
import { Clock, Package, Shield, TrendingUp } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, benefits, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="relative h-[320px] font-proxima perspective-1000 bg-gradient-to-br rounded-lg from-blue-400 via-teal-200 to-blue-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translateY(${index * 20}px)`,
      }}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform-gpu ${
          isHovered ? 'translate-y-[-20px]' : ''
        }`}
      >
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl h-full p-2 shadow-xl overflow-hidden group">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          {/* Icon Container */}
          <div className="relative z-10 mb-6">
            <div className="relative">
              {/* Icon Background */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-[2px] transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                <div className="w-full h-full bg-white rounded-2xl transform -rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 flex items-center justify-center">
                  <Icon
                    className="text-blue-600 transform rotate-0 group-hover:rotate-180 transition-transform duration-700"
                    size={28}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300 text-lg">
              {description}
            </p>

            {/* Benefits List */}
            <ul
              className="space-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100"
              aria-label={`Benefits of ${title}`}
            >
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description:
        'All products meet rigorous IS standards, ensuring top-tier quality and reliability for every delivery.',
      benefits: ['ISO Certified', 'Regular Quality Checks', 'Standard Compliance'],
    },
    {
      icon: Package,
      title: 'Wide Range',
      description:
        'Comprehensive selection of steel products to meet all your industrial and construction needs.',
      benefits: ['Diverse Portfolio', 'Custom Solutions', 'Bulk Options'],
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description:
        'Efficient logistics network ensuring timely delivery and seamless supply chain management.',
      benefits: ['Quick Processing', 'Nationwide Delivery', 'Real-time Tracking'],
    },
    {
      icon: TrendingUp,
      title: 'Market Leaders',
      description:
        'Decades of trusted industry expertise making us your reliable partner in steel solutions.',
      benefits: ['Industry Expertise', 'Market Knowledge', 'Growth Partners'],
    },
  ];

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden font-proxima"
      aria-labelledby="services-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 transform -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 transform translate-y-1/2" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-20">
          <h2
            id="services-heading"
            className="text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Services Excellence
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Delivering premium steel solutions with unmatched quality and service
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
