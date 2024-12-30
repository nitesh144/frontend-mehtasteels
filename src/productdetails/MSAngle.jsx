import { Package, Building, Hammer, Factory, ConstructionIcon } from "lucide-react";
import msAngle1 from '../productImage/ms-angle.png'
import msAngle2 from '../productImage/mild-steel-angle.jpg'
import msAngle3 from '../productImage/steel-angles-for-industry.jpg'
import msangle1 from '../assets/msangle1.png'
import msangle2 from '../assets/msangle2.png'
import msangle3 from '../assets/msangle3.png'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const MSAngle = () => {
  const [activeSection, setActiveSection] = useState('about');

  const specifications = [
    { srNo: 1, item: 'ISA', description: '20 x 20 x 3', G: 0.879, hb: 20, t: 3, r1: 3.5, r2: 2.0, A: 1.12, z: 0.596, v: 1.41, u1: 0.843, u2: 0.700, AL: 0.077, AG: 87.40 },
    { srNo: 2, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 3, item: 'ISA', description: '25 x 25 x 4', G: 1.45, hb: 25, t: 4, r1: 3.5, r2: 2.0, A: 1.85, z: 0.761, v: 1.77, u1: 1.08, u2: 0.892, AL: 0.097, AG: 66.67 },
    { srNo: 4, item: 'ISA', description: '32 x 32 x 3', G: 1.36, hb: 32, t: 3, r1: 5, r2: 2.5, A: 1.74, z: 0.835, v: 2.12, u1: 1.18, u2: 1.05, AL: 0.116, AG: 84.87 },
    { srNo: 5, item: 'ISA', description: '32 x 32 x 4', G: 1.78, hb: 32, t: 4, r1: 5, r2: 2.5, A: 2.27, z: 0.878, v: 2.12, u1: 1.24, u2: 1.06, AL: 0.116, AG: 65.02 },
    { srNo: 6, item: 'ISA', description: '35 x 35 x 4', G: 2.09, hb: 35, t: 4, r1: 5, r2: 2.5, A: 2.67, z: 1.00, v: 2.47, u1: 1.42, u2: 1.24, AL: 0.136, AG: 64.82 },
    { srNo: 7, item: 'ISA', description: '40 x 40 x 4', G: 2.42, hb: 40, t: 3, r1: 6, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },

    { srNo: 8, item: 'ISA', description: '40 x 40 x 5', G: 2.97, hb: 40, t: 5, r1: 6, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 9, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 10, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 11, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 12, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 13, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 14, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 15, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 16, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 17, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 18, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 19, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 20, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 21, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 22, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 23, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 24, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 25, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 26, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 27, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 28, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 29, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 30, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },
    { srNo: 31, item: 'ISA', description: '25 x 25 x 3', G: 1.11, hb: 25, t: 3, r1: 3.5, r2: 2.0, A: 1.42, z: 0.721, v: 1.77, u1: 1.02, u2: 0.877, AL: 0.097, AG: 86.88 },

  ];

  const applications = [
    {
      icon: Building,
      title: 'Construction Projects',
      description: 'Bridges, buildings, and infrastructure development utilizing high-strength mild steel angles.'
    },
    {
      icon: Hammer,
      title: 'Engineering & Fabrication',
      description: 'Precision fabrication and engineering solutions across various industrial sectors.'
    },
    {
      icon: Factory,
      title: 'Industrial Frameworks',
      description: 'Robust structural support for industrial sheds, machinery platforms, and support structures.'
    },
    {
      icon: ConstructionIcon,
      title: 'Structural Components',
      description: 'Critical steel components for plants, factories, and complex engineering projects.'
    }
  ];

  const images = [
    {
      src: msAngle1,
      alt: "MS Angle 1",
      caption: "Labeled dimensions for MS Equal Angles (Diagram 1)",
    },
    {
      src: msAngle2,
      alt: "MS Angle 2",
      caption: "Dimensional representation (Diagram 2)",
    },
    {
      src: msAngle3,
      alt: "MS Angle 3",
      caption: "Detailed design with angles (Diagram 3)",
    },
  ];
  const productImages = [msangle1, msangle2, msangle3];

  return (
    <>
      <Helmet>
        <title>Mild Steel Angles | Mehta Steels</title>
        <meta name="description" content="Discover high-quality Mild Steel Angles (MS Angles) from Mehta Steels, ideal for construction, engineering, and industrial applications." />
        <meta name="keywords" content="Mild Steel Angles, MS Angles, Steel Supplier, Construction Steel, Structural Steel, Mehta Steels" />
        <link rel="canonical" href="https://www.mehtasteels.com/ms-angle" />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl max-w-7xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 ml-[120px] mt-10"
        >
          <div className="relative z-10 ">
            <h1 className="text-4xl font-bold text-white mb-4">Mild Steel Angles</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Mehta Steels: Your Trusted Stockist and Supplier of High-Quality MS Angles
            </p>
          </div>
          {/* <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 " >
            <Package className="w-full h-full" />
          </div> */}
        </motion.div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* About and Applications Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">About MS Angles</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Mehta Steels specializes in supplying MS angles with a versatile L-shaped cross-section,
                manufactured using advanced hot rolling processes in state-of-the-art steel rolling mills.
                Our comprehensive range includes light, heavy, unequal, and rolled angles to meet diverse
                industrial requirements.
              </p>
            </div>

            {/* Applications Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Key Applications</h2>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <app.icon className="w-8 h-8 mr-3 text-blue-500" />
                      <h3 className="font-semibold text-gray-800">{app.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Basic Sizes of MS Equal Angles
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Available in ready stock with <span className="font-semibold">Mehta Steels</span>.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-contain"
                    />
                    <div className="p-4">
                      <p className="text-gray-700 text-sm text-center">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );

          {/* Specifications Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg overflow-x-auto"
          >
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  {['Sr.No', 'Item', 'Description', 'G (kg/m)', 'h=b (mm)', 't (mm²)', 'r₁ (mm)', 'r₂ (mm)', 'A (mm)'].map((header) => (
                    <th key={header} className="p-3 text-left text-blue-800 font-semibold border-b">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-3 border-b">{spec.srNo}</td>
                    <td className="p-3 border-b">{spec.item}</td>
                    <td className="p-3 border-b">{spec.description}</td>
                    <td className="p-3 border-b">{spec.G}</td>
                    <td className="p-3 border-b">{spec.hb}</td>
                    <td className="p-3 border-b">{spec.t}</td>
                    <td className="p-3 border-b">{spec.r1}</td>
                    <td className="p-3 border-b">{spec.r2}</td>
                    <td className="p-3 border-b">{spec.A}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

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
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <img
                    src={image}
                    alt={`Mild Steel Angle Gallery ${index + 1}`}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default MSAngle;