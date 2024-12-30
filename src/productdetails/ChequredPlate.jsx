import React, { useState } from 'react';
import { ChevronDown, Wrench, Box, ShieldCheck, Anchor, Building, Car, Waves, PenTool } from 'lucide-react';
import chequeredplate1 from '../images/chequered-plate-for-flooring.png'
import chequeredplate2 from '../images/chequered-plate-for-industry.png'
import chequeredplate3 from '../assets/CHEQUERED-PLATE.jpg'
import { Helmet } from 'react-helmet';

const ChequeredPlatePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSection, setActiveSection] = useState(null);

  const applications = [
    {
      title: 'Industrial',
      icon: <Wrench className="w-6 h-6" />,
      items: ['Safety Flooring', 'Industrial Floors', 'Machine Guards', 'Workbenches']
    },
    {
      title: 'Automotive',
      icon: <Car className="w-6 h-6" />,
      items: ['Vehicle Flooring', 'Truck Bed Linings', 'Safety Barriers']
    },
    {
      title: 'Construction',
      icon: <Building className="w-6 h-6" />,
      items: ['Staircases', 'Ladders', 'Elevators', 'Platforms']
    },
    {
      title: 'Marine',
      icon: <Anchor className="w-6 h-6" />,
      items: ['Boat Decks', 'Marine Walkways', 'Dock Areas']
    }
  ];

  const galleryImages = [chequeredplate1, chequeredplate2, chequeredplate3]

  const materials = [
    {
      name: 'Mild Steel',
      description: 'Cost-effective option with excellent strength for industrial applications',
      features: ['High Strength', 'Cost-Effective', 'Widely Available']
    },
    {
      name: 'Stainless Steel',
      description: 'Superior corrosion resistance for harsh environments',
      features: ['Corrosion Resistant', 'Durable', 'Premium Finish']
    },
    {
      name: 'Aluminum',
      description: 'Lightweight solution with natural corrosion resistance',
      features: ['Lightweight', 'Corrosion Resistant', 'Modern Appearance']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-proxima">

      <Helmet>
        <title>Chequered Plates: Premium Quality for Industrial Applications</title>
        <meta
          name="description"
          content="Discover premium quality chequered plates designed for safety, durability, and aesthetic appeal. Explore materials, applications, and gallery."
        />
        <meta
          name="keywords"
          content="chequered plates, industrial flooring, automotive applications, construction materials, marine decks"
        />
        <meta name="author" content="Mehta Steels" />
      </Helmet>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg max-w-7xl mt-10 ml-[100px]">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-4">Chequered Plate</h1>
          <p className="text-xl text-blue-100">
            Premium quality chequered plates featuring enhanced grip, durability, and versatile applications
            for industrial and commercial use.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container max-w-6xl ml-16 p-10">
        {/* Navigation Tabs */}
        <nav aria-label='Tabs' className="flex space-x-4 mb-8 border-b">
          {['overview', 'materials', 'applications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 font-medium transition-colors relative
                ${activeTab === tab ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </nav>

        {/* Content Sections */}
        <section className="grid gap-8">
          {/* Overview Section */}
          {activeTab === 'overview' && (
            <article className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chequered plates, also known as tread plates or diamond plates, are specialized metal sheets
                featuring raised patterns for enhanced grip and durability. These versatile materials are
                essential in various industries where safety and reliability are paramount.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Safety First</h3>
                  <p className="text-gray-600">Enhanced grip and slip resistance for secure footing</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Box className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Durability</h3>
                  <p className="text-gray-600">Built to withstand heavy loads and frequent use</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <PenTool className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Design</h3>
                  <p className="text-gray-600">Aesthetic appeal with functional benefits</p>
                </div>
              </div>
            </article>
          )}

          {/* Materials Section */}
          {activeTab === 'materials' && (
            <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {materials.map((material) => (
                <div key={material.name} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-3">{material.name}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  <ul className="space-y-2">
                    {material.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          )}

          {/* Applications Section */}
          {activeTab === 'applications' && (
            <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app) => (
                <div
                  key={app.title}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  onMouseEnter={() => setActiveSection(app.title)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-600">{app.icon}</div>
                    <h3 className="text-xl font-semibold">{app.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {app.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-600 transition-transform hover:translate-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          )}
        </section>
      </div>

      {/* Gallery */}
      <section className="bg-white rounded-xl shadow-lg p-6 max-w-7xl ml-[100px]">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Gallery</h3>
        <div className="grid grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-video hover:opacity-75 transition-opacity">
              <img
                src={src}
                alt={`Chequered plate application ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChequeredPlatePage;