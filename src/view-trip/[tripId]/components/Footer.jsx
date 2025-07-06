import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 mt-5 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center">
              <img src="logoipsum-custom-logo (1).svg" alt="" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your personal trip planner and travel curator, creating custom
              trips tailored to your preferences. Discover your next adventure
              with AI-powered itineraries.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
              >
                <FaInstagram className="text-gray-700 text-base" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
              >
                <FaTwitter className="text-gray-700 text-base" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
              >
                <FaFacebookF className="text-gray-700 text-base" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
              >
                <FaLinkedinIn className="text-gray-700 text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  Create Trip
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  My Trips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  Travel Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200 inline-block">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <FaGlobe className="text-gray-500 mr-2 text-sm" />
                  Japan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <FaGlobe className="text-gray-500 mr-2 text-sm" />
                  Italy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <FaGlobe className="text-gray-500 mr-2 text-sm" />
                  Bali
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <FaGlobe className="text-gray-500 mr-2 text-sm" />
                  Greece
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <FaGlobe className="text-gray-500 mr-2 text-sm" />
                  Costa Rica
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-gray-100 p-1.5 rounded-full mr-3">
                  <FaEnvelope className="text-gray-600 text-sm" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email us at</p>
                  <a
                    href="mailto:sumitdebnath1902@gmail.com"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    support@routeCraft.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-100 p-1.5 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-gray-600 text-sm" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Headquarters</p>
                  <p className="text-gray-800 text-sm">
                    123 Travel Street, Adventure City
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-100 p-1.5 rounded-full mr-3">
                  <FaPhone className="text-gray-600 text-sm" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call us</p>
                  <p className="text-gray-800 text-sm">+1 (555) 123-4567</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} routeCraft. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xs transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xs transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">
            Created with ❤️ by{" "}
            <span className="text-gray-600 font-medium">Sum_it</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
