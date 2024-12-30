import { Package } from "lucide-react";
import React from 'react'
import { Helmet } from "react-helmet";

const MSFlats = () => {
  // Data array for the table
  const flatsData = [
    { width: 12, t3: 0.28, t4: 0.38, t5: 0.47, t6: 0.56 },
    { width: 16, t3: 0.38, t4: 0.5, t5: 0.63, t6: 0.75 },
    { width: 20, t3: 0.47, t4: 0.63, t5: 0.79, t6: 0.94 },
    { width: 25, t3: 0.6, t4: 0.8, t5: 1, t6: 1.2, t7: 1.4, t8: 1.6, t9: 1.8, t10: 2, t12: 2.4 },
    { width: 30, t3: 0.7, t4: 0.9, t5: 1.2, t6: 1.4, t7: 1.6, t8: 1.9, t9: 2, t10: 2.4, t12: 2.8, t16: 3.8 },
    { width: 32, t3: 0.8, t4: 1, t5: 1.3, t6: 1.5, t7: 1.7, t8: 2, t9: 2.3, t10: 2.5, t12: 3, t16: 4 },
    { width: 35, t3: 0.8, t4: 1.1, t5: 1.4, t6: 1.6, t7: 1.9, t8: 2.2, t9: 2.5, t12: 3.3, t16: 4.4, t18: 5, t20: 5.6 },
    { width: 40, t3: 0.9, t4: 1.3, t5: 1.6, t6: 1.9, t7: 2.2, t8: 2.5, t9: 2.8, t10: 3.1, t12: 3.8, t15: 4.7, t16: 5, t18: 5.6, t20: 6.3 },
    { width: 45, t3: 1.1, t4: 1.6, t5: 2, t6: 2.4, t7: 2.5, t8: 2.8, t9: 3.2, t10: 3.5, t12: 4.2, t15: 5.3, t16: 5.6, t18: 6.4, t20: 7.1 },
    { width: 50, t3: 1.2, t4: 1.7, t5: 2.2, t6: 2.6, t7: 2.7, t8: 3.1, t9: 3.5, t10: 4.3, t12: 7.7, t15: 6.5, t16: 6.3, t18: 7.1, t20: 7.8 },
    { width: 55, t3: 1.3, t4: 1.9, t5: 2.4, t6: 2.8, t7: 3, t8: 3.5, t9: 3.9, t10: 4.3, t12: 5.2, t15: 7.1, t16: 6.9, t18: 7.8, t20: 8.6 },
    { width: 60, t3: 1.4, t6: 3, t7: 3.3, t8: 3.8, t9: 4.2, t10: 4.7, t12: 5.6, t16: 7.5, t18: 8.5, t20: 9.4 },
    { width: 63, t6: 3, t7: 3.4, t8: 4, t9: 4.6, t10: 4.9, t12: 5.9, t15: 7.6, t16: 7.9, t18: 8.9, t20: 9.9 }
  ];

  const thicknesses = [3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 18, 20];

  return (
    <>
      <Helmet>
        <title>Mild Steel Flats - Mehta Steels</title>
        <meta name="description" content="Discover a wide range of Mild Steel Flats (Patta, Patti) for various applications like gates, grills, stairs, and more at Mehta Steels. We provide both mild and high tensile grades." />
        <meta name="keywords" content="Mild Steel Flats, MS Flats, Patta, Patti, Steel Suppliers, Steel Grades, Mehta Steels" />
        <meta property="og:title" content="Mild Steel Flats - Mehta Steels" />
        <meta property="og:description" content="Explore our collection of Mild Steel Flats (Patta, Patti) available in different widths and thicknesses for industrial use. Suitable for various construction applications." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://www.mehtasteels.com/ms-flats" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="max-w-7xl mx-auto p-6 bg-gray-50">
        {/* Header Section */}
        <div className="relative rounded-2xl max-w-7xl mt-10 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6">Mild Steel Flats</h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Mehta steels supplies MS Flats as per clients requirements.
            </p>
          </div>
          {/* <div className="absolute -right-20 -bottom-20 opacity-10">
          <Package className="w-96 h-96" />
        </div> */}
        </div>

        <div className="m-8">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            {/* <h2 className="text-2xl font-semibold text-gray-800">Mehta steels trades and supplies ms flats</h2> */}
            <p className="text-gray-600 text-lg">
              Mehta steels commonly supplies light and heavy flats commonly termed in INDIA as patta, Patti.
              These are used as Sections in windows, grills, Gates, Stairs, Truck / Bus body building, ship building earth strips, etc.
            </p>
            <p className="text-gray-600">
              Mild steel flats supplied by Mehta Steels are available in mild steel grade and high tensile grades.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              DIMENSION AND PROPERTIES - WEIGHT IN KG / METREAS PER ISI SPECFICATION IS : 2062-1999
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-center">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-3 py-3 text-sm font-bold text-gray-700 border">
                    WIDTH IN MM
                  </th>
                  {thicknesses.map(thickness => (
                    <th key={thickness} className="px-3 py-3 text-sm font-bold text-gray-700 border">
                      {thickness}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {flatsData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-2 text-sm font-medium text-gray-900 border">
                      {row.width}
                    </td>
                    {thicknesses.map(thickness => (
                      <td key={thickness} className="px-3 py-2 text-sm text-gray-600 border text-center">
                        {row[`t${thickness}`] || ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MSFlats