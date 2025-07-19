import React from 'react';
import './ServiceSection.css';
import girl from '../../assets/girl.png'

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="service-left">
        <img
          src={girl}
          alt="Team Working"
          className="main-image"
        />
        <h1>
          Crafting Winning <br /> Strategies With <br />
          <span>ADM Agency</span>
        </h1>
        <p>
          When you choose ADM Agency, you’re choosing a team that works hard,
          thinks big, and delivers real results. We’re committed to being the
          leading digital marketing agency in Dubai — and we’re ready to prove it.
        </p>
      </div>

      <div className="service-right">
        <div className="service-box hover-bg">
          <div className="number">01.</div>
          <div className="content">
            <h3>ANALYZE</h3>
            <p>
              Our team thoroughly analyzes your business, audience, and industry
              to create strategies fueled by meaningful insights.
            </p>
          </div>
        </div>

        <div className="service-box hover-bg">
          <div className="number">02.</div>
          <div className="content">
            <h3>DESIGN</h3>
            <p>
              With strategy in place, ADM Agency crafts engaging designs that
              reflect your brand and connect with your audience across web,
              social, and beyond.
            </p>
          </div>
        </div>

        <div className="service-box hover-bg">
          <div className="number">03.</div>
          <div className="content">
            <h3>MARKET</h3>
            <p>
              We launch targeted campaigns that drive results — from social ads
              to SEO. Our goal is to position your brand where it matters most.
            </p>
          </div>
        </div>
        
      </div>
      <div className="cont">
          <h1>Fuel your business growth with digital solutions</h1>
           <h2> <span>from</span>  ADM Agency</h2>
           <p>Our expert team at ADM Agency delivers strategic solutions designed to enhance your <br /> brand presence, optimize digital performance, and streamline operations</p>
        </div>
    </div>
    
  );
};

export default ServiceSection;
