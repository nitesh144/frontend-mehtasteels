import { Factory, MapPin, Star, Users } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

const WhyCard = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out h-full 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
      role="region"
      aria-labelledby={`card-title-${index}`}
    >
      <div className="relative group h-full">
        <div
          className="bg-white h-full relative p-8 rounded-lg transition-all duration-300 
            group-hover:bg-gradient-to-br from-blue-500 to-blue-700 
            border border-gray-200 group-hover:border-blue-400"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-tr-full opacity-20" />

          {/* Icon Container */}
          <div className="relative">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 
                rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"
            />
            <div
              className="relative bg-white p-4 rounded-full inline-block 
                group-hover:bg-gradient-to-r from-blue-600 to-blue-400 
                transition-all duration-300"
            >
              {React.cloneElement(icon, {
                className: 'text-blue-600 group-hover:text-white transition-colors duration-300',
                alt: title,
              })}
            </div>
          </div>

          {/* Content */}
          <h3
            id={`card-title-${index}`}
            className="text-xl font-bold mt-6 mb-4 text-gray-800 
              group-hover:text-white transition-colors duration-300"
          >
            {title}
          </h3>
          <p
            className="text-gray-600 group-hover:text-gray-100 
              transition-colors duration-300 leading-relaxed text-justify text-md"
          >
            {description}
          </p>

          {/* Decorative Line */}
          <div
            className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r 
              from-blue-400 to-blue-600 group-hover:w-full transition-all 
              duration-500 ease-out"
          />
        </div>
      </div>
    </article>
  );
};

const Why = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const advantages = [
    {
      icon: <Factory size={32} />,
      title: 'State-of-the-Art Infrastructure',
      description:
        'We ensure every steel product is crafted with precision and purpose, adhering to the highest quality standards. By integrating excellence into every step of production.',
    },
    {
      icon: <Users size={32} />,
      title: 'Dedicated Team',
      description:
        'Our skilled team is dedicated to delivering high-quality steel solutions with precision and commitment. Emphasizing teamwork and excellence.',
    },
    {
      icon: <Star size={32} />,
      title: 'Certified Quality',
      description:
        'ISO-certified steel products reflect our unwavering commitment to excellence. We ensure that every steel solution meets the highest industry standards, delivering reliable and durable performance.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Nationwide Network',
      description:
        'Our robust logistics network ensures the timely delivery of high-quality steel products across India. With a commitment to seamless service and reliable performance.',
    },
  ];

  return (
    <section
      className="relative bg-gray-50 py-24 overflow-hidden font-proxima"
      aria-labelledby="why-header"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <header
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out 
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          id="why-header"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span
              className="bg-gradient-to-r from-blue-600 to-blue-800 
                bg-clip-text text-transparent"
            >
              Why Choose Mehta Steels
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Guided by the timeless principles of the Bhagavad Gita, Mehta Steels combines duty,
            quality, and innovation to deliver excellence.
          </p>
        </header>

        {/* Key Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl ml-[90px]">
          {advantages.map((item, index) => (
            <WhyCard
              key={index}
              index={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
