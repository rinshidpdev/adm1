// src/components/AboutSec.jsx
import React from 'react';
import './AboutSec.css';
import teamImage from '../../assets/team.png'; // Replace with your image path

const AboutSec = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">ABOUT US</h1>
      <div className="about-content">
        <div className="about-left">
          <button className="about-btn">About ADM Agency</button>
          <h2 className="about-heading">
            Driven By Insight. <br /> Designed For Impact.
          </h2>
          <p className="about-desc">
            At <strong>ADM Agency</strong>, we believe every brand has a story worth telling — and we’re here to make sure it’s told the right way. Based in the heart of <strong>Dubai</strong> and proudly part of the <strong>Anisha Group of Companies</strong>, we bring together creativity, strategy, and digital innovation to help businesses thrive in the digital age.
          </p>
          <p className="about-desc">
            We specialize in <strong>Branding</strong>, <strong>Web Development</strong>, and <strong>Digital Marketing</strong>, offering a full-spectrum approach that turns ideas into measurable growth.
          </p>
        </div>
        <div className="about-right">
          <img src={teamImage} alt="Team" />
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
