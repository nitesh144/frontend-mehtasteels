import React from 'react';
import { Helmet } from 'react-helmet';
import MSChannel1 from '../productImage/mild-steel-channel.png';
import MSChannel2 from '../productImage/ms-channel.png';
import MSChannel3 from '../productImage/mild-steel-channel-for-industry.png';
import upe from '../productImage/upe.png';
import upn from '../productImage/upn.png';
import u from '../productImage/u.png';
import pfc from '../productImage/pfc.png';
import ch from '../productImage/ch.png';
import c from '../productImage/c.png';
import mc from '../productImage/mc.png';
import ue from '../productImage/ue.png';
import { Package } from 'lucide-react';

const MSChannel = () => {
  const productImages = [MSChannel1, MSChannel2, MSChannel3];

  const ismcData = [
    { code: 'ISMC 75', size: '75 x 40 x 4.8', weight: 7.14 },
    { code: 'ISMC 100', size: '100 x 50 x 5', weight: 9.56 },
    { code: 'ISMC 125', size: '125 x 65 x 5.3', weight: 13.1 },
    { code: 'ISMC 150', size: '150 x 75 x 5.7', weight: 16.8 },
    { code: 'ISMC 175', size: '175 x 75 x 6', weight: 19.6 },
    { code: 'ISMC 200', size: '200 x 75 x 6.2', weight: 22.3 },
    { code: 'ISMC 250', size: '250 x 82 x 9', weight: 34.2 },
    { code: 'ISMC 300', size: '300 x 90 x 7.8', weight: 36.3 },
    { code: 'ISMC 350', size: '350 x 100 x 8.3', weight: 42.7 },
    { code: 'ISMC 400', size: '400 x 100 x 8.8', weight: 50.1 }
  ];

  const channelData = [
    {
      title: 'European profiles',
      channels: [
        { name: 'UPE', description: 'U-Profile with parallel flanges, Dimensions: DIN 1026-2', image: upe },
        { name: 'UPN', description: 'European standard channels, Dimensions: DIN 1026-1', image: upn },
        { name: 'U Channel', description: 'European standard channels, Dimensions: DIN 1026-1', image: u }
      ]
    },
    {
      title: 'British profiles',
      channels: [
        { name: 'PFC', description: 'British parallel flange channels, Dimensions: BS 4-1', image: pfc },
        { name: 'CH', description: 'British channels with taper flanges, Dimensions: BS 4-1', image: ch }
      ]
    },
    {
      title: 'American standards',
      channels: [
        { name: 'C', description: 'American standard channels, Dimensions: ASTM A 6/A 6M', image: c },
        { name: 'MC', description: 'American channels, Dimensions: ASTM A 6/A 6M', image: mc }
      ]
    },
    {
      title: 'Russian standards',
      channels: [
        { name: 'UE', description: 'Channels with taper flanges, Dimensions: GOST 8240-97', image: ue }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mild Steel Channel - Mehta Steels</title>
        <meta name="description" content="Discover a wide range of Mild Steel Channels (ISMC) and international profiles at Mehta Steels. We offer high-quality channels including UPE, UPN, PFC, and more." />
        <meta name="keywords" content="Mild Steel Channels, ISMC, UPE, UPN, PFC, Mild Steel Products, Steel Supplier" />
        <meta property="og:title" content="MS Channel - Mehta Steels" />
        <meta property="og:description" content="Explore Mehta Steels' range of Mild Steel Channels including ISMC, UPE, UPN, PFC, and more. Get detailed specifications and find the perfect channel for your project." />
        <meta property="og:image" content={MSChannel1} />
        <meta property="og:url" content="https://www.mehtasteels.com/ms-channel" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="max-w-screen-xl mx-auto p-6 font-proxima">
        {/* Header */}
        <header className="relative rounded-2xl w-7xl mt-10 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6">Mild Steel Channel</h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Mehta steels is stockist of Mild Steel Channel
            </p>
          </div>
          {/* <div className="absolute -right-20 -bottom-20 opacity-10">
              <Package className="w-96 h-96" />
            </div> */}
        </header>

        {/* ISMC Channel Specifications */}
        <article className="m-5 text-lg text-gray-700">
          Mehta Steels is a leading supplier of mild steel channels (ISMC), sourced from SAIL and premium re-rolling mills.
          Our extensive range includes C-shaped light and heavy channels, along with imported profiles like UPN, UPE, U Channels,
          PFC, and American Standard Channels.
        </article>

        {/* ISMC Table */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-5">
          <h2 className="text-xl font-bold mb-4 text-gray-800">ISMC Channel Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Channel Code</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Size (mm)</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Weight (KG/Mtrs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ismcData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.code}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-right">{item.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Product Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {productImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <img
                  src={image}
                  alt={`MS Channel Gallery ${index + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto p-6 animate-fade-in mt-5">
          <h1 className="text-2xl text-blue-700 font-bold mb-4 animate-fade-in-up">
            International and Imported Profile Channels
          </h1>
          <p className="mb-8 animate-fade-in-up animation-delay-200 text-lg text-gray-600">
            Mehta Steels is a key supplier of British, European, and American
            standard profiles of mild steel channels.
          </p>
          {channelData.map((category, index) => (
            <div
              key={index}
              className="mb-12 animate-fade-in-up animation-delay-400"
            >
              <h2 className="text-lg font-semibold mb-4">{category.title}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {category.channels.map((channel, idx) => (
                  <div
                    key={idx}
                    className=" items-start gap-4 border p-4 shadow-sm rounded-lg transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={channel.image}
                      alt={channel.name}
                      loading='lazy'
                      className="w-[200px] h-[200px] object-contain"
                    />
                    <div>
                      <h3 className="text-md font-bold mb-2">{channel.name}</h3>
                      <p className="text-sm text-gray-600">{channel.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MSChannel;
