import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import './Navbar.css';
import Logo from '../../assets/admLogo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);

  const services = [
    'Branding',
     'Videography',
     'Photography',
    'Social Media Marketing',
    'Paid Ads',
    'SEO',
    'Social Media Marketing',
    'Web Designing',
    'Web Development'
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // close dropdown when mobile menu toggled
  };

  const handleMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // slight delay to prevent flicker
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Aidara" className="logo-icon" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>

          {/* Services Dropdown with FIXED Hover Behavior */}
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropdown-toggle">
              <span>Services</span>
              {isServicesOpen ? <ChevronUp className="arrow-icon" /> : <ChevronDown className="arrow-icon" />}
            </button>

            {isServicesOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {services.map((service, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          
          <a href="/contact" className="nav-link">Contact</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/" className="mobile-nav-link">Home</a>
          <a href="/about" className="mobile-nav-link">About</a>

          {/* Mobile Services Dropdown */}
          <div className="mobile-dropdown">
            <button className="mobile-dropdown-toggle" onClick={() => setIsServicesOpen(!isServicesOpen)}>
              <span>Services</span>
              {isServicesOpen ? <ChevronUp className="arrow-icon" /> : <ChevronDown className="arrow-icon" />}
            </button>

            {isServicesOpen && (
              <div className="mobile-dropdown-menu">
                {services.map((service, index) => (
                  <a key={index} href="#" className="mobile-dropdown-item">
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          
          <a href="/contact" className="mobile-nav-link">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

