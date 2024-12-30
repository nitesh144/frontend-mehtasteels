import React from 'react';
import { Construction, Factory, Building2 } from 'lucide-react';
import HRCoil from '../images/hot-rolled-coil.jpg'
import { Helmet } from 'react-helmet';


const ProductShowcase = () => {
  return (
    <>
      <Helmet>
        <title>Premium Hot Rolled Coil and Sheet | HR Sheet & Coil </title>
        <meta
          name="description"
          content="Discover premium quality Mild Steel Plates, ideal for heavy structures, bridge works, and fabrication. Available in thicknesses ranging from 3.15mm to 16mm."
        />
        <meta
          name="keywords"
          content="Hot Rolled Sheets,Hot Rolled Coil, HR Coil, HR Sheet, Bridge Works, Fabrication, Premium Materials, SAIL Steel Plates, JSPL Plates"
        />
        <meta property="og:title" content="Hot Rolled Coil & Sheets | Premium Industrial Materials" />
        <meta
          property="og:description"
          content="Shop top-grade HR Coil for modern construction, heavy-duty structures, and engineering projects."
        />
        <meta property="og:image" content="https://mehtasteels.in/images/hot-rolled-coil.jpg" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Quality Hot Rolled Sheet" />
        <meta
          name="twitter:description"
          content="Precision-engineered HR Sheets crafted for bridge works, heavy structures, and fabrication."
        />
        <meta name="twitter:image" content="https://mehtasteels.in/images/hot-rolled-coil.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Hot Rolled Coil and Sheets",
            description:
              "Explore high-quality Mild Steel Plates, ideal for heavy structures, bridge construction, and fabrication projects.",
            image: "https://mehtasteels.in/images/hot-rolled-coil.jpg",
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
                      <Construction className="text-white" size={20} />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">Hot Rolled Coil</h1>
                      <p className="text-blue-600 text-sm font-medium">Premium Steel Products</p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Mehta Steels' precision-engineered HR sheets are crafted with cutting-edge technology, offering unmatched quality and durability for modern construction, industrial applications, and advanced engineering projects.
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Thickness</div>
                      <div className="text-blue-700 text-sm">3.15mm - 16mm</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="font-semibold text-blue-900 text-sm">Width</div>
                      <div className="text-blue-700 text-sm">1000mm - 2500mm</div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2"> Applications</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: Factory, label: "Industrial", color: "bg-orange-50" },
                        { icon: Building2, label: "Construction", color: "bg-green-50" },
                        { icon: Construction, label: "Infrastructure", color: "bg-purple-50" }
                      ].map(({ icon: Icon, label, color }, index) => (
                        <div key={index} className={`${color} rounded-lg p-2 text-center transition-all hover:scale-105`}>
                          <Icon className="mx-auto mb-1" size={20} />
                          <span className="text-xs font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group relative overflow-hidden rounded-lg bg-blue-600 px-6 py-2 text-white text-sm transition-all hover:bg-blue-700">
                    <a href='/products/hot-rolled-sheets-and-hr-coils'>
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
                <div className="relative h-full ">
                  <div className="h-full w-full bg-gray-200 overflow-hidden">
                    <img
                      src={HRCoil}
                      alt="High Quality Hot Rolled Coil for Construction and Industrial need" 
                      loading='lazy'
                      title='Premium Quality Hot Rolled Coil and Sheets'
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