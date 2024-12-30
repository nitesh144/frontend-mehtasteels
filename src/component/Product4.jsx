import React from 'react';
import { Building2, Warehouse, Building } from 'lucide-react';
import Structural from '../images/structural-steel.jpg'
import { FaBridgeLock } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

const ProductShowcase = () => {
  return (
    <>
      <Helmet>
        <title>Premium Quality Structural Steel | Angle, Channel, and Beam Steel</title>
        <meta name="description" content="Explore high-quality structural steel including angles, channels, and beams. Perfect for heavy-duty construction, engineering, and fabrication projects. Available in a variety of sizes (5 meter - 12 meter) and grades to meet your needs." />
        <meta name="keywords" content="Structural Steel, Angle Steel, Channel Steel, Beam Steel, Construction Steel, Heavy Duty Steel, Industrial Steel, Steel for Fabrication, Premium Steel Materials, SAIL Structural Steel, JSPL Steel, TATA Structural Steel" />
        <meta property="og:title" content="Premium Quality Structural Steel | Angle, Channel, and Beam Steel" />
        <meta property="og:description" content="Shop high-grade structural steel, including angles, channels, and beams, for your construction, industrial, and engineering projects." />
        <meta property="og:image" content="https://mehtasteels.in/images/structural-steel.jpg" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High-Quality Structural Steel for Construction and Engineering" />
        <meta name="twitter:description" content="Discover premium angle, channel, and beam steel for construction, fabrication, and heavy-duty industrial projects." />
        <meta name="twitter:image" content="https://mehtasteels.in/images/structural-steel.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Structural Steel (Angle, Channel, Beam)",
            "description": "Explore premium quality structural steel including angles, channels, and beams, designed for heavy-duty construction and engineering projects.",
            "image": "https://mehtasteels.in/images/structural-steel.jpg",
            "brand": "Mehta Steels",
            "material": "Steel",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "Varies",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Mehta Steels"
              }
            }
          })}
        </script>
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Container */}
          <div className="relative h-[400px] rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0 h-full">
              {/* Content Section */}
              <div className="relative z-10 p-6">
                <div className="h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center">
                      <Building2 className="text-white" size={20} />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">Structural Steel</h1>
                      <p className="text-blue-600 text-sm font-medium">Premium Quality Materials</p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Our precision-engineered Structural Steel, including Angle Steel, Channel Steel, and Beam Steel, represents the pinnacle of industrial manufacturing. Designed to meet the rigorous demands of modern construction, engineering, and fabrication projects.
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Length</div>
                      <div className="text-blue-700 text-sm">5mtr - 12mtr</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Item-Name</div>
                      <div className="text-blue-700 text-sm">Angle, Channel, Beam</div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Applications</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: Warehouse, label: "Industrial Buildings", color: "bg-orange-50" },
                        { icon: FaBridgeLock, label: "Bridges & Flyovers", color: "bg-green-50" },
                        { icon: Building, label: "High-Rise Buildings", color: "bg-purple-50" }
                      ].map(({ icon: Icon, label, color }, index) => (
                        <div key={index} className={`${color} rounded-lg p-2 text-center transition-all hover:scale-105`}>
                          <Icon className="mx-auto mb-1" size={20} />
                          <span className="text-xs font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group relative overflow-hidden rounded-lg bg-blue-600 px-6 py-2 text-white text-sm transition-all hover:bg-blue-700 mb-10">

                    <a href='/products/mild-steel-angle'>
                      <span className="relative z-10">Explore Products</span>
                    </a>
                    <div className="absolute inset-0 h-full w-full translate-y-full transform bg-blue-400 transition-transform group-hover:translate-y-0"></div>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative h-full">
                <div className="absolute inset-0 ">
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                </div>
                <div className="relative h-full">
                  <div className="h-full w-full bg-gray-200 overflow-hidden">
                    <img
                      src={Structural}
                      alt="Premium Structural Steel - Angle, Channel, and Beam for Construction Projects"
                      title="High-Quality Structural Steel for Heavy-Duty Applications"
                      className="h-full w-full object-cover"
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;