'use client';

import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info Column */}
          <div>
  <div className="mb-6"> 
    <img src="/logo.png" alt="Amoria Global Tech Logo" className="w-12 h-12 mb-3" />
    <span className="text-blue-200 font-bold text-xl">Amoria Global Tech</span>
  </div>
  <p className="text-blue-200 mb-6 leading-relaxed">
    Innovate, Secure, Connect the Future.
  </p>
</div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-blue-200 font-semibold text-lg mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li><a href="" className="text-blue-200 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="" className="text-blue-200 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="" className="text-blue-200 hover:text-white transition-colors duration-200">Team</a></li>
              <li><a href="" className="text-blue-200 hover:text-white transition-colors duration-200">Product</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-blue-200 font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-blue-200">
                  <span className="font-medium">Gmail:</span>
                  <a href="mailto:info@amoriaglobal.com" className="hover:text-white transition-colors duration-200 ml-1">
                    info@amoriaglobal.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-blue-200">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+250788437347" className="hover:text-white transition-colors duration-200 ml-1">
                    +250 788 437 347
                  </a>
                </p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-8">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-blue-200 font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-6">
              Subscribe for tech insights and company updates.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 Amoria Global Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;