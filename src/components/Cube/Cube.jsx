import React, { useState, useEffect, useRef } from 'react';
import './Cube.css';
import cube from '../../assets/cube.png'


// Simple Cube Component with forward/backward movement
const Cube = ({ scrollY }) => {
  // Simple forward/backward movement based on scroll
  const translateZ = scrollY * 0.3; // Move forward as you scroll down
  
  return (
    <div className="cube-container">
      <div 
        className="cube-image"
        style={{
          transform: `translateZ(${translateZ}px)`
        }}
      >
        <img 
          src={cube}
          alt="3D Cube"
          className="cube-img"
        />
      </div>
    </div>
  );
};

// Main Hero Component
const StrategicMarketingHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-section">
          <Cube scrollY={scrollY} />
        </div>
        
        <div className="right-section">
          <div className="content-wrapper">
            <h1 className="main-title">
              STRATEGIC
              <br />
              <span className="italic-text">Digital Marketing</span> TO
              <br />
              BOOST ROI
            </h1>
            
            <p className="description">
              ADM Agency delivers data-driven strategies blended with creative innovation. Our full-service digital marketing solutions are tailored to your brand's unique needs — from SEO and content creation to branding and web development, we offer everything under one roof.
            </p>
          </div>
        </div>
      </div>
      
     
     
    </div>
  );
};

export default StrategicMarketingHero;