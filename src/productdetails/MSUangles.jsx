import { Package } from "lucide-react";
import uAngle from '../productImage/unnequal-angles.png'
import React from 'react'

const MSUAngles = () => {
    const tableData = [
      {
        srNo: 1,
        size: 'UEA 125',
        mass: [9.2, 12.1, 14.9],
        sectionalArea: [11.7, 15.4, 19.0],
        dimensions: '125 x 75',
        thickness: [6, 8, 10],
        rootRadius: 9.0,
        toeRadius: 'Reasonable Square',
      },
      {
        srNo: 2,
        size: 'UEA 100',
        mass: [null, 10.5, 13.0],
        sectionalArea: [null, null, null],
        dimensions: ['100 x 50', '100 x 75', '100 x 75'],
        thickness: [6, 8, 10],
        rootRadius: null,
        toeRadius: null,
      },
      {
        srNo: 3,
        size: 'UEA 125',
        mass: [12.1, 14.9],
        sectionalArea: [null],
        dimensions: ['125 x 75', '125 x 75'],
        thickness: [8, 10],
        rootRadius: null,
        toeRadius: null,
      },
      {
        srNo: 4,
        size: 'UEA 150',
        mass: [17.7, 16.9, 20.1],
        sectionalArea: [null],
        dimensions: ['150 x 75', '150 x 75', '150 x 75'],
        thickness: [8, 10, 12],
        rootRadius: null,
        toeRadius: null,
      },
      {
        srNo: 5,
        size: 'UEA 150',
        mass: [20.0, 23.8],
        sectionalArea: [null],
        dimensions: ['150 x 115', '150 x 115'],
        thickness: [10, 12],
        rootRadius: null,
        toeRadius: null,
      },
    ];

    return (
      <div className="max-w-6xl mx-auto p-4">
        <meta
                name="description"
                content="Explore high-quality Mild Steel Unequal Angles at Mehta Steels. These MS Unequal Angles are ideal for a variety of industrial applications, offering excellent strength and durability."
            />
            <meta
                name="keywords"
                content="Mild Steel Unequal Angles, MS Unequal Angles, Structural Angles, Mehta Steels, Steel Angle Sections, Engineering Steel Products"
            />
            <meta
                name="title"
                content="Mild Steel Unequal Angles - Mehta Steels"
            />
            <meta
                property="og:title"
                content="Mild Steel Unequal Angles - Mehta Steels"
            />
            <meta
                property="og:description"
                content="Mehta Steels offers premium quality Mild Steel Unequal Angles, ideal for structural and engineering applications, with superior mechanical properties."
            />
        {/* <h1 className="text-3xl text-blue-500 text-center mb-6">MS Unequal Angles</h1> */}
        {/* Header */}
        <header className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-8 mb-12">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">
              Mild Steel Unequal Angle
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Mehta Steel Supplies Premium quality MS Unequal Angles with superior mechanical properties.
            </p>
          </div>
          {/* <div className="absolute -right-20 -bottom-20 opacity-10">
            <Package className="w-96 h-96" />
          </div> */}
        </header>

        {/* Description */}
        <section className="mb-8 text-lg">Mild steel unequal angles supplied by Mehta steels are:</section>

        {/* Image */}
        <div className="mb-8 text-center">
          <img
            src={uAngle}
            alt="Unequal Angle Sections"
            className="mx-auto w-[150px] h-[150px] object-contain"
          />
          <p className="text-center mt-2">Unequal Leg Angle Sections</p>
        </div>

        {/* Table */}
        <section className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Size</th>
                <th className="border p-2">Mass(M) Kg/Mtr.</th>
                <th className="border p-2">Sectional Area(a) cm2</th>
                <th className="border p-2">A x B mm</th>
                <th className="border p-2">Thickness (t) mm</th>
                <th className="border p-2">Root Radidus (R1) mm</th>
                <th className="border p-2">Toe Radius (R2) mm</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) =>
                Array.isArray(row.mass)
                  ? row.mass.map((_, subIndex) => (
                    <tr key={`${rowIndex}-${subIndex}`} className="hover:bg-gray-50">
                      {subIndex === 0 && (
                        <td rowSpan={row.mass.length} className="border p-2 text-center">
                          {row.srNo}
                        </td>
                      )}
                      {subIndex === 0 && (
                        <td rowSpan={row.mass.length} className="border p-2">
                          {row.size}
                        </td>
                      )}
                      <td className="border p-2 text-center">{row.mass[subIndex]}</td>
                      <td className="border p-2 text-center">{row.sectionalArea[subIndex]}</td>
                      <td className="border p-2 text-center">
                        {Array.isArray(row.dimensions) ? row.dimensions[subIndex] : row.dimensions}
                      </td>
                      <td className="border p-2 text-center">{row.thickness[subIndex]}</td>
                      {subIndex === 0 && (
                        <td rowSpan={row.mass.length} className="border p-2 text-center">
                          {row.rootRadius}
                        </td>
                      )}
                      {subIndex === 0 && (
                        <td rowSpan={row.mass.length} className="border p-2 text-center">
                          {row.toeRadius}
                        </td>
                      )}
                    </tr>
                  ))
                  : null
              )}
            </tbody>
          </table>
        </section>
      </div>
    );
  };

  export default MSUAngles