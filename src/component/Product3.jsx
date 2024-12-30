import React from 'react';
import { Train, Container, Construction } from 'lucide-react';
import Rail from '../images/crane-rails.jpg'
import { Helmet } from 'react-helmet';

const ProductShowcase = () => {
  return (
    <>
      <Helmet>
        <title>Premium Quality Crane Rails | Heavy Duty Crane Rail Systems for Industrial Use </title>
        <meta
          name="description"
          content="Discover premium quality Crane Rails, designed for heavy-duty lifting operations, industrial rail systems, gantry crane tracks, and material handling applications. Available in multiple sizes and made from top-grade materials."
        />
        <meta
          name="keywords"
          content="Crane Rails, Heavy Duty Crane Rails, Gantry Crane Tracks, Industrial Crane Rails, Steel Crane Rails, Crane Rail Systems, Overhead Crane Rails, Industrial Tracks, Crane Track Rails, SAIL Crane Rails, JSPL Crane Rails, TATA Steel Rails, Fabrication Materials"
        />
        <meta property="og:title" content="Crane Rail | Heavy Duty Crane Rail" />
        <meta
          property="og:description"
          content="Shop top-grade Crane Rails for Lifting Operation, heavy-duty structures, and engineering projects."
        />
        <meta property="og:image" content="https://mehtasteels.in/images/mild-steel-plates.jpg" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Quality Crane Rails" />
        <meta
          name="twitter:description"
          content="Precision-engineered Crane crafted for bridge works, heavy structures, and fabrication."
        />
        <meta name="twitter:image" content="https://mehtasteels.in/images/rails.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Crane Rails",
            description:
              "Explore high-quality Crane Rails, ideal for heavy lifting, industrial rail systems, gantry cranes, and material handling.",
            image: "https://mehtasteels.in/images/crane-rails.jpg",
            brand: "Mehta Steels",
            material: "Steel",
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
                      <Train className="text-white" size={20} />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">Crane Rails</h1>
                      <p className="text-blue-600 text-sm font-medium">Premium Quality Materials</p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Mehta steels precision-engineered Crane Rails are designed for heavy-duty applications in industrial and construction projects, providing unmatched durability and performance. Perfect for rail systems, overhead cranes, and gantry cranes.
                  </p>
                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Length</div>
                      <div className="text-blue-700 text-sm">9mtr - 13mtr</div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2"> Applications</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: Train, label: "Railway Track", color: "bg-orange-50" },
                        { icon: Container, label: "Metro Rail", color: "bg-green-50" },
                        { icon: Construction, label: "Crane Rail", color: "bg-purple-50" }
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

                    <a href='/products/crane-rails'>
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
                  <div className="h-full w-full rounded-xl bg-gray-200 overflow-hidden">
                    <img
                      src={Rail}
                      alt="High-Quality Crane Rails for Heavy-Duty Industrial and Construction Projects"
                      title="Premium Crane Rails for Overhead and Gantry Crane Systems"
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