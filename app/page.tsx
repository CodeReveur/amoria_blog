'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Only run on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance slides every 20 seconds
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 20000);
    
    return () => clearInterval(timer);
  }, [isClient]);

  // Show loading only on server side
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl min-h-[350px]">
          {/* Updates Slide */}
          <div className={`transition-all duration-700 ease-in-out ${
            currentSlide === 0 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute inset-0'
          }`}>
            <div className="px-16 py-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Updates</h2>
              
              {/* Multiple Updates */}
              <div className="space-y-6 max-w-4xl mx-auto">
                {/* Update 1 */}
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">NEW</span>
                    <span className="text-gray-500 text-sm">January 15, 2025</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">AI-Powered Analytics Platform Launched</h3>
                  <p className="text-gray-600 text-sm">We've successfully launched our new AI analytics platform that helps businesses make data-driven decisions with real-time insights.</p>
                </div>

                {/* Update 2 */}
                <div className="bg-green-50 rounded-lg p-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">PARTNERSHIP</span>
                    <span className="text-gray-500 text-sm">January 10, 2025</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Strategic Partnership with TechCorp</h3>
                  <p className="text-gray-600 text-sm">Exciting new partnership announced to expand our cloud services and provide enhanced solutions to clients across Africa.</p>
                </div>

                {/* Update 3 */}
                <div className="bg-purple-50 rounded-lg p-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">ACHIEVEMENT</span>
                    <span className="text-gray-500 text-sm">January 5, 2025</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">50+ Happy Clients Milestone Reached</h3>
                  <p className="text-gray-600 text-sm">We're proud to announce that we've successfully served over 50 satisfied clients with 99% satisfaction rate.</p>
                </div>
              </div>

              <div className="text-center mt-6">
                <div className="font-bold text-lg text-gray-800">Product Team</div>
                <div className="text-gray-500">Latest Technology Updates</div>
              </div>
            </div>
          </div>

          {/* Story Slide */}
          <div className={`transition-all duration-700 ease-in-out ${
            currentSlide === 1 ? 'translate-x-0 opacity-100' : currentSlide === 0 ? 'translate-x-full opacity-0 absolute inset-0' : '-translate-x-full opacity-0 absolute inset-0'
          }`}>
            <div className="px-16 py-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
                "From a small team with big dreams to transforming businesses across Africa. We started with a vision to bridge the technology gap and empower local businesses with world-class digital solutions. Today, we're proud to serve amazing clients."
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800">Founding Team</div>
                <div className="text-gray-500">About Amoria Global Tech</div>
              </div>
            </div>
          </div>

          {/* Partners Slide */}
          <div className={`transition-all duration-700 ease-in-out ${
            currentSlide === 2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 absolute inset-0'
          }`}>
            <div className="px-16 py-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Partners</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
                "Working with Amoria Global Tech has been a game-changer for our business. Their innovative solutions and dedicated support team helped us scale our operations efficiently. The partnership has exceeded all our expectations."
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800">Partner Network</div>
                <div className="text-gray-500">Strategic Collaborations</div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray-50 hover:bg-gray-100 rounded-full p-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-50 hover:bg-gray-100 rounded-full p-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'bg-blue-600 w-12 h-4' 
                  : 'bg-gray-300 hover:bg-gray-400 w-4 h-4'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}