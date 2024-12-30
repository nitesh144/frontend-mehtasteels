import React, { useState } from 'react'
import Welcome from '../component/Welcome';
import Services from '../component/Services';
import Why from '../component/Why';
import Enquiry from '../component/Enquiry';
import Contact from '../component/Contact';
import Product1 from '../component/Product1';
import Product2 from '../component/Product2';
import Product3 from '../component/Product3';
import Product4 from '../component/Product4';
import Map from '../component/Map';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar'
import HeroSection from '../component/Hero';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
        <div className="min-h-screen bg-gray-50">
          {/* <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
          <HeroSection />
          {/* <Welcome /> */}
          <Product1 />
          <Product2/>
          <Product3/>
          <Product4/>
          <Services />
          <Why />
          {/* <Enquiry /> */}
          {/* <Gallery /> */}
          {/* <Contact /> */}
          {/* <ChatBot/> */}
          {/* <Achievement/> */}
          {/* <Map /> */}
          {/* <Footer /> */}
        </div>
    </div>
  )
}

export default HomePage