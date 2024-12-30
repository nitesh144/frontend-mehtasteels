import React from 'react';
import { Container, Building, Hammer } from 'lucide-react';
import plate from '../images/mild-steel-plates.jpg';
import { FaBridge } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

const ProductShowcase = () => {
  return (
    <>
      <Helmet>
        <title>High-Quality Mild Steel Plates | MS Plate </title>
        <meta
          name="description"
          content="Discover premium quality Mild Steel Plates, ideal for heavy structures, bridge works, and fabrication. Available in thicknesses ranging from 3.15mm to 150mm."
        />
        <meta
          name="keywords"
          content="Mild Steel Plates,MS Plate, Steel Plate, Heavy Structures, Bridge Works, Fabrication, Premium Materials, SAIL Steel Plates, JSPL, TATA Steels"
        />
        <meta property="og:title" content="Mild Steel Plates | Premium Construction Materials" />
        <meta
          property="og:description"
          content="Shop top-grade MS plates for modern construction, heavy-duty structures, and engineering projects."
        />
        <meta property="og:image" content="https://mehtasteels.in/images/mild-steel-plates.jpg" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Quality Mild Steel Plates" />
        <meta
          name="twitter:description"
          content="Precision-engineered MS plates crafted for bridge works, heavy structures, and fabrication."
        />
        <meta name="twitter:image" content="https://mehtasteels.in/images/mild-steel-plates.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Mild Steel Plates",
            description:
              "Explore high-quality Mild Steel Plates, ideal for heavy structures, bridge construction, and fabrication projects.",
            image: "https://mehtasteels.in/images/mild-steel-plates.jpg",
            brand: "Mehta Steels",
            material: "Mild Steel",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "Varies",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Mehta Steels",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="p-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Container */}
          <div className="relative h-[400px] rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
                  backgroundSize: '30px 30px',
                }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0 h-full">
              {/* Content Section */}
              <div className="relative z-10 p-6">
                <div className="h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center">
                      <Container className="text-white" size={20} />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">Mild Steel Plates</h1>
                      <p className="text-blue-600 text-sm font-medium">Premium Quality Plates</p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Mehta Steels high-quality Mild Steel Plates are precision-engineered for use in heavy structures,
                    bridge works, and fabrication projects. Crafted using premium materials from trusted
                    brands like SAIL, JSPL, and TATA, these plates are available in thicknesses from 3.15mm to 150mm.
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Thickness</div>
                      <div className="text-blue-700 text-sm">3.15mm - 150mm</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Material Make</div>
                      <div className="text-blue-700 text-sm">SAIL, JSPL, NMDC, RINL, TATA</div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h2 className="text-sm font-semibold text-gray-900 mb-2"> Applications</h2>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: Building, label: 'Heavy Structures', color: 'bg-orange-50' },
                        { icon: FaBridge, label: 'Bridge Works', color: 'bg-green-50' },
                        { icon: Hammer, label: 'Fabrication', color: 'bg-purple-50' },
                      ].map(({ icon: Icon, label, color }, index) => (
                        <div
                          key={index}
                          className={`${color} rounded-lg p-2 text-center transition-all hover:scale-105`}
                        >
                          <Icon className="mx-auto mb-1" size={20} />
                          <span className="text-xs font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href="/products/mild-steel-plates">
                    <button className="group relative overflow-hidden rounded-lg bg-blue-600 px-6 py-2 text-white text-sm transition-all hover:bg-blue-700">
                      <span className="relative z-10">Explore Products</span>
                      <div className="absolute inset-0 h-full w-full translate-y-full transform bg-blue-400 transition-transform group-hover:translate-y-0"></div>
                    </button>
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative h-full">
                <div className="absolute inset-0 ">
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                      }}
                    ></div>
                  </div>
                </div>
                <div className="relative h-full ">
                  <div className="h-full w-full bg-gray-200 overflow-hidden">
                    <img
                      src={plate}
                      alt="High-Quality Mild Steel Plates for Heavy Structures and Construction"
                      title="Premium Quality Mild Steel Plates"
                      loading="lazy"
                      className="h-full w-full object-cover"
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
