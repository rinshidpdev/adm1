import React from 'react';
import './AboutCeo.css';
import ceoImage from '../../assets/1.jpg'; // Update the path if needed

const AboutCeo = () => {
  return (
    <div className="about-ceo-container">
      <div className="ceo-image-section">
        <img src={ceoImage} alt="CEO" />
      </div>
      <div className="ceo-text-section">
        <button className="ceo-btn">CEO’s Message</button>
        <h1>
          Leading With Vision: <br /> The ADM Way
        </h1>
        <p>
          ADM | Anisha Digital Marketing is a proud part of the <span className="highlight">Anisha Group</span> – a
          name that has built its reputation over the past six years in the UAE through trusted PRO, document clearing,
          and travel solutions.
        </p>
        <p>
          At ADM, we carry forward the group’s legacy with a fresh and focused mission: <strong>
            to empower businesses in Dubai to grow, scale, and thrive through impactful digital marketing strategies.
          </strong>
        </p>
        <p>
          Rooted in our core philosophy — <strong>Analyze, Design, Market</strong> — we take a data-driven, creatively
          executed, and results-oriented approach to every brand we work with. From startups to established enterprises,
          ADM is here to transform your digital presence and help you achieve measurable growth.
        </p>
        <p>Together, let’s design strategies that don’t just compete, but lead.</p>
      </div>
    </div>
  );
};

export default AboutCeo;
