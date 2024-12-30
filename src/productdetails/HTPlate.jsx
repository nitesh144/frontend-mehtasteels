import { ChevronDown, ChevronUp, Package } from "lucide-react";
import React, { useState } from "react";
import {Helmet} from "react-helmet";

const HTPlate = () => {
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('specs1');
  const [hoveredGrade, setHoveredGrade] = useState(null);

    const mainData = [
      { description: "Hot rolled medium high tensile structural steel", isStandard: "IS 2062 E 300 A", equivalent: "SAILMA 300" },
      { description: "", isStandard: "IS 2062 E 300 C", equivalent: "SAILMA 300 HI" },
      { description: "", isStandard: "IS 2062 E 350 A", equivalent: "SAILMA 350" },
      { description: "", isStandard: "IS 2062 E 350 C", equivalent: "SAILMA 350 HI" },
      { description: "", isStandard: "IS 2062 E 410 A", equivalent: "SAILMA 410" },
      { description: "", isStandard: "IS 2062 E 410 C", equivalent: "SAILMA 410 HI" },
      { description: "", isStandard: "IS 2062 E 450 A", equivalent: "SAILMA 450" },
      { description: "", isStandard: "IS 2062 E 450 BR", equivalent: "SAILMA 450 HI" },
      { description: "", isStandard: "IS 2062 E 550 A", equivalent: "SAILMA 550" },
      { description: "", isStandard: "IS 2062 E 550 BR", equivalent: "SAILMA 550 HI" },
      { description: "", isStandard: "IS 2062 E 550 A", equivalent: "SAIL HITEN" },
      { description: "", isStandard: "IS 2062 E 350 BR", equivalent: "EN 10025 S 355 JR" },
      { description: "", isStandard: "IS 2062 E 350 B0", equivalent: "EN 10025 S 355 J0" },
      { description: "", isStandard: "IS 2062 E 350 C", equivalent: "EN 10025 S 355 J2" },
      { description: "", isStandard: "IS 2062 E 350 C", equivalent: "DIN 17100 ST 52.3" },
    ];

    const techSpecs1 = [
      { nomenclature: "IS 2062 E 300 A", tdcSpec: "TENSILE, BEND TEST (UP TO 25 MM)", processReq: "Vacuum degassing for >= 32 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 300 BR", tdcSpec: "TENSILE, BEND(UP TO 25 MM), (IMPACT OPTIONAL AT ROOM TEMP FOR >= 12 MM)", processReq: "CR/NR/TCR for > 12 to <32 mm\nNormalised for >= 32 mm" },
      { nomenclature: "IS 2062 E 300 B0", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (0) DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm\nNormalised for >= 32 mm" },
      { nomenclature: "IS 2062 E 300 C", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Vacuum degassing for >= 32 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 350 A", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM)", processReq: "Vacuum degassing for >= 32 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 350 BR", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Vacuum degassing for >= 32 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 350 B0", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT 0 DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm Normalised for >= 32 mm Vaccum degassing for >= 32 mmMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 350 C", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm Normalised for >= 32 mm Vaccum degassing for >= 32 mmMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 410 A", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM)", processReq: "Vacuum degassing for >= 28 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 410 BR", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT OPTIONAL AT ROOM TEMP FOR>= 12 MM", processReq: "Vacuum degassing for >= 28 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 410 B0", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT 0 DEG C FOR >= 12 MM", processReq: "Normalised for >= 40 mm\nVacuum degassing for >= 28 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 410 C", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Normalised for >= 40 mm\nVacuum degassing for >= 28 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 450 A", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) ", processReq: "Vacuum degassing for all thickness\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 450 BR", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT OPTIONAL AT ROOM TEMP FOR >= 12 MM", processReq: "Vacuum degassing for all thickness\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 550 A", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Vacuum degassing for all thickness\nMicro alloyed for all thickness\nCu and Ni addition for all thickness" },
      { nomenclature: "IS 2062 E 550 BR", tdcSpec: "TENSILE, BEND TEST(UP TO 25 MM) & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Vacuum degassing for all thickness\nMicro alloyed for all thickness\nCu and Ni addition for all thickness" },
    ];

    const techSpecs2 = [
      { nomenclature: "IS 2062 E 300 A (MA 300)", tdcSpec: "TENSILE & BEND TEST", processReq: "Vacuum degassing for >= 32 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 300 BR (MA 300 HI)", tdcSpec: "TENSILE & BEND, IMPACT AT ROOM TEMP. FOR >= 12 MM", processReq: "Vacuum degassing for >= 32 mm\nMicro alloyed for all thickness" },
      { nomenclature: "IS 2062 E 300 B0 (MA 300 HI)", tdcSpec: "TENSILE + BEND TEST & IMPACT AT (0) DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm\nNormalised for >= 32 mm\nVacuum degassing for >= 32 mm" },
      { nomenclature: "IS 2062 E 300 C (MA 300 HI)", tdcSpec: "TENSILE + BEND TEST & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm\nNormalised for >= 32 mm\nVacuum degassing for >= 32 mm" },
      { nomenclature: "IS 2062 E 350 C (MA350)", tdcSpec: "TENSILE & BEND TEST", processReq: "Vacuum degassing for >= 32 mm" },
      { nomenclature: "IS 2062 E 300 C (MA350 HI)", tdcSpec: "TENSILE & BEND TEST, IMPACT AT ROOM TEMP FOR >= 12 MM", processReq: "Vacuum degassing for >= 32 mm" },
      { nomenclature: "IS 2062 E 350 B0 (MA350 HI)", tdcSpec: "TENSILE + BEND TEST & IMPACT AT 0 DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm\nNormalised for >= 32 mm\nVacuum degassing for >= 32 mm" },
      { nomenclature: "IS 2062 E 350 C (MA 300 HI)", tdcSpec: "TENSILE + BEND TEST & IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "CR/NR/TCR for > 12 to <32 mm\nNormalised for >= 32 mm\nVacuum degassing for >= 32 mm" },
      { nomenclature: "IS 2062 E 410 A (MA410)", tdcSpec: "TENSILE + BEND TEST", processReq: "Vacuum degassing for >= 28 mm" },
      { nomenclature: "IS 2062 E 410 BR (MA410 HI)", tdcSpec: "TENSILE + BEND, IMPACT AT ROOM TEMP FOR >= 12 MM", processReq: "Vacuum degassing for >= 28 mm" },

      { nomenclature: "IS 2062 E 410 B0 (MA410 HI)", tdcSpec: "TENSILE + BEND TEST & IMPACT AT (0) DEG C FOR >= 12 MM", processReq: "Normalised for >= 40 mm, Vacuum degassing for >= 28 mm" },
      { nomenclature: "IS 2062 E 410 C (MA410 HI)", tdcSpec: "TENSILE + BEND, IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Normalised for >= 40 mm, Vacuum degassing for >= 28 mm" },

      { nomenclature: "IS 2062 E 450 A (MA450)", tdcSpec: "TENSILE & BEND ", processReq: "Vacuum degassing for all thickness." },
      { nomenclature: "IS 2062 E 450 BR (MA450 HI)", tdcSpec: "TENSILE , BEND , IMPACT AT ROOM TEMP FOR >= 12 MM", processReq: "Vacuum degassing for all thickness." },
      { nomenclature: "IS 2062 E 450 A (MA450 HI-B0)", tdcSpec: "TENSILE, BEND, IMPACT AT (0) DEG C FOR >= 12 MM", processReq: "Vacuum degassing for all thickness.\nNormalised for >=40mm" },
      { nomenclature: "IS 2062 E 450 A (MA450 HI-C)", tdcSpec: "TENSILE, BEND, IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Vacuum degassing for all thickness.\nNormalised for >=40mm" },
      { nomenclature: "IS 2062 E 550 A (MA550 HI)", tdcSpec: "TENSILE & BEND TEST", processReq: "Vacuum degassing for all thickness.\nCu and Ni addition for all thickness." },
      { nomenclature: "IS 2062 E 550 BR (MA550 HI)", tdcSpec: "TENSILE & BEND TEST , IMPACT AT ROOM TEMP FOR >= 12 MM", processReq: "Vacuum degassing for all thickness.\nCu and Ni addition for all thickness." },
      { nomenclature: "IS 2062 E 550 A (MA550 HI-B0)", tdcSpec: "TENSILE & BEND TEST , IMPACT AT (0) DEG C FOR >= 12 MM", processReq: "Vacuum degassing for all thickness.\nCu and Ni addition for all thickness." },
      { nomenclature: "IS 2062 E 550 A (MA550 HI-C)", tdcSpec: "TENSILE & BEND TEST , IMPACT AT (-) 20 DEG C FOR >= 12 MM", processReq: "Vacuum degassing for all thickness.\nCu and Ni addition for all thickness." },
    ];

    
    return (
      <>
      <Helmet>
      <title>High Tensile Plate | Mehta Steels</title>
      <meta
        name="description"
        content="Discover detailed specifications and applications of high tensile plates, including grade equivalents and technical delivery conditions."
      />
      <meta
        name="keywords"
        content="High tensile plate, steel plate specifications, SAILMA plates, IS standards, structural steel"
      />
    </Helmet>
      <div className="min-h-screen bg-gray-50 font-proxima">
        <div className="max-w-7xl mx-auto p-6">
          {/* Hero Section */}
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-white mb-6">High Tensile Plate</h1>
              <p className="text-blue-100 text-xl max-w-2xl">
                Advanced steel plates engineered for superior strength and durability
              </p>
            </div>
            {/* <div className="absolute -right-20 -bottom-20 opacity-10">
              <Package className="w-96 h-96" />
            </div> */}
          </div>
  
          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview</h3>
              <p className="text-gray-600 text-lg">
                High tensile plates, known as SAILMA plates in India, are specialized steel plates designed for exceptional tensile strength. These plates enable the construction of lighter, stronger, and more durable structures.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Applications</h3>
              <p className="text-gray-600 text-lg">
                Ideal for industrial and structural applications where high strength-to-weight ratio is critical. These plates are essential in modern construction and manufacturing.
              </p>
            </div>
          </div>
  
          {/* Grade Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg mb-8">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">Grade Equivalents</h2>
              <p className="text-gray-600 mt-2 text-lg">Compare different grade specifications and their equivalents</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 md:text-xl">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 md:text-xl">IS Standard</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 md:text-xl">Equivalent Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {mainData.map((row, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-blue-50 transition-colors"
                      onMouseEnter={() => setHoveredGrade(index)}
                      onMouseLeave={() => setHoveredGrade(null)}
                    >
                      <td className="px-6 py-4 text-gray-600 text-lg">{row.description}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{row.isStandard}</td>
                      <td className="px-6 py-4 text-gray-800">{row.equivalent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Technical Specifications Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="w-full px-6 py-4 flex items-center justify-between bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <span className="text-lg font-semibold">Technical Delivery Conditions</span>
              {isSpecsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
  
            {isSpecsOpen && (
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setActiveTab('specs1')}
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'specs1' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Specification Set 1
                  </button>
                  <button
                    onClick={() => setActiveTab('specs2')}
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'specs2' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Specification Set 2
                  </button>
                </div>
  
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nomenclature</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">TDC Specification</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Process Requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(activeTab === 'specs1' ? techSpecs1 : techSpecs2).map((spec, index) => (
                        <tr key={index} className="hover:bg-blue-50 transition-colors border-t">
                          <td className="px-6 py-4 text-blue-600 font-medium">{spec.nomenclature}</td>
                          <td className="px-6 py-4 text-gray-600">{spec.tdcSpec}</td>
                          <td className="px-6 py-4 text-gray-600 whitespace-pre-line">{spec.processReq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default HTPlate;