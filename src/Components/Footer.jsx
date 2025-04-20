import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GrendSphere</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/our-work" className="hover:text-gray-400">Our Work</a></li>
        
              <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/creative-service" className="hover:text-gray-400">Creative Services</a></li>
              <li><a href="/services/digital-marketing" className="hover:text-gray-400">Digital Marketing</a></li>
              <li><a href="/services/event-management" className="hover:text-gray-400">Event Management</a></li>
              <li><a href="/services/print-posm-promo-product-sourcing" className="hover:text-gray-400">Print, POSM & Promo Product Sourcing</a></li>
              <li><a href="/services/retail-channel-management" className="hover:text-gray-400">Retail Channel Management</a></li>
              <li><a href="/services/video-production" className="hover:text-gray-400">Video Production</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">Want to make an impact? Get in touch!</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                LinkedIn
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <p>
              © 2025 GrendSphere Professional Management and Event. All rights reserved. |{' '}
              <a href="/information-security-policy" className="hover:text-gray-400">
                Information Security Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;