import { Package } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet';
const HBeam = () => {
    const beamData = [
      {
        srNo: 1,
        size: 'HB 150',
        mass: 30.6,
        area: 39.0,
        depth: 150,
        flangeWidth: 150,
        webThickness: 8.4,
        flangeThickness: 9.0,
        flangeSlope: 94.0,
        rootRadius: 8.0,
        toeRadius: 4.0
      },
      {
        srNo: 2,
        size: 'HB 150',
        mass: 34.6,
        area: 44.1,
        depth: 150,
        flangeWidth: 150,
        webThickness: 11.8,
        flangeThickness: 9.0,
        flangeSlope: 94.0,
        rootRadius: 8.0,
        toeRadius: 4.0
      },
      {
        srNo: 3,
        size: 'HB 152',
        mass: 37.1,
        area: null,
        depth: null,
        flangeWidth: null,
        webThickness: null,
        flangeThickness: null,
        flangeSlope: null,
        rootRadius: null,
        toeRadius: null
      },
      {
        srNo: 4,
        size: 'HB 200',
        mass: 40.0,
        area: 50.9,
        depth: 200,
        flangeWidth: 200,
        webThickness: 7.8,
        flangeThickness: 9.0,
        flangeSlope: 94.0,
        rootRadius: 9.0,
        toeRadius: 4.5
      }
    ];

    return (
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 font-proxima">
        <Helmet>
                <title>H Beam | Mehta Steels</title>
                <meta name="description" content="Discover high-quality H Beams like HB 150, HB 200 supplied by Mehta Steels. Ideal for construction and engineering applications." />
                <meta name="keywords" content="H Beam, HB 150, HB 200, Mehta Steels, steel supplier, construction beams, structural steel" />
                <link rel="canonical" href="https://www.mehtasteels.com/hbeam" />
            </Helmet>
        <div className="relative rounded-2xl max-w-7xl mt-10 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-white mb-6">H Beam</h1>
              <p className="text-blue-100 text-xl">
                Mehta steels supplies H beams of Indian and International origins as per clients requirements.
              </p>
            </div>
            {/* <div className="absolute -right-20 -bottom-20 opacity-10">
              <Package className="w-96 h-96" />
            </div> */}
          </div>
        
        <p className='p-6 text-xl'>H beams fall under the category of long products. H beams play a vital role in cost cutting and also to provide more strength in less p/m steel used.</p>
        <h3 className='p-3 text-lg'>Following are the section details of ms h beams supplied by Mehta steels on regular basis:</h3>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden pt-5">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Sr. No.</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Size</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Mass(M) Kg/Mtr.</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Sectional Area(a) cm2</th>
                  <th colSpan="6" className="px-4 py-3 text-center text-sm font-bold text-gray-700 border-b">
                    Dimensions
                  </th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="px-4 py-3 border-b" colSpan="4"></th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Depth(D) mm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Flange Width(B) mm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Thickness of Web(t) mm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Thickness of Flange(T) mm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Root Radius(R1) mm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border-b">Toe Radius(R2) mm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {beamData.map((beam) => (
                  <tr key={beam.srNo} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-900">{beam.srNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">{beam.size}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.mass}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.area}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.depth}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.flangeWidth}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.webThickness}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.flangeThickness}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.rootRadius}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{beam.toeRadius}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  export default HBeam;