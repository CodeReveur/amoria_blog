'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance slides every 2 seconds
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl min-h-[500px]">
          {/* Updates Slide */}
          <div className={`transition-all duration-700 ease-in-out ${
            currentSlide === 0 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute inset-0'
          }`}>
            <div className="px-16 py-20 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-12 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">U</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Latest Updates</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                "We just launched our new AI-powered analytics platform! This revolutionary solution helps businesses make data-driven decisions with real-time insights. Our clients are experiencing remarkable improvements in operational efficiency."
              </p>
              <div className="flex justify-center space-x-2 mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-800">Product Team</div>
                <div className="text-gray-500 text-lg">Latest Technology Updates</div>
              </div>
            </div>
          </div>

          {/* Story Slide */}
          <div className={`transition-all duration-700 ease-in-out ${
            currentSlide === 1 ? 'translate-x-0 opacity-100' : currentSlide === 0 ? 'translate-x-full opacity-0 absolute inset-0' : '-translate-x-full opacity-0 absolute inset-0'
          }`}>
            <div className="px-16 py-20 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-12 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                "From a small team with big dreams to transforming businesses across Africa. We started with a vision to bridge the technology gap and empower local businesses with world-class digital solutions. Today, we're proud to serve amazing clients."
              </p>
              <div className="flex justify-center space-x-2 mb-8">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-800">Founding Team</div>
                <div className="text-gray-500 text-lg">About Amoria Global Tech</div>
              </div>
            </div>
          </div>

          {/* Partners Slide */}
          <div className={`transition-all duration-700 ease-in-out ${
            currentSlide === 2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 absolute inset-0'
          }`}>
            <div className="px-16 py-20 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-12 flex items-center justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Partners</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                "Working with Amoria Global Tech has been a game-changer for our business. Their innovative solutions and dedicated support team helped us scale our operations efficiently. The partnership has exceeded all our expectations."
              </p>
              <div className="flex justify-center space-x-2 mb-8">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-800">Partner Network</div>
                <div className="text-gray-500 text-lg">Strategic Collaborations</div>
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