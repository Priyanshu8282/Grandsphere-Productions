import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import InformationSecurityPolicy from './pages/information_security_policy';
import OurWork from './pages/OurWork';
import ContactUs from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CreativeService from './pages/services/CreativeService';
import DigitalMarketing from './pages/services/DigitalMarketing';
import EventManagement from './pages/services/EventManagement';
import PrintPOSM from './pages/services/PrintPOSM';
import RetailChannelManagement from './pages/services/RetailChannelManagement';
import VideoProduction from './pages/services/VideoProduction';
import NotFound from './pages/NotFound'; // Import NotFound page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/creative-service" element={<CreativeService />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/event-management" element={<EventManagement />} />
        <Route path="/services/print-posm-promo-product-sourcing" element={<PrintPOSM />} />
        <Route path="/services/retail-channel-management" element={<RetailChannelManagement />} />
        <Route path="/services/video-production" element={<VideoProduction />} />
        <Route path="/information-security-policy" element={<InformationSecurityPolicy />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;