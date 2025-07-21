import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import './Navbar.css';
import Logo from '../../assets/admLogo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);

  const services = [
    { name: 'Branding', link: '/services/branding' },
    { name: 'Videography', link: '/videography' },
    { name: 'Photography', link: '/services/photo-graphy' },
    { name: 'Social Media Marketing', link: '/services/socialmedia-marketing' },
    { name: 'Paid Ads', link: '/services/paid-ads' },
    { name: 'SEO', link: '/services/seo' },
    { name: 'Web Designing', link: '/services/web-designing' },
    { name: 'Web Development', link: '/services/web-development' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => setIsServicesOpen(false)}>
            <img src={Logo} alt="Aidara" className="logo-icon" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <Link to="/" className="nav-link" onClick={() => setIsServicesOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsServicesOpen(false)}>About</Link>

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
                    <Link
                      key={index}
                      to={service.link}
                      className="dropdown-item"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link" onClick={() => setIsServicesOpen(false)}>Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

          <div className="mobile-dropdown">
            <button className="mobile-dropdown-toggle" onClick={() => setIsServicesOpen(!isServicesOpen)}>
              <span>Services</span>
              {isServicesOpen ? <ChevronUp className="arrow-icon" /> : <ChevronDown className="arrow-icon" />}
            </button>

            {isServicesOpen && (
              <div className="mobile-dropdown-menu">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="mobile-dropdown-item"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

