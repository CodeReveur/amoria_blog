'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Chatbot from '../components/Chatbot';

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/', active: false },
    { name: 'ABOUT US', href: '/about', active: false },
    { name: 'SERVICES', href: '/services', active: true },
    { name: 'PRODUCTS', href: '/products', active: false },
  ];

  const services = [
    {
      title: 'Software Publishing',
      description: 'Comprehensive software publishing services including distribution, licensing, and digital marketplace management for your software products with global reach.',
      icon: '💿',
      features: ['Digital distribution', 'License management', 'Marketplace integration', 'Version control'],
      price: 'Starting at $199/month'
    },
    {
      title: 'Web Portals',
      description: 'Custom web portal development and management solutions that provide secure access to information and services for your users with advanced security features.',
      icon: '🌐',
      features: ['Custom portal design', 'User authentication', 'Content management', 'Responsive design'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Computer Programming',
      description: 'Professional software development services using cutting-edge technologies to build scalable and efficient applications tailored to your business needs.',
      icon: '💻',
      features: ['Custom software development', 'Full-stack solutions', 'API integration', 'Code optimization'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Computer Consultancy & Facilities Management',
      description: 'Expert IT consultancy and comprehensive computer facilities management to optimize your technology infrastructure and reduce operational costs.',
      icon: '🔧',
      features: ['IT consulting', 'Infrastructure management', 'System optimization', 'Technical support'],
      price: 'Starting at $499/month'
    },
    {
      title: 'TV Programming & Broadcasting Activities',
      description: 'Complete television programming and broadcasting solutions including content creation, scheduling, and distribution management for media companies.',
      icon: '📺',
      features: ['Content programming', 'Broadcasting management', 'Schedule optimization', 'Distribution networks'],
      price: 'Starting at $599/month'
    },
    {
      title: 'Memories Storage',
      description: 'Secure and reliable data storage solutions for preserving your digital memories and important information with cloud integration and backup services.',
      icon: '💾',
      features: ['Cloud storage', 'Data backup', 'Memory preservation', 'Secure access'],
      price: 'Starting at $99/month'
    }
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-wrapper">
            {/* Logo */}
            <Link href="/" className="logo">
              <Image 
                src="/logo.png" 
                alt="Amoria Tech Global" 
                width={200}
                height={200}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-center">
              <div className="nav-pills">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-pill ${item.active ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>

            {/* Enhanced Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <div className="mobile-menu-header">
                <Link href="/" className="mobile-menu-logo" onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/logo.png" 
                    alt="Amoria Tech Global" 
                    width={120}
                    height={60}
                    priority
                  />
                </Link>
                <button
                  className="mobile-menu-close"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="mobile-menu-content">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-menu-item ${item.active ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <div className="mobile-social-links">
                  <a href="https://facebook.com/share/1Ga8spfH7y/?mibextid=wwXIfr" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://instagram.com/amoria.globaltech?igsh=bjhsN3NrYTU2c2t5" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://x.com/amoriaglobaltech" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://linkedin.com/in/amoria-global-tech-8a774736b" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <div className="mobile-contact-info">
                  <p>📞 <a href="tel:+250788437347">+250 788 437 347</a></p>
                  <p>✉️ <a href="mailto:info@amoriaglobal.com">info@amoriaglobal.com</a></p>
                  <p>📍 Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-description">
              Comprehensive solutions designed to transform your business operations 
              and drive growth through innovative technology.
            </p>
          </section>

          {/* Services Grid */}
          <section className="services-grid-section">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-detail-card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      <span>{service.icon}</span>
                    </div>
                    <div className="service-price">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="service-detail-content">
                    <h3 className="service-detail-title">{service.title}</h3>
                    <p className="service-detail-description">{service.description}</p>
                    
                    <ul className="service-detail-features">
                      {service.features.map((feature, i) => (
                        <li key={i} className="service-detail-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="service-cta-button">
                      Get Started →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-description">
                Get started with our comprehensive suite of services today and see the difference 
                advanced technology can make for your business.
              </p>
              <div className="cta-buttons">
                <button className="cta-primary-btn">Start Free Trial</button>
                <button className="cta-secondary-btn">Schedule Demo</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}

      {/* Chatbot Widget */}
      <Chatbot />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">Useful Links</h3>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/services" className="footer-link">Services</Link></li>
                <li><Link href="/products" className="footer-link">Products</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Our Location</h3>
              <a 
                href="https://maps.google.com/?q=Kigali,Rwanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-location-link"
              >
                <i className="bi bi-geo-alt-fill"></i>
                <span>Kigali, Rwanda</span>
              </a>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact Us</h3>
              <div className="footer-contact">
                <a href="tel:+250788437347" className="contact-item">
                  <i className="bi bi-telephone-fill contact-icon"></i>
                  <span className="contact-text">+250 788 437 347</span>
                </a>
                <a href="mailto:info@amoriaglobal.com" className="contact-item">
                  <i className="bi bi-envelope-fill contact-icon"></i>
                  <span className="contact-text">info@amoriaglobal.com</span>
                </a>
                <div className="contact-item">
                  <i className="bi bi-clock-fill contact-icon"></i>
                  <span className="contact-text">Mon-Fri: 8am - 6pm</span>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Follow Us On :</h3>
              <div className="social-links">
                <a 
                  href="https://facebook.com/share/1Ga8spfH7y/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a 
                  href="https://instagram.com/amoria.globaltech?igsh=bjhsN3NrYTU2c2t5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a 
                  href="https://x.com/amoriaglobaltech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link twitter"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/amoria-global-tech-8a774736b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Amoria Global Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}