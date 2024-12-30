import React, { useState } from 'react';
import {
  Building2,
  Warehouse,
  Truck,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  Filter
} from 'lucide-react';

import yard from '../images/plates.jpg'
import hydra from '../images/plates.jpg'
import expert from '../images/mehta_expert.png'
import office from '../images/office.png.jpg'
import Yard from '../images/yard_mehta.png'
import video from '../../public/videoplayback.webm'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Gallery categories
  const categories = [
    { id: 'all', label: 'All', icon: Building2 },
    { id: 'infrastructure', label: 'Infrastructure', icon: Warehouse },
    { id: 'logistics', label: 'Logistics', icon: Truck },
    { id: 'team', label: 'Our Team', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  // Gallery items with placeholders
  const galleryItems = [
    {
      id: 1,
      category: 'infrastructure',
      title: '50,000 sq. ft. Stockyard',
      description: 'Our expansive stockyard facility equipped with modern handling equipment',
      image: yard,
    },
    {
      id: 2,
      category: 'infrastructure',
      title: 'Modern Office',
      description: 'State-of-the-art IT-enabled office space',
      image: office,
    },
    {
      id: 3,
      category: 'logistics',
      title: 'Mobile Cranes',
      description: 'Advanced mobile cranes for efficient material handling',
      image: hydra,
    },
    {
      id: 4,
      category: 'infrastructure',
      title: 'Testing Facility',
      description: 'Ultrasonic testing capabilities for quality assurance',
      image: '/api/placeholder/800/600',
    },
    {
      id: 5,
      category: 'team',
      title: 'Expert Team',
      description: 'Our dedicated professionals ensuring quality service',
      image: expert,
    },
    {
      id: 6,
      category: 'achievements',
      title: 'Industry Recognition',
      description: 'Awards and certifications for excellence in steel trading',
      image: '/api/placeholder/800/600',
    },
    {
      id: 7,
      category: 'infrastructure',
      title: 'Stockyard',
      description: 'Awards and certifications for excellence in steel trading',
      image: Yard,
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrevImage = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90">Explore Our Facilities and Achievements</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="rounded-lg shadow-lg overflow-hidden animate-slide-in-right">
        <iframe
          className="w-full h-60 lg:h-[650px] "
          src= {video}

          title="Mild Steel Products"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Filters */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          {/* Mobile Filter Button */}
          <div className="md:hidden py-4">
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="flex items-center space-x-2 text-gray-600"
            >
              <Filter size={20} />
              <span>Filter Gallery</span>
            </button>
          </div>

          {/* Filter Categories */}
          <div className={`md:flex md:space-x-4 py-4 ${isFilterMenuOpen ? 'block' : 'hidden md:flex'}`}>
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveFilter(id);
                  setIsFilterMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all
                  ${activeFilter === id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={36} />
          </button>

          <div className="max-w-4xl mx-4">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto"
            />
            <div className="text-white mt-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
