import React, { useState } from 'react';
import { Layers, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
const SailPlatesInfo = () => {
  const [activeTab, setActiveTab] = useState('composition');

  const sections = {
    composition: {
      icon: <Layers className="w-6 h-6" />,
      title: "Composition",
      content: [
        { label: "Carbon", value: "0.35 - 0.45%" },
        { label: "Manganese", value: "1.0 - 1.6%" },
        { label: "Phosphorus", value: "max 0.04%" },
        { label: "Sulfur", value: "max 0.05%" },
        { label: "Other Elements", value: "Chromium, Silicon, Copper, Nickel, Molybdenum, Aluminum, Vanadium" }
      ]
    },
    uses: {
      icon: <Wrench className="w-6 h-6" />,
      title: "Uses",
      content: [
        { label: "Construction", value: "Buildings, bridges, runways" },
        { label: "Storage", value: "Tanks and containers" },
        { label: "Automotive", value: "Engine components, frame parts" },
        { label: "Industrial", value: "Heavy machinery, structural supports" },
        { label: "Energy", value: "Nuclear power plants, oil drilling equipment" }
      ]
    },
    advantages: {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Advantages",
      content: [
        { label: "Strength", value: "High tensile strength and load-bearing capacity" },
        { label: "Durability", value: "Excellent fatigue resistance" },
        { label: "Versatility", value: "Easy to cut and shape" },
        { label: "Resilience", value: "Withstands extreme conditions" },
        { label: "Quality", value: "Consistent mechanical properties" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Hard Plates: High-Performance Metal Sheets for Extreme Durability</title>
        <meta name="description" content="Discover hard plates engineered for maximum wear resistance and durability. Learn about their composition, uses in industries like automotive, construction, and energy, and the advantages that make them essential in demanding applications." />
        <meta name="keywords" content="hard plates, high-performance metal sheets, wear resistance, durability, industrial hard plates, composition of hard plates, uses of hard plates, advantages of hard plates, automotive industry, construction, nuclear power plants, oil and gas industry"/>
        <meta name="author" content="Mehta Steel" />
        
      </Helmet>
      <div className="relative overflow-hidden max-w-7xl ml-[100px] mt-10 rounded-xl bg-gradient-to-br from-gray-700 via-blue-600 to-gray-700 p-8 mb-5">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Hard Plates
          </h1>
          <h3 className='text-xl text-white'>Hard Plates: Engineered for Maximum Durability and Wear Resistance</h3>
          <p className="text-blue-100 text-lg pt-2">
            Premium quality hard plates made from high-alloy steels, aluminum, and nickel-based alloys, offering superior strength, toughness, and corrosion resistance for demanding industrial applications.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <section className='p-5 text-lg'>
          <p>
            Hard plates are high-performance metal sheets renowned for their exceptional durability and resistance to wear. Typically crafted from advanced materials such as high-alloy steels, aluminum, and nickel-based alloys, these plates offer a unique combination of strength, hardness, toughness, corrosion resistance, and dimensional stability. Their robust properties make hard plates indispensable across a variety of industries, including energy, engineering, and construction.
          </p>
          <p className="mt-4">
            In the automotive sector, hard plates are used in critical components such as cylinder blocks, camshafts, engine mounts, transmission gears, and hydraulic piston rods, all of which require superior strength and wear resistance. In the oil and gas industry, they play a vital role in protecting downhole tools from the erosive effects of drilling muds, ensuring operational efficiency and safety. Additionally, in nuclear power plants, hard plates are employed as radiation shields, safeguarding workers and equipment from harmful radiation exposure.
          </p>
        </section>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2
              ${activeTab === key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {section.icon}
              <span className="font-medium">{section.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-500">
          <div className="flex items-center space-x-2 mb-4 border-b pb-4">
            {sections[activeTab].icon}
            <h2 className="text-xl font-semibold text-gray-800">{sections[activeTab].title}</h2>
          </div>

          <div className="grid gap-4">
            {sections[activeTab].content.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <div className="font-medium text-gray-700 mb-1">{item.label}</div>
                <div className="text-gray-600">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SailPlatesInfo;