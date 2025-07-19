import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Cube.css';
import cube from '../../assets/cube.png';

// Cube Component with Framer Motion scroll movement
const Cube = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move cube slightly up/down based on scroll
  const yTransform = scrollY * 0.2;

  return (
    <motion.div
      className="cube-container"
      style={{
        y: yTransform, // Move vertically based on scroll
      }}
    >
      <motion.div
        className="cube-image"
        whileHover={{ rotate: 10, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img src={cube} alt="3D Cube" className="cube-img" />
      </motion.div>
    </motion.div>
  );
};

// Main Hero Component
const StrategicMarketingHero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-section">
          <Cube />
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

