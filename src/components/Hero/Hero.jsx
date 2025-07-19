// HeroPage.jsx
import React, { useEffect } from 'react';
import './Hero.css';
import video from '../../assets/bg-video.mp4'

const HeroPage = () => {
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const handleCTAClick = (e) => {
    e.preventDefault();
    // Add your navigation logic here
    console.log('CTA button clicked');
  };

  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Video Overlay */}
      <div className="video-overlay"></div>
      
      {/* Background Text */}
      <div className="background-text">ADM</div>
      
      {/* Floating Particles */}
      <div className="particles" id="particles"></div>
      
      {/* Main Content */}
      <div className="content">
        <h1 className="main-title">
          Experience Growth With<br />
          ADM Agency's 360° Digital<br />
          Solutions
        </h1>
        
        <p className="subtitle">
          We craft digital experiences that captivate,<br />
          convert, and create lasting impact.
        </p>
        
        <a href="#" className="cta-button" onClick={handleCTAClick}>
          Let's Get Started
          <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default HeroPage;