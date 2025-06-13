'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Users, Award, Globe, Zap } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides data
  const slides = [
    {
      id: 1,
      title: "Innovate Your Business Future",
      subtitle: "Transform your digital presence with cutting-edge technology solutions",
      image: "/api/placeholder/1200/600",
      bgColor: "from-blue-600 to-purple-700"
    },
    {
      id: 2,
      title: "Secure Digital Solutions",
      subtitle: "Protecting your business with advanced cybersecurity measures",
      image: "/api/placeholder/1200/600",
      bgColor: "from-green-600 to-blue-600"
    },
    {
      id: 3,
      title: "Connect the Future",
      subtitle: "Building bridges between technology and human potential",
      image: "/api/placeholder/1200/600",
      bgColor: "from-purple-600 to-pink-600"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Updates data
  const updates = [
    {
      id: 1,
      date: "2025-01-15",
      title: "New AI-Powered Analytics Platform Launched",
      description: "We've launched our latest analytics platform that uses machine learning to provide deeper business insights.",
      category: "Product Launch"
    },
    {
      id: 2,
      date: "2025-01-10",
      title: "Partnership with Leading Tech Companies",
      description: "Exciting new partnerships announced to expand our service offerings across Africa.",
      category: "Partnership"
    },
    {
      id: 3,
      date: "2025-01-05",
      title: "Award for Innovation in Digital Solutions",
      description: "Recognized as the most innovative tech company in the region for our groundbreaking work.",
      category: "Achievement"
    }
  ];

  // Story data
  const story = {
    title: "Our Journey",
    subtitle: "Building Tomorrow's Technology Today",
    content: [
      "Founded with a vision to transform the digital landscape across Africa, Amoria Global Tech has been at the forefront of technological innovation since our inception.",
      "We believe in creating solutions that not only solve today's challenges but also pave the way for future opportunities. Our team of expert developers, designers, and strategists work tirelessly to deliver cutting-edge solutions.",
      "From small startups to large enterprises, we've helped hundreds of businesses achieve their digital transformation goals through our comprehensive suite of services."
    ],
    stats: [
      { number: "500+", label: "Projects Completed" },
      { number: "50+", label: "Happy Clients" },
      { number: "5+", label: "Years Experience" },
      { number: "99%", label: "Client Satisfaction" }
    ]
  };

  // Partners data
  const partners = [
    { id: 1, name: "TechCorp", logo: "/api/placeholder/150/80" },
    { id: 2, name: "InnovateLab", logo: "/api/placeholder/150/80" },
    { id: 3, name: "DigitalForward", logo: "/api/placeholder/150/80" },
    { id: 4, name: "CloudSystems", logo: "/api/placeholder/150/80" },
    { id: 5, name: "DataDriven", logo: "/api/placeholder/150/80" },
    { id: 6, name: "SecureNet", logo: "/api/placeholder/150/80" }
  ];

  return (
    <div className="min-h-screen">
      
      {/* SLIDES SECTION */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-90`}></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="text-center max-w-4xl px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* UPDATES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600">Stay informed about our latest developments and achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update) => (
              <div key={update.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-500">{update.date}</span>
                    <span className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {update.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{update.description}</p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{story.title}</h2>
              <h3 className="text-2xl text-blue-600 mb-8">{story.subtitle}</h3>
              <div className="space-y-6">
                {story.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {story.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;