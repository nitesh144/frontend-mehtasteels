import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Box, Building2, Factory, Package } from 'lucide-react';
import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {Helmet} from "react-helmet";

import MSPlate from '../images/MS-Plate.jpg'
import MSPlates from '../images/steel-plate-for-industry.jpg'
import MSChannel from '../images/mild-steel-channel-for-bridge.jpg'
import HRCoil from '../images/hot-rolled-coil.jpg'
import MSAngle from '../images/mild-steel-angles.png'
import MSBeam from '../images/mild-steel-beam.png'
import Rail from '../images/crane-rails.jpg'

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('all');


  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'plates', name: 'Steel Plates' },
    { id: 'sheets', name: 'Steel Sheets' },
    { id: 'rails', name: 'Crane Rails' },
    { id: 'structural', name: 'Structural Steel' }
  ];

  const ProductSlider = () => {
    const images = [
      { id: 1, src: MSPlate, alt: 'Mild Steel Plate' },
      { id: 2, src: MSPlates, alt: 'Steel Plate with Hydra' },
      { id: 3, src: MSChannel, alt: 'Mild Steel Channel' },
      { id: 4, src: HRCoil, alt: 'Hot Rolled Coil' },
      { id: 5, src: MSAngle, alt: 'Mild Steel Angle' },
      { id: 6, src: MSBeam, alt: 'Mild Steel Beam' },
      { id: 7, src: Rail, alt: 'Rail' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, [images.length]);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    useEffect(() => {
      let interval;
      if (isAutoPlaying) {
        interval = setInterval(() => {
          nextSlide();
        }, 3000);
      }
      return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
      <div className="relative w-full mx-auto mt-3">
        {/* Main slider container */}
        <div className="relative h-[500px] overflow-hidden shadow-xl">
          {/* Image container with transition */}
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image) => (
              <div key={image.id} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
                {/* Image name overlay */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-2xl mb-2 font-proxima font-bold px-3 py-1 rounded-lg shadow-lg">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${currentIndex === index
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-lg transition-all duration-200"
          >
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    );
  };

  const SteelProduct = () => {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleNavigate = (path) => {
      navigate(path);
    };

    const flatProducts = [
      { name: 'Mild Steel Plates', path: '/products/mild-steel-plates' },
      { name: 'Boiler Quality Plates', path: '/products/boiler-quality-plates' },
      { name: 'High Tensile Plates', path: '/products/high-tensile-plates' },
      { name: 'Hot Rolled Sheets', path: '/products/hot-rolled-sheets-and-hr-coils' },
      { name: 'Chequered Plates', path: '/products/chequered-plates' },
      { name: 'Hard Plates', path: '/products/hard-plates' },
    ];

    const longProducts = [
      { name: 'Crane Rails', path: '/products/crane-rails' },
      { name: 'Rails', path: '/products/rails' },
      { name: 'Mild Steel Angle', path: '/products/mild-steel-angle' },
      { name: 'MS Beam', path: '/products/ms-beam' },
      { name: 'MS Channel', path: '/products/ms-channel' },
      { name: 'RS Joist', path: '/products/rs-joist' },
      { name: 'H Beam', path: '/products/h-beam' },
      { name: 'MS Flats', path: '/products/ms-flats' },
      { name: 'MS Unequal Angle', path: '/products/ms-unequal-angle' },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className="text-center relative z-10">
              <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                Mehta Steels
                <span className="block text-3xl mt-2 text-blue-200">Premium Mild Steel Products Supplier</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                A leading supplier of mild steel (MS) plates, offering comprehensive solutions for diverse industrial applications with focus on quality, reliability, and customer satisfaction.
              </p>
            </div>
            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
              <Package className="w-96 h-96" />
            </div> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-800 leading-tight">
                Your Trusted Source for
                <span className="block">MS Plates and Steel Products</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We maintain a vast inventory of high-quality mild steel plates, boiler quality plates (BQ plates), and high tensile plates (HT plates) sourced from the most reliable mills worldwide, ensuring quick availability and exceptional durability for your projects.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {['Structural steel plates', 'High tensile steel plates', 'Boiler quality steel plates', 'Pressure vessel quality steel plates', 'Shipbuilding steel plates'].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-100 p-6 rounded-xl h-48 transform hover:scale-105 transition-all duration-300">
                  <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-blue-800">Structural Excellence</h3>
                  <p className="text-sm text-gray-600 mt-2">Engineered for maximum strength and durability</p>
                </div>
                <div className="bg-blue-200 p-6 rounded-xl h-48 transform hover:scale-105 transition-all duration-300">
                  <Box className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-blue-800">Premium Quality</h3>
                  <p className="text-sm text-gray-600 mt-2">Superior grade materials for lasting performance</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-blue-300 p-6 rounded-xl h-48 transform hover:scale-105 transition-all duration-300">
                  <Factory className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-blue-800">Industrial Grade</h3>
                  <p className="text-sm text-gray-600 mt-2">Built for demanding industrial applications</p>
                </div>
                <div className="bg-blue-400 p-6 rounded-xl h-48 transform hover:scale-105 transition-all duration-300">
                  <Package className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-white">Diverse Range</h3>
                  <p className="text-sm text-blue-50 mt-2">Comprehensive selection for every need</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-16">
            <h2 className="text-4xl font-bold text-center text-blue-800">
              Hot Rolled Steel Products
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Flat Products */}
              <div
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-8 shadow-lg"
                onMouseEnter={() => setHoveredCard('flat')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    Hot Rolled Flat Steel Products
                  </h3>
                  <ul className="space-y-3">
                    {flatProducts.map((product, index) => (
                      <li
                        key={index}
                        onClick={() => product.path && handleNavigate(product.path)}
                        className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${product.path ? 'hover:translate-x-2' : ''
                          }`}
                      >
                        <ArrowRight className={`w-5 h-5 ${product.path ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span className={product.path ? 'text-blue-700 hover:text-blue-900' : 'text-gray-500'}>
                          {product.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`absolute right-0 bottom-0 w-32 h-32 transition-transform duration-500 ${hoveredCard === 'flat' ? 'translate-x-0 translate-y-0' : 'translate-x-8 translate-y-8'
                  }`}>
                  <Package className="w-full h-full text-blue-300 opacity-30" />
                </div>
              </div>

              {/* Long Products */}
              <div
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-200 to-blue-300 p-8 shadow-lg"
                onMouseEnter={() => setHoveredCard('long')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    Hot Rolled Long Steel Products
                  </h3>
                  <ul className="space-y-3">
                    {longProducts.map((product, index) => (
                      <li
                        key={index}
                        onClick={() => product.path && handleNavigate(product.path)}
                        className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${product.path ? 'hover:translate-x-2' : ''
                          }`}
                      >
                        <ArrowRight className={`w-5 h-5 ${product.path ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span className={product.path ? 'text-blue-700 hover:text-blue-900' : 'text-gray-500'}>
                          {product.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`absolute right-0 bottom-0 w-32 h-32 transition-transform duration-500 ${hoveredCard === 'long' ? 'translate-x-0 translate-y-0' : 'translate-x-8 translate-y-8'
                  }`}>
                  <Package className="w-full h-full text-blue-400 opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CTASection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contactus'); // Adjust the path to match your Contact page route
    };

    return (
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 m-5">
        <div className="max-w-xl mx-auto text-center text-white space-y-4">
          <h2 className="text-3xl font-bold">Need Custom Steel Plates?</h2>
          <p>Explore our premium steel product and find the perfect fit for your industry needs.</p>
          <button
            onClick={handleContactClick}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Contact us
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Premium Mild Steel Products Supplier | Mehta Steels Bhilai</title>
        <meta name="description" content="Discover high-quality mild steel plates, sheets, and structural steel products at Mehta Steels. Your trusted supplier for industrial applications." />
        <meta name="keywords" content="Mild Steel Plates, Steel Sheets, Crane Rails, Structural Steel, Mehta Steels" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Premium Mild Steel Products Supplier" />
        <meta property="og:description" content="Explore our range of premium mild steel products including plates, sheets, and structural steel." />
        <meta property="og:image" content="https://mehtasteels.in/images/mild-steel-plates.jpg" />
        <meta property="og:url" content="https://mehtasteels.in/products" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Mild Steel Products Supplier" />
        <meta name="twitter:description" content="Explore our range of premium mild steel products including plates, sheets, and structural steel." />
        <meta name="twitter:image" content="https://mehtasteels.in/images/mild-steel-plates.jpg" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Premium Mild Steel Products Supplier",
            "description": "Discover high-quality mild steel plates, sheets, and structural steel products at Mehta Steels.",
            "image": "https://mehtasteels.in/images/mild-steel-plates.jpg",
            "url": "https://mehtasteels.in/products"
          }
          `}
        </script>
      </Helmet>
      <div className="space-y-12">
        <ProductSlider />
        <SteelProduct />
        <div className="max-w-7xl mx-auto px-4">
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
