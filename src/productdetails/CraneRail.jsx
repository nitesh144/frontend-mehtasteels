import { ChevronDown, ChevronRight, ChevronUp, Package, Globe, FileText } from "lucide-react";
import CraneRail1 from '../productImage/crane-rails.jpg'
import CraneRail2 from '../productImage/crane-rails-for-lifting.jpg'
import CraneRail3 from '../productImage/crane-rail.jpg'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const CraneRails = () => {
  const [activeTab, setActiveTab] = useState('indian');
  const [showSpecs, setShowSpecs] = useState(false);

  const indianProfiles = [
    { profile: 'CR 80', weight: '64.2', topWidth: '80', baseWidth: '130', heightWidth: '130', webWidth: '35' },
    { profile: 'CR 100', weight: '89.0', topWidth: '100', baseWidth: '150', heightWidth: '150', webWidth: '40' },
    { profile: 'CR 120', weight: '118.0', topWidth: '120', baseWidth: '170', heightWidth: '170', webWidth: '45' }
  ];

  const productImages = [CraneRail1, CraneRail2, CraneRail3];

  const TechnicalSpecifications = () => (
    <section className="bg-white rounded-xl shadow-lg mt-6 overflow-hidden">
      <div className="space-y-6 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">BSP : Crane rails</h2>

        {/* First Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-3 text-left">Profile</th>
                <th className="px-4 py-3 text-left">Sectional wt kg/m</th>
                <th className="px-4 py-3 text-left">Standard length</th>
                <th className="px-4 py-3 text-left">Mill</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">CR - 80*</td>
                <td className="px-4 py-3">64.2</td>
                <td className="px-4 py-3">13m</td>
                <td className="px-4 py-3">Rail & Structural Mill, Bhilai</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">CR - 100*</td>
                <td className="px-4 py-3">89.0</td>
                <td className="px-4 py-3">13m</td>
                <td className="px-4 py-3">Rail & Structural Mill, Bhilai</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">CR -120*</td>
                <td className="px-4 py-3">118.0</td>
                <td className="px-4 py-3">13m</td>
                <td className="px-4 py-3">Rail & Structural Mill, Bhilai</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-blue-600 font-medium">Denotes head width</p>

        {/* Second Table - Ladle Analysis */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-3 text-left">Specification</th>
                <th className="px-4 py-3 text-left">C</th>
                <th className="px-4 py-3 text-left">Mn</th>
                <th className="px-4 py-3 text-left">P Max</th>
                <th className="px-4 py-3 text-left">S Max</th>
                <th className="px-4 py-3 text-left">Si</th>
                <th className="px-4 py-3 text-left">Hydrogen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Crane Rails</td>
                <td className="px-4 py-3">0.65-0.75</td>
                <td className="px-4 py-3">1.0-1.3</td>
                <td className="px-4 py-3">0.040</td>
                <td className="px-4 py-3">0.040</td>
                <td className="px-4 py-3">0.10-0.05</td>
                <td className="px-4 py-3">Less than 3 ppm</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Third Table - Properties */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Properties</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-3 text-left">UTS</th>
                <th className="px-4 py-3 text-left">850 MPa min</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Elongation</td>
                <td className="px-4 py-3">8% min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Hardness</td>
                <td className="px-4 py-3">250 BHN min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Micro Structure</td>
                <td className="px-4 py-3">Peralitic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Crane Rails | Mehta Steels</title>
        <meta name="description" content="Explore premium Crane Rails like CR 80, CR 100, CR 120 supplied by Mehta Steels for power projects, material handling, and engineering applications. Contact us for the best crane rails manufactured globally." />
        <meta name="keywords" content="Crane Rails, CR 80, CR 100, CR 120, Mehta Steels, steel supplier, Indian crane rails, European crane rails, American crane rails, material handling rails, engineering project rails" />
        <link rel="canonical" href="https://www.mehtasteels.com/cranerails" />
      </Helmet>

      <main className="max-w-7xl mx-auto p-6 bg-gray-50 font-proxima">
        {/* Hero Section */}
        <header className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 mb-12">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">
              Crane Rails
            </h1>
            <p className='text-white text-lg'>Mehta steels is a leader in Crane rails supply</p>
            <p className="text-blue-100 text-lg ">
              ISO certified steel trading company providing premium crane rails manufactured by the best mills across the globe
            </p>
          </div>
          {/* <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <Package className="w-full h-full" />
          </div> */}
        </header>
        <section className="p-5">
          <p className="text-lg">Mehta steels is a seasoned supplier of crane rails like CR 80 , CR 100 , CR 120 to various prestigious projects and companies around the world such as material handling , power projects , port and logistic projects , steel mills , sugar industries , engineering projects , etc. Mehta steels provides complete know how of the crane rail profiles of both Indian as well as International origins.</p>
        </section>

        {/* Technical Specifications Toggle Button */}
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="w-full mb-6 bg-white border border-gray-200 px-6 py-4 rounded-lg shadow-sm hover:bg-gray-50 transition-all flex items-center justify-between"
        >
          <span className="text-lg font-medium text-gray-900">Technical Specification of Crane Rails</span>
          {showSpecs ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
        </button>

        {/* Technical Specifications Content */}
        {showSpecs && <TechnicalSpecifications />}


        {/* Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {[
            { id: 'indian', label: 'Indian Standards', icon: <Package className="w-5 h-5" /> },
            { id: 'european', label: 'European Standards', icon: <Globe className="w-5 h-5" /> },
            { id: 'american', label: 'American Standards', icon: <FileText className="w-5 h-5" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          {activeTab === 'indian' && (
            <div className="space-y-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 rounded-l-lg">Profile</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Weight (kg/m)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Top Width (mm)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Base Width (mm)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Height (mm)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 rounded-r-lg">Web Width (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {indianProfiles.map((profile, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{profile.profile}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{profile.weight}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{profile.topWidth}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{profile.baseWidth}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{profile.heightWidth}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{profile.webWidth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 rounded-lg p-2 text-white mr-4">
                      <Package className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Standard Lengths</h3>
                  </div>
                  <p className="text-gray-600">Available in lengths of 10 to 13 meters ready in stock</p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 rounded-lg p-2 text-white mr-4">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Custom Orders</h3>
                  </div>
                  <p className="text-gray-600">Special lengths available upon request with custom specifications</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'european' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">European Standards</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-600 mr-3"></div>
                    <p className="text-gray-700">Tensile Strength: 690 to 1080 Mehta steels supplies crane rails of European profiles from the best mills. These crane rails such as A profile crane rails are manufactured according to the European standards the range of tensile strength of this profiles range from 690 to 1080 N/mm2.</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-600 mr-3"></div>
                    <p className="text-gray-700">The standard lengths of European crane rail Profiles range between 6 to 11.8 Meters when shipped by containers when shipped in special conditions maximum length up to 24 meters can be supplied. Mehta steels supply European crane rail profiles in steel grades matching to various qualities and specifications as per clients requirements.</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-600 mr-3"></div>
                    <p className="text-gray-700">The standard lengths of European crane rail Profiles range between 6 to 11.8 Meters when shipped by containers when shipped in special conditions maximum length up to 24 meters can be supplied. Mehta steels supply European crane rail profiles in steel grades matching to various qualities and specifications as per clients requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'american' && (
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">ASTM Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Standard Specifications</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      Crane rail profiles are supplied in accordance with ASTM specifications which are used for standard carbon applications or head hardened to provide greater wear resistance and fatigue life. The standard lengths of American standard crane rail profiles is 11.8 Meters when shipped by containers when shipped in special conditions length of 18 and 24 meters are standard other length can be considered on special requests.
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      Special Lengths: 18 and 24 meters
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Applications</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      Standard carbon applications
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      Head hardened for wear resistance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
            Product Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {productImages.map((image, index) => (
              <figure key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <img
                  src={image}
                  alt={`Crane Rail ${index + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </figure>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default CraneRails;

// import { ChevronDown, ChevronRight, ChevronUp, Package, Globe, FileText } from "lucide-react";
// import CraneRail1 from '../productImage/cranerail1.jpg';
// import CraneRail2 from '../productImage/cranerail2.jpg';
// import CraneRail3 from '../productImage/cranerail3.jpg';
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";

// const CraneRails = () => {
//   const [activeTab, setActiveTab] = useState('indian');
//   const [showSpecs, setShowSpecs] = useState(false);

//   const indianProfiles = [
//     { profile: 'CR 80', weight: '64.2', topWidth: '80', baseWidth: '130', heightWidth: '130', webWidth: '35' },
//     { profile: 'CR 100', weight: '89.0', topWidth: '100', baseWidth: '150', heightWidth: '150', webWidth: '40' },
//     { profile: 'CR 120', weight: '118.0', topWidth: '120', baseWidth: '170', heightWidth: '170', webWidth: '45' }
//   ];

//   const productImages = [CraneRail1, CraneRail2, CraneRail3];

//   const TechnicalSpecifications = () => (
//     <section className="bg-white rounded-xl shadow-lg mt-6 overflow-hidden">
//       <div className="space-y-6 p-6">
//         <h2 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications: BSP Crane Rails</h2>

//         {/* First Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-700 text-white">
//                 <th className="px-4 py-3 text-left">Profile</th>
//                 <th className="px-4 py-3 text-left">Sectional Weight (kg/m)</th>
//                 <th className="px-4 py-3 text-left">Standard Length</th>
//                 <th className="px-4 py-3 text-left">Mill</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-3">CR - 80*</td>
//                 <td className="px-4 py-3">64.2</td>
//                 <td className="px-4 py-3">13m</td>
//                 <td className="px-4 py-3">Rail & Structural Mill, Bhilai</td>
//               </tr>
//               <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-3">CR - 100*</td>
//                 <td className="px-4 py-3">89.0</td>
//                 <td className="px-4 py-3">13m</td>
//                 <td className="px-4 py-3">Rail & Structural Mill, Bhilai</td>
//               </tr>
//               <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-3">CR - 120*</td>
//                 <td className="px-4 py-3">118.0</td>
//                 <td className="px-4 py-3">13m</td>
//                 <td className="px-4 py-3">Rail & Structural Mill, Bhilai</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <p className="text-blue-600 font-medium">* Denotes head width</p>

//         {/* Second Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-700 text-white">
//                 <th className="px-4 py-3 text-left">Specification</th>
//                 <th className="px-4 py-3 text-left">C</th>
//                 <th className="px-4 py-3 text-left">Mn</th>
//                 <th className="px-4 py-3 text-left">P Max</th>
//                 <th className="px-4 py-3 text-left">S Max</th>
//                 <th className="px-4 py-3 text-left">Si</th>
//                 <th className="px-4 py-3 text-left">Hydrogen</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-3">Crane Rails</td>
//                 <td className="px-4 py-3">0.65-0.75</td>
//                 <td className="px-4 py-3">1.0-1.3</td>
//                 <td className="px-4 py-3">0.040</td>
//                 <td className="px-4 py-3">0.040</td>
//                 <td className="px-4 py-3">0.10-0.05</td>
//                 <td className="px-4 py-3">Less than 3 ppm</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <>
//       <Helmet>
//         <title>Crane Rails | Mehta Steels</title>
//         <meta name="description" content="Explore premium Crane Rails like CR 80, CR 100, CR 120 supplied by Mehta Steels for power projects, material handling, and engineering applications. Contact us for the best crane rails manufactured globally." />
//         <meta name="keywords" content="Crane Rails, CR 80, CR 100, CR 120, Mehta Steels, steel supplier, Indian crane rails, European crane rails, American crane rails, material handling rails, engineering project rails" />
//       </Helmet>

//       <main className="max-w-7xl mx-auto p-6 bg-gray-50 font-proxima">
//         {/* Hero Section */}
//         <header className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 mb-12">
//           <div className="relative z-10">
//             <h1 className="text-4xl font-bold text-white mb-4">Crane Rails</h1>
//             <p className='text-white text-lg'>Mehta Steels: Your Trusted Crane Rail Supplier</p>
//             <p className="text-blue-100 text-lg">ISO-certified supplier delivering premium crane rails worldwide</p>
//           </div>
//         </header>

//         <section className="p-5">
//           <p className="text-lg">
//             Mehta Steels specializes in supplying crane rails like CR 80, CR 100, and CR 120 to various industries including material handling, power, ports, logistics, and steel mills. We provide expertise in Indian and international crane rail standards.
//           </p>
//         </section>

//         <button
//           onClick={() => setShowSpecs(!showSpecs)}
//           className="w-full mb-6 border border-gray-200 px-6 py-4 rounded-lg shadow-sm  bg-indigo-600 transition-all flex items-center justify-between"
//         >
//           <span className="text-lg font-medium text-white ">View Technical Specifications</span>
//           {showSpecs ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-white" />}
//         </button>

//         {showSpecs && <TechnicalSpecifications />}

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9 }}
//           className="mt-16"
//         >
//           <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Product Gallery</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {productImages.map((image, index) => (
//               <figure key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
//                 <img
//                   src={image}
//                   alt={`Crane Rail ${index + 1}`}
//                   className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                 />
//               </figure>
//             ))}
//           </div>
//         </motion.section>
//       </main>
//     </>
//   );
// };

// export default CraneRails;
