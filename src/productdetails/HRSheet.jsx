import { Building2, FileStack, Package, Ruler, Scale } from "lucide-react";
import React from "react";
import HRSheet1 from '../productImage/hr-sheet1.jpg'
import HRSheet2 from '../productImage/hr sheet2.png'
import HRSheet3 from '../productImage/hr sheet3.png'

const HRSheet = () => {
    const specifications = [
      { label: "Thickness", value: "3mm to 10 mm", icon: <Ruler className="w-6 h-6" /> },
      { label: "Width", value: "820mm to 2500 mm", icon: <Scale className="w-6 h-6 rotate-90" /> },
      { label: "Length of Sheets", value: "2000 mm â€ 24000 mm", icon: <FileStack className="w-6 h-6" /> },
      { label: "HR Coil Weight", value: "Max. 45 MT", icon: <Package className="w-6 h-6" /> },
      { label: "Material Grade", value: "As per all National & International standards", icon: <Building2 className="w-6 h-6" /> },
    ];

    const industries = [
      "shipbuilding",
      "fabrication",
      "power",
      "sugar",
      "cement",
      "fertilizers",
    ];

    const galleryImages = [HRSheet1, HRSheet2, HRSheet3];

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header hero */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 mb-12">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-white mb-4">
                Hot Rolled Sheets and HR Coils
              </h1>
              <h3 className="text-xl font-semibold text-white mb-4">
                Mehta steels is a experienced supplier of hot rolled sheets and coils
              </h3>
            </div>
            {/* <div className="absolute -right-20 -bottom-20 opacity-10">
              <Package className="w-96 h-96" />
            </div> */}
          </div>

          {/* Main Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

            <p className="text-gray-600 mb-6 text-lg">
              Hot rolled coils and hot rolled sheets, commonly referred to as HR sheets and HR coils, are essential materials supplied by Mehta Steels. With years of expertise, Mehta Steels specializes in trading and delivering high-quality HR sheets, HR coils, and HSM plates (Hot Strip Mill plates) to industries across various sectors.
            </p>

            {/* Industries Grid */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Industries We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3 text-center text-blue-700 capitalize transform hover:scale-105 transition-transform">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Range of hr Sheets and hr Coils in Stock</h3>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-blue-500">
                      {spec.icon}
                    </div>
                    <div>
                      <p className="text-gray-600">{spec.label}</p>
                      <p className="text-gray-800 font-medium">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((src, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg aspect-video hover:opacity-75 transition-opacity">
                    <img
                      src={src}
                      alt={`Hot rolled sheet ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 text-white p-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Standard Size of Hot Rolled Sheets & Coils
            </button>
            <button className="bg-blue-500 text-white p-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Technical Specifications of Hot Rolled Sheets & Coils
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default HRSheet;