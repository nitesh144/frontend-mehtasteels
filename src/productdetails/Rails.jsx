import Rails1 from '../assets/rails-for-industry.png';
import Rails2 from '../assets/Rails.png';
import Rails3 from '../assets/rail3.png';

import React, { useState } from 'react';
import { Train, Mail, ChevronRight, Package } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Rails = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const images = [Rails1, Rails2, Rails3];

  const railSpecs = [
    {
      profile: "UIC 60",
      weight: "60.34",
      topWidth: "72",
      baseWidth: "150",
      height: "172",
      webWidth: "18"
    },
    {
      profile: "IRS 52",
      weight: "51.89",
      topWidth: "67",
      baseWidth: "136",
      height: "156",
      webWidth: "15.5"
    }
  ];

  const metaKeywords =
    "IU Rails, Industrial Rails, Steel Rails, Mehta Steels, Heavy Rails, Light Rails, RITES Inspected T-12 Rails, Bhilai Steel Trading";
  const metaDescription =
    "Mehta Steels is one of the oldest steel trading companies in Bhilai, offering high-quality heavy rails, light rails, and IU rails. Contact us for custom lengths and industrial use rails.";
  const metaTitle = "Industrial Rails - Mehta Steels";
  return (
    <>
      <Helmet>
        <title>Rails | Mehta Steels</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content="Mehta Steels" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}

        <header className="relative rounded-2xl max-w-7xl mt-10 ml-[120px] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6">Rails</h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Mehta steels is stockist of rails
            </p>
          </div>
          {/* <div className="absolute -right-20 -bottom-20 opacity-10">
              <Package className="w-96 h-96" />
            </div> */}
        </header>

        <div className="max-w-7xl mx-auto py-12 px-6">
          {/* Main Content */}
          <section
            aria-labelledby="about-rails" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mehta steels is one of the oldest steel trading companies in Bhilai
                maintaining ready stock of prime heavy rails, light rails, iu rails & Rites
                inspected t 12 rails manufactured by renowned mills across the globe.
              </p>
            </div>
          </section>

          {/* IU Rails Section */}
          <section
            aria-labelledby="about-rails" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-2 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">
                I.U.rails or industrial use rails
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              The rails manufactured for the use in Industries are called industrial use
              rails or IU rails. Following are the dimensions available with Mehta Steels
              of I.U. rails:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Available Lengths</h3>
              <p className="text-gray-700">
                The iu rails are available in the 10 to 13 meters in length in ready Stock
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Custom Lengths</h3>
              <p className="text-gray-700 flex items-center gap-2">
                The Custom Lengths are considered as special orders for further details write to us at:
                <a
                  href="mailto:ankit.mehta@mehtasteels.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium gap-1"
                >
                  <Mail className="w-4 h-4" />
                  ankit.mehta@mehtasteels.com
                </a>
              </p>
            </div>

            {/* Specifications Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    {['Profile', 'Weight Kg/Mtrs', 'Top Width (mm)', 'Base Width (mm)', 'Height Width(mm)', 'Web Width(mm)'].map((header) => (
                      <th key={header} className="px-6 py-4 text-sm font-semibold text-gray-700">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {railSpecs.map((spec, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-blue-600">{spec.profile}</td>
                      <td className="px-6 py-4">{spec.weight}</td>
                      <td className="px-6 py-4">{spec.topWidth}</td>
                      <td className="px-6 py-4">{spec.baseWidth}</td>
                      <td className="px-6 py-4">{spec.height}</td>
                      <td className="px-6 py-4">{spec.webWidth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Image Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src={image}
                    alt={`Rail ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hoveredImage === index ? 'opacity-100' : 'opacity-0'}`}>
                    {/* <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">Rail Image {index + 1}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Rails;