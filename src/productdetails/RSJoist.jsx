import { Package } from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet';

const RSJoist = () => {
    const metaKeywords =
        "RS Joist, Rolled Steel Joist, Steel Beams, Mehta Steels, Steel Sections, Structural Steel, Steel Profiles";
    const metaDescription =
        "Mehta Steels offers high-quality RS Joist (Rolled Steel Joist) with precise specifications including size, weight, and dimensions. Explore our structural steel solutions.";
    return (
        <div>
            <Helmet>
                <title>RS Joist | Rolled Steel Joist Specifications | Mehta Steels</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <meta name="author" content="Mehta Steels" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <main>
                <header className="max-w-7xl mx-auto mt-7">
                    <div className="relative rounded-2xl max-w-7xl mt-10 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold text-white mb-6">RS Joist</h1>
                            {/* <p className="text-blue-100 text-xl max-w-2xl">
                            Mehta steels is stockist of rails
                        </p> */}
                        </div>
                        {/* <div className="absolute -right-20 -bottom-20 opacity-10">
                        <Package className="w-96 h-96" />
                    </div> */}
                    </div>
                </header>

                <section aria-labelledby="rs-joist-specifications" className='overflow-x-auto max-w-7xl ml-[120px] p-5'>
                    <table className='min-w-full border-collapse border border-gray-400'>
                        <thead>
                            <tr className='bg-gray-700 text-white'>
                                <th className="border border-gray-400 px-4 py-2">Size</th>
                                <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                                <th className="border border-gray-400 px-4 py-2">Mass(M) Kg./Mtr.</th>
                                <th className="border border-gray-400 px-4 py-2">Sectional Area (a) cm2</th>
                                <th className="border border-gray-400 px-4 py-2">Depth (D) mm</th>
                                <th className="border border-gray-400 px-4 py-2">Flange Wdth (B) mm</th>
                                <th className="border border-gray-400 px-4 py-2">Thickness of Web (t) mm</th>
                                <th className="border border-gray-400 px-4 py-2">Thickness of Flange (T) mm</th>
                                <th className="border border-gray-400 px-4 py-2">Flange Slope Max Deg.</th>
                                <th className="border border-gray-400 px-4 py-2">Root Radius (R1) mm</th>
                                <th className="border border-gray-400 px-4 py-2">Toe Radius (R2) mm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white text-gray-700">
                                <td className="border border-gray-400 px-4 py-2 text-center">1</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">116 x 100</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">23.0</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">29.3</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">116</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">100</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">8.5</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">10</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">98.0</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">12</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">6.0</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}

export default RSJoist