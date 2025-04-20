import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setServicesOpen(false); // Close services dropdown when opening the menu
    }
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className=" top-0 left-0 w-full bg-white shadow-md z-50 h-auto ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-7">
  <div>
    <Link to="/" className="flex items-center py-2">
      <img
        src={logo}
        alt="Logo"
        className="h-20 w-36" // Increased height and width
      />
    </Link>
  </div>
</div>
          <div className="hidden md:flex items-center space-x-1 flex-grow justify-center">
            <Link
              to="/"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 hover:bg-gray-100 transition duration-300 rounded"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 hover:bg-gray-100 transition duration-300 rounded"
            >
              About us
            </Link>
            <div className="relative">
  <button
    onClick={toggleServices}
    className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 hover:bg-gray-100 transition duration-300 flex items-center rounded"
  >
    Our Services
    <svg
      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
        servicesOpen ? 'rotate-180' : ''
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  {servicesOpen && (
    <div
      className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-64 z-50"
      onMouseLeave={() => setServicesOpen(false)} // Optional: Close dropdown when mouse leaves the dropdown area
    >
      <ul className="py-2">
        {[
          { path: "/services/creative-service", label: "Creative Service" },
          { path: "/services/digital-marketing", label: "Digital Marketing" },
          { path: "/services/event-management", label: "Event Management" },
          { path: "/services/print-posm-promo-product-sourcing", label: "Print POSM & Promo Product Sourcing" },
          { path: "/services/retail-channel-management", label: "Retail Channel Management" },
          { path: "/services/video-production", label: "Video Production" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              onClick={() => {
                closeMenu(); // Close menu when a link is clicked
                setServicesOpen(false); // Close dropdown
              }}
              className="block px-4 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-100 transition duration-300 rounded"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
            <Link
              to="/our-work"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 hover:bg-gray-100 transition duration-300 rounded"
            >
              Our Work
            </Link>
            <Link
              to="/contact-us"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 hover:bg-gray-100 transition duration-300 rounded"
            >
              Contact us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              {menuOpen ? (
                <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black shadow-lg transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden z-50`}
        style={{ width: '50%' }}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button onClick={closeMenu} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="p-4">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-sm px-2 py-4 text-gray-400 hover:text-white hover:bg-gray-800 transition duration-300 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={closeMenu}
              className="block text-sm px-2 py-4 text-gray-400 hover:text-white hover:bg-gray-800 transition duration-300 rounded"
            >
              About us
            </Link>
          </li>
          <li>
            <button
              onClick={toggleServices}
              className="block text-sm px-2 py-4 text-gray-400 hover:text-white hover:bg-gray-800 transition duration-300 w-full text-left rounded flex items-center justify-between"
            >
              Our Services
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <ul className="pl-4">
                {[
                  { path: "/services/creative-service", label: "Creative Service" },
                  { path: "/services/digital-marketing", label: "Digital Marketing" },
                  { path: "/services/event-management", label: "Event Management" },
                  { path: "/services/print-posm-promo-product-sourcing", label: "Print POSM & Promo Product Sourcing" },
                  { path: "/services/retail-channel-management", label: "Retail Channel Management" },
                  { path: "/services/video-production", label: "Video Production" },
                ].map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 transition duration-300 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/our-work"
              onClick={closeMenu}
              className="block text-sm px-2 py-4 text-gray-400 hover:text-white hover:bg-gray-800 transition duration-300 rounded"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={closeMenu}
              className="block text-sm px-2 py-4 text-gray-400 hover:text-white hover:bg-gray-800 transition duration-300 rounded"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;