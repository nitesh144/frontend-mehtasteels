import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, FileText, Star, TableIcon } from 'lucide-react';
import boilerplate1 from '../productImage/boiler-quality-plates.jpg'
import boilerplate2 from '../productImage/boiler-plates-for-industry.jpg'
import boilerplate3 from '../productImage/boiler-plates.jpg'
import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 

const BoilerPlate = () => {
  const [activeTab, setActiveTab] = useState('sizes');
  const [isOpen, setIsOpen] = useState(false);

  const commonSizes = [
    { thick: 6, width: 1500, length: 6300 },
    { thick: 8, width: 1500, length: 6300 },
    { thick: 10, width: 1500, length: 6300 },
    { thick: 10.2, width: 2500, length: 12500 },
    { thick: 12, width: 2500, length: 12500 },
    { thick: 14, width: 2500, length: 12500 },
    { thick: 16, width: 2500, length: 12500 },
    { thick: 18, width: 2500, length: 12500 },
    { thick: 20, width: 2500, length: 12500 },
    { thick: 22, width: 2500, length: 12500 },
    { thick: 25, width: 2500, length: 12500 },
    { thick: 28, width: 2500, length: 12500 },
    { thick: 30, width: 2500, length: 12500 },
    { thick: 32, width: 2500, length: 12500 },
    { thick: 36, width: 2500, length: 12500 },
    { thick: 40, width: 2500, length: 12500 },
    { thick: 45, width: 2500, length: 10000 },
    { thick: 50, width: 2500, length: 10000 },
    { thick: 63, width: 2500, length: 6300 },
    { thick: 70, width: 2500, length: 6300 },
    { thick: 75, width: 2500, length: 6300 },
    { thick: 80, width: 2500, length: 5000 },
    { thick: 90, width: 2500, length: 5000 },
    { thick: 100, width: 2500, length: 5000 },

  ];

  const gradeMapping = [
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade 1", 'Near Equivalent Non IS Specification': "ASTM/ASME 515 Gr.60" },
    { 'Description of use': "For intermediate and high temperature", 'IS Standard No and grade': "IS 2002 Grade 2", 'Near Equivalent Non IS Specification': "ASTM/ASME 515 Gr.65" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade 3", 'Near Equivalent Non IS Specification': "ASTM/ASME 515 Gr.70" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade R 220", 'Near Equivalent Non IS Specification': "ASTM/ASME 516 Gr.55" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade R 220", 'Near Equivalent Non IS Specification': "ASTM/ASME 516 Gr.60" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade R 260", 'Near Equivalent Non IS Specification': "ASTM/ASME 516 Gr.65" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade R 260", 'Near Equivalent Non IS Specification': "ASTM/ASME 516 Gr.70" },
    { 'Description of use': "For moderate & low temperature", 'IS Standard No and grade': "IS 2002 Grade R 355", 'Near Equivalent Non IS Specification': "ASTM/ASME 537 Class 1" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade H 235", 'Near Equivalent Non IS Specification': "DIN 17155 Gr HI" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade H 235", 'Near Equivalent Non IS Specification': "EN 10028-P2-P235GH" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade H 265", 'Near Equivalent Non IS Specification': "EN 10028-P2-P265GH" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade H 295", 'Near Equivalent Non IS Specification': "EN 10028-P2-P295GH" },
    { 'Description of use': "", 'IS Standard No and grade': "IS 2002 Grade H 355", 'Near Equivalent Non IS Specification': "EN 10028-P2-P355GH" },
  ];

  const commonGrades = [
    'IS 2002-1 or IS 2002 Gr. I',
    'IS 2002-2 or IS 2002 Gr. II',
    'IS 2002-3 or IS 2002 Gr. III',
    'IS 2041R220',
    'IS 2041R260',
    'IS 2041R355'
  ];
  const galleryImages = [boilerplate1, boilerplate2, boilerplate3];

  const specifications = [
    {
      nomenclature: 'IS 2002-1',
      specification: 'Normalized for <= 12 mm\nTensile test + bend test',
      process: 'Vacuum degassing for >=40 mm\nAbove 40 mm, thickness tolerance as per mutual agreement.'
    },
    {
      nomenclature: 'IS 2002-2 & IS 2002-3',
      specification: 'Normalized for <= 12 mm\nTensile test + bend test',
      process: 'Vacuum degassing for >=40 mm'
    },
    {
      nomenclature: 'IS 2041R220 & 2041R260',
      specification: 'Fine grain Practice (Al 0.02 min in ladle)\nNormalized for <= 12 mm\nNormalized for all thick when impact tested\nTensile test',
      process: 'Vacuum degassing for >=40 mm\nVacuum degassing and micro alloy for all thickness when impact test is over than 0.20°C,8K, impact transverse for any temperature.'
    },
    {
      nomenclature: 'IS 2041R355',
      specification: 'Fine grain Practice (Al 0.02 min in ladle)\nNormalized for all thickness\nTensile test + Impact test at any one temperature of -20/-0/-20/-40',
      process: 'Vacuum degassing and micro alloy For all thickness.'
    }
  ];

  const additionalSpecs = [
    {
      nomenclature: 'IS 2041R220/A285C \n IS 2041R220/SA285C',
      specification: 'Fine grain Practice (Al 0.02 min in ladle)\nTensile test\nNormalized for <= 12 mm\nNormalized for all thick when impact tested',
      process: 'Vacuum degassing for >=40 mm'
    },
    {
      nomenclature: 'IS 2002-1/A515-60,\n IS 2002-1/SA515-60, IS 2002-2/A515-65, IS 2002-2/SA515-65,IS 2002-3/A515-70, IS 2002-3/SA515-70',
      specification: 'Normalized for < 12 mm\nTensile test + bend test',
      process: 'Vacuum degassing for >=40 mm'
    },
    {
      nomenclature: 'IS 2041R220/A516-55,\n IS 2041R220/SA516-55, IS 2041R220/A516-60, IS 2041R220/SA516-60, IS 2041R260/SA516-65, IS 2041R260/A516-70, IS 2041R260/SA516-70',
      specification: 'Fine grain Practice (AI 0.02 min in ladle) Normalized for > 12 mm Normalized for all thick when impact tested Tensile test',
      process: 'Vacuum degassing for >= 40 mm Vacuum degassing and micro alloy for all thickness â€“ when impact test is lower than (-) 20*C -Impact (Transverse) for any temperature.'
    },
    {
      nomenclature: 'IS 2041R355/A537CL1, IS 2041R355/SA537CL1',
      specification: 'Fine grain Practice (AI 0.02 min in ladle) Normalized for all thickness Tensile test + Impact test at any one temperature of +20/0/-20/-40',
      process: 'Vacuum degassing and micro alloy For all thickness.'
    }
  ];


  return (
    <>
      <Helmet>
        <title>Boiler Quality Plates - Premium BQ Plates Supplier</title>
        <meta name="description" content="Discover high-quality boiler quality plates (BQ Plates) designed for extreme durability and heat resistance. Available in various sizes and grades." />
        <meta name="keywords" content="Boiler Quality Plates, BQ Plates, Mild Steel Plates, High-Temperature Applications, Mehta Steels" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Boiler Quality Plates - Premium BQ Plates Supplier" />
        <meta property="og:description" content="Explore our range of boiler quality plates designed for high-temperature applications. Quality assured at Mehta Steels." />
        <meta property="og:image" content="https://mehtasteels.in/images/boiler-quality-plates.jpg" /> {/* Update with the correct image URL */}
        <meta property="og:url" content="https://mehtasteels.in/products/boiler-quality-plates" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boiler Quality Plates - Premium BQ Plates Supplier" />
        <meta name="twitter:description" content="Explore our range of boiler quality plates designed for high-temperature applications. Quality assured at Mehta Steels." />
        <meta name="twitter:image" content="https://mehtasteels.in/images/boiler-quality-plates.jpg" /> {/* Update with the correct image URL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Boiler Quality Plates",
              "description": "High-quality boiler quality plates designed for extreme durability and heat resistance.",
              "image": "https://mehtasteels.in/images/boiler-quality-plates.jpg", /* Update with the correct image URL */
              "brand": {
                "@type": "Brand",
                "name": "Mehta Steels"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://mehtasteels.in/products/boiler-quality-plates",
                "priceCurrency": "INR",
                "price": "1000.00",  /* Replace with actual price */
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
              }
            }
            `}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 font-proxima text-justify">
        {/* Header */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 mb-12">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">
              Boiler Quality Plates (BQ Plates)
            </h1>
            <h3 className='text-xl text-white'>Boiler Quality Plates: Designed for Extreme Durability and Heat Resistance</h3>
            <p className="text-blue-100 text-lg pt-2">
              Premium quality boiler grade plates with superior chemical composition and mechanical properties for high-temperature applications.
            </p>
          </div>
          {/* <div className="absolute -right-20 -bottom-20 opacity-10">
            <Package className="w-96 h-96" />
          </div> */}
        </div>

        <div>
          <p className='text-lg text-gray-500'>Boiler quality plates, also known as boiler grade plates, are specialized mild steel plates engineered to endure high temperatures and extreme pressure. Their unique chemical composition and mechanical properties make them indispensable for demanding applications, including steam boilers, pressure vessels, penstock pipes, and LPG bullets. These plates are vital for industries that require robust, heat-resistant materials to ensure safety and efficiency..</p><br></br>
          <p className='text-lg text-gray-500'>At Mehta Steels, we stock a comprehensive range of boiler quality (BQ) plates, tested and certified to meet Indian standards such as IS 2002 GR.II, IS 2002 GR.III, IS 2041 R 220, and IS 2041 R 260. Our inventory ensures you receive high-performance steel plates suitable for industrial applications, backed by quality assurance and reliability.
          </p><br />
          <p className='text-lg text-gray-500'>If you're searching for premium BQ plates, pressure vessel plates, or mild steel boiler plates, Mehta Steels offers the best solutions tailored to your needs.</p>
          <br />
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6 space-x-4 border-b">
          {['sizes', 'grades', 'mapping'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors duration-200 
              ${activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-500'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Sizes Table */}
          {activeTab === 'sizes' && (
            <div className="overflow-x-auto">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <TableIcon className="w-6 h-6 mr-2 text-blue-500" />
                Common sizes of BQ Plates readily available in stock with Mehta steels are:
              </h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thickness (mm)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Width (mm)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Length (mm)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {commonSizes.map((size, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{size.thick}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{size.width}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{size.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Grades List */}
          {activeTab === 'grades' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-blue-500" />
                Common Grades of Boiler Quality Plates:
              </h2>
              <p className="mb-4 text-gray-600">
                Below is a list of common grades of boiler quality plates readily available with Mehta Steels:
              </p>
              <ul className="space-y-3">
                {commonGrades.map((grade, index) => (
                  <li
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition duration-200"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-gray-800 font-medium">{grade}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Grade mapping */}
          {activeTab === 'mapping' && (
            <div className="overflow-x-auto">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-blue-500" />
                Pressure vessels quality plates and boiler quality plates:
              </h2>
              <p>Use and equivalent grade chart of BQ plates</p>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description of Use
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IS Standard No and Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Near Equivalent Non IS Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {gradeMapping.map((grade, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {grade['Description of use'] || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {grade['IS Standard No and grade']}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {grade['Near Equivalent Non IS Specification']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Gallery */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg aspect-video hover:opacity-75 transition-opacity">
                  <img
                    src={src}
                    alt={`Boiler Quality Plates ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading='lazy'
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto bg-gray-50">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full mb-6 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>HS Code For Hot Rolled Flat Steel Products</span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 ml-2" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-2" />
            )}
          </button>

          {/* Specifications Content */}
          {isOpen && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              {/* Header */}
              <div className="bg-gray-800 text-white p-4 text-center">
                <h2 className="text-xl font-bold">MANDATORY TECHNICAL DELIVERY CONDITIONS FOR BQ PLATES</h2>
                <h3 className="text-sm mt-2">MANDATORY REQUIREMENTS FOR BOILER QUALITY GRADES</h3>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gray-700 text-white text-sm font-medium">
                <div className="p-3 border-r border-gray-600">Nomenclature</div>
                <div className="p-3 border-r border-gray-600">Mandatory TDC As per Specification</div>
                <div className="p-3">Mandatory TDC As per Process requirement</div>
              </div>

              {/* Table Content */}
              <div className="divide-y divide-gray-200">
                {specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-3 hover:bg-gray-50">
                    <div className="p-4 border-r border-gray-200 font-medium text-sm">
                      {spec.nomenclature}
                    </div>
                    <div className="p-4 border-r border-gray-200 justify-start text-sm whitespace-pre-line">
                      {spec.specification}
                    </div>
                    <div className="p-4 text-sm whitespace-pre-line">
                      {spec.process}
                    </div>
                  </div>
                ))}

                {/* Additional Specifications Section */}
                <div className="bg-gray-800 text-white p-4 text-center col-span-3">
                  <h3 className="text-sm">ADDITIONAL SPECIFICATIONS</h3>
                </div>

                {additionalSpecs.map((spec, index) => (
                  <div key={`additional-${index}`} className="grid grid-cols-3 hover:bg-gray-50">
                    <div className="p-4 border-r border-gray-200 font-medium text-sm">
                      {spec.nomenclature}
                    </div>
                    <div className="p-4 border-r border-gray-200 text-sm whitespace-pre-line">
                      {spec.specification}
                    </div>
                    <div className="p-4 text-sm whitespace-pre-line">
                      {spec.process}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BoilerPlate