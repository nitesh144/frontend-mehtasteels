import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/mehtasteelsbhilai', icon: <FaFacebook />, label: 'Facebook', bgColor: 'bg-blue-600' },
    { href: 'https://instagram.com/mehta_steels', icon: <FaInstagram />, label: 'Instagram', bgColor: 'bg-pink-600' },
    { href: 'https://www.linkedin.com/company/mehta-steels/', icon: <ImLinkedin />, label: 'LinkedIn', bgColor: 'bg-blue-800' },
    { href: 'https://youtube.com/@mehtasteels2492', icon: <FaYoutube />, label: 'YouTube', bgColor: 'bg-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <nav className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Navigation */}
          <section aria-labelledby="footer-navigation" className="space-y-6">
            <h4 id="footer-navigation" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    aria-label={`Navigate to ${item.name}`}
                    className="group flex items-center space-x-2 transition-all duration-300 hover:text-blue-400"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4"></span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Social Media */}
          <section aria-labelledby="footer-social" className="space-y-6">
            <h4 id="footer-social" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Social
            </h4>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="group flex items-center space-x-3 transition-all duration-300"
                >
                  <div className={`${social.bgColor} p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110`}>
                    {React.cloneElement(social.icon, { size: 20 })}
                  </div>
                  <span className="transform transition-all duration-300 group-hover:translate-x-1">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Info */}
          <section aria-labelledby="footer-contact" className="space-y-6">
            <h4 id="footer-contact" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Contact Us
            </h4>
            <address className="not-italic space-y-4">
              <div className="group flex items-start space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110">
                  <IoCall size={20} />
                </div>
                <div>
                  <a href="tel:+919302834985" className="block hover:text-blue-400 transition-colors duration-300">+91-9302834985</a>
                  <a href="tel:+919993530009" className="block hover:text-blue-400 transition-colors duration-300">+91-9993530009</a>
                </div>
              </div>
              <div className="group flex items-start space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110">
                  <MdEmail size={20} />
                </div>
                <a
                  href="mailto:mehta_steels@rediffmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  mehta_steels@rediffmail.com
                </a>
              </div>
            </address>
          </section>

          {/* Office Details */}
          <section aria-labelledby="footer-visit" className="space-y-6">
            <h4 id="footer-visit" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="p-4 backdrop-blur-lg bg-white/5 rounded-lg border border-white/10">
                <p className="font-medium">
                  137 Light Industrial Area<br />
                  Bhilai, Chhattisgarh<br />
                  Pin: 490026, INDIA
                </p>
              </div>
              <div className="p-4 backdrop-blur-lg bg-white/5 rounded-lg border border-white/10">
                <h5 className="font-semibold mb-2">Office Hours</h5>
                <p>Mon - Sat, 9:30 am to 7:00 pm</p>
              </div>
            </div>
          </section>
        </nav>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Mehta Steels. All rights reserved. 
            <span className="block mt-1 text-blue-400">Built with integrity and dedication.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
