import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../images/mehta-steels-logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Products',
      path: '/products',
      isDropdown: true,
      dropdownItems: {
        'Flat Steel Plates': [
          'Mild steel Plates',
          'Boiler Quality Plates',
          'High Tensile Plates',
          'Hot Rolled Sheets & Coils',
        ],
        'Long Steel Product': [
          'Rails',
          'Crane Rails',
          'Mild Steel Angle',
          'MS Beam',
          'MS Channel',
          'RS Joist',
          'H Beam',
          'MS Flats',
          'MS Unequal Angle',
        ],
      },
    },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  return (
    <header className="h-[83px] text-black relative overflow-hidden font-proxima">
      <nav
        className={`fixed top-0 left-0 z-50 w-full ${isScrolled ? 'bg-white text-black' : 'bg-white text-black'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 flex-grow justify-center font-semibold">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`text-black hover:text-orange-400 transition-colors text-lg relative flex items-center ${
                      location.pathname.startsWith('/products') ? 'border-b-2 border-orange-500' : ''
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-5 transition-transform" />
                  </Link>
                  {isProductsOpen && (
                    <div className="absolute top-full left-0 shadow-lg rounded-lg p-4 w-[400px] z-60 animate-fade-in flex space-x-8 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900">
                      {Object.entries(item.dropdownItems).map(([category, subItems]) => (
                        <div key={category} className="flex-shrink-0">
                          <h4 className="font-semibold text-xl text-white mb-2">{category}</h4>
                          <ul>
                            {subItems.map((subItem, index) => (
                              <li key={index} className="mb-1 transform hover:translate-x-1 transition-transform">
                                <Link
                                  to={`/products/${subItem.replace(/\s+/g, '-').replace(/&/g, 'and').toLowerCase()}`}
                                  className="text-white hover:text-orange-400 transition-colors text-sm font-semibold"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg relative group ${
                    location.pathname === item.path ? 'border-b-2 border-orange-500' : ''
                  } hover:text-orange-400 transition-colors`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Mehta Steels Logo"
              className="h-[70px] w-[100px] mt-3 mb-3 mr-[100px] rounded-xl transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute w-full transition-all duration-300 ${
            isMenuOpen ? 'bg-black/95 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-6 py-3 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     {
//       name: 'Products',
//       path: '/products',
//       isDropdown: true,
//       dropdownItems: {
//         'Flat Steel Plates': [
//           'Mild steel Plates',
//           'Boiler Quality Plates',
//           'High Tensile Plates',
//           'Hot Rolled Sheets & HR Coils'
//         ],
//         'Long Steel Product': [
//           'Rails',
//           'Crane Rails',
//           'Mild Steel Angle',
//           'MS Beam',
//           'MS Channel',
//           'RS Joist',
//           'H Beam',
//           'MS Flats',
//           'MS Unequal Angle'
//         ]
//       }
//     },
//     { name: 'About Us', path: '/aboutus' },
//     { name: 'Contact Us', path: '/contactus' }
//   ];

//   return (
//     <div className="h-20 relative">
//       <nav className={`fixed top-0 left-0 z-50 w-full bg-white shadow-sm`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center h-20">

//             {/* Desktop Navigation - Centered */}
//             <div className="flex-grow flex justify-center">
//               <div className="hidden md:flex items-center gap-10">
//                 {navItems.map((item) =>
//                   item.isDropdown ? (
//                     <div
//                       key={item.name}
//                       className="relative group"
//                       onMouseEnter={() => setIsProductsOpen(true)}
//                       onMouseLeave={() => setIsProductsOpen(false)}
//                     >
//                       <button
//                         className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
//                       >
//                         <span>{item.name}</span>
//                         <ChevronDown className="h-4 w-4" />
//                       </button>

//                       {isProductsOpen && (
//                         <div className="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-8">
//                           {Object.entries(item.dropdownItems).map(([category, subItems]) => (
//                             <div key={category}>
//                               <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
//                               <ul className="space-y-2">
//                                 {subItems.map((subItem, index) => (
//                                   <li key={index}>
//                                     <Link
//                                       to={`/products/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
//                                       className="text-gray-600 hover:text-blue-600 transition-colors block"
//                                     >
//                                       {subItem}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       to={item.path}
//                       className="relative group"
//                     >
//                       <span className="text-gray-800 hover:text-blue-600 font-medium">
//                         {item.name}
//                       </span>
//                       <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 
//                         ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//                     </Link>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Logo - Right Side */}
//             <div className="flex-shrink-0">
//               <img
//                 src="/api/placeholder/150/60"
//                 alt="Mehta Steels"
//                 className="h-14 w-auto"
//               />
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden ml-4 p-2 text-gray-600 hover:text-gray-900"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden transition-all duration-300 ${
//             isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//           } overflow-hidden bg-white border-t`}
//         >
//           <div className="container mx-auto px-4 py-4 space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="block text-gray-800 hover:text-blue-600 font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;