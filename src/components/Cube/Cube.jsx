import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cube.css';
import cube from '../../assets/cube.png';

// Cube Component with scroll + hover animation
const Cube = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const yTransform = isMobile ? 0 : Math.min(scrollY * 0.2, 50); // max 50px scroll

  return (
    <motion.div
      className="cube-container"
      style={{ y: yTransform }}
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

// Main Hero Section
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

