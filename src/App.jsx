import React, { useState } from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import FeedbackPage from './pages/FeedbackPage'
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage'
import AboutUS from './pages/AboutUS'
import ContactUS from './pages/ContactUS'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Enquiry from './component/Enquiry';
import Whatsapp from './component/Whatsapp';
import ChatBot from './component/ChatBot';

import MSPlate from './productdetails/MSPlate'
import BoilerPlate from './productdetails/BQPlate';
import HTPlate from './productdetails/HTPlate';
import HRSheet from './productdetails/HRSheet';
import Rails from './productdetails/Rails';
import CraneRails from './productdetails/CraneRail';
import MSAngle from './productdetails/MSAngle';
import MSBeams from './productdetails/MSBeam';
import MSChannel from './productdetails/MSChannel';
import RSJoist from './productdetails/RSJoist';
import HBeam from './productdetails/HBeam';
import MSFlats from './productdetails/MSFlats';
import MSUAngles from './productdetails/MSUangles';
import ChequeredPlatesPage from './productdetails/ChequredPlate';
import CallButton from './component/Call';
import HardPlate from './productdetails/HardPlate';


// Main App Component
const App = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/aboutus' element={<AboutUS />} />
          <Route path='/contactus' element={<ContactUS />} />
          <Route path='/products/mild-steel-plates' element={<MSPlate/>} />
          <Route path='/products/boiler-quality-plates' element={<BoilerPlate/>} />
          <Route path='/products/high-tensile-plates' element={<HTPlate/>} />
          <Route path='/products/hot-rolled-sheets-and-hr-coils' element={<HRSheet/>} />
          <Route path='/products/rails' element={<Rails/>} />
          <Route path='/products/crane-rails' element={<CraneRails/>} />
          <Route path='/products/mild-steel-angle' element={<MSAngle/>} />
          <Route path='/products/ms-Beam' element={<MSBeams/>} />
          <Route path='/products/ms-channel' element={<MSChannel/>} />
          <Route path='/products/rs-joist' element={<RSJoist/>} />
          <Route path='/products/h-beam' element={<HBeam/>} />
          <Route path='/products/ms-flats' element={<MSFlats/>} />
          <Route path='/products/ms-unequal-angle' element={<MSUAngles/>} />
          <Route path="/products/chequered-plates" element={<ChequeredPlatesPage />} />
          <Route path='/products/hard-plates' element={<HardPlate />} />
        {/* Fallback route (optional) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </div>
      {/* <ChatBot/> */}
      <Whatsapp/>
      <CallButton/>
      <Enquiry />
      <Footer/>
    </div>

  );
};

export default App;