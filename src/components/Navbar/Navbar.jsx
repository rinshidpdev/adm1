import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import './Navbar.css';
import Logo from '../../assets/admLogo.png'

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    'Branding',
    'Chatbots',
    'Content Marketing',
    'Customisation & Strategy',
    'Email Automation',
    'GEO',
    'Paid Ads',
    'SEO',
    'Social Media Marketing',
    'Web Designing',
    'Web Development'
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
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
          <a href="#" className="nav-link">
            About
          </a>
          
          {/* Services Dropdown */}
          <div 
            className="dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="dropdown-toggle">
              <span>Services</span>
              {isServicesOpen ? (
                <ChevronUp className="arrow-icon" />
              ) : (
                <ChevronDown className="arrow-icon" />
              )}
            </button>
            
            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className="dropdown-item"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#" className="nav-link">
            Future
          </a>
          
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-nav-link">
            About
          </a>
          
          {/* Mobile Services Dropdown */}
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-toggle"
              onClick={toggleServicesDropdown}
            >
              <span>Services</span>
              {isServicesOpen ? (
                <ChevronUp className="arrow-icon" />
              ) : (
                <ChevronDown className="arrow-icon" />
              )}
            </button>
            
            {/* Mobile Dropdown Menu */}
            {isServicesOpen && (
              <div className="mobile-dropdown-menu">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="mobile-dropdown-item"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="mobile-nav-link">
            Future
          </a>
          
          <a href="#" className="mobile-nav-link">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;