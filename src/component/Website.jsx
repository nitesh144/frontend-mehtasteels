import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';

const products = [
  "MS Plates (PM, MS, BQ, HT)",
  "Ship Building Plates",
  "Hardox & SAIL Hard",
  "HR Coils & Sheets",
  "Chequered Plates",
  "CR Sheets",
  "MS Beams & Joists",
  "MS Channels",
  "MS Angles",
  "Rounds & Rails",
  "Crane Rails",
  "Imported Rail Profiles",
  "TMT/Rebar/CTD Bars",
  "Steel Scrap (HMS, LMS)"
];

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Mehta Steels</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-900">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
              <a href="#products" className="block px-3 py-2 text-gray-700">Products</a>
              <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your One-Stop Solution for Steel Products
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Mehta Steels provides comprehensive steel solutions with a wide range of high-quality products meeting international standards.
              </p>
              <a href="#contact" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get in Touch <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product}</h3>
                <a href="#contact" className="text-blue-600 inline-flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About Mehta Steels</h2>
              <p className="text-gray-600 mb-6">
                Mehta Steels has emerged as the leading solution provider for all your mild steel product requirements. With years of experience in the industry, we maintain the highest standards of quality and service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="mr-2 text-blue-600" />
                  Quality Assurance
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="mr-2 text-blue-600" />
                  Wide Product Range
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="mr-2 text-blue-600" />
                  Competitive Pricing
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="mr-2 text-blue-600" />
                  Timely Delivery
                </li>
              </ul>
            </div>
            <div className="bg-blue-900 h-64 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-900 mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+1 234 567 8900</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-900 mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@mehtasteels.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mehta Steels</h3>
              <p className="text-gray-400">
                Your trusted partner in steel solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mehta Steels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;