import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="background-text">TOUCH</div>
      <div className="content-wrapper">
        <div className="contact-content">
          <div className="section-label">// CONTACT US</div>
          <h1 className="main-heading">
            <span className="get-in-touch">Get In Touch</span>
            <span className="with-text"> WITH </span>
            <span className="agency-text">ADM Agency</span>
          </h1>
          <p className="description">
            Looking for a reliable <strong>digital marketing agency in Dubai?</strong> At ADM Agency, we're here to 
            help you elevate your brand, grow your online presence, and deliver results that matter.
          </p>
          <p className="services-text">
            Whether you're interested in our <strong>branding services</strong>, <strong>website development</strong>, or full-scale 
            <strong> digital marketing solutions</strong>, we're just one message away.
          </p>
        </div>
        <div className="play-button-container">
          <div className="play-button">
            <div className="play-icon">▶</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;