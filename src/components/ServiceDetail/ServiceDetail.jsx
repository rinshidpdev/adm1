// BrandingUI.jsx
import React from 'react';
import './ServiceDetail.css';
import pumb from '../../assets/pumb.png'
import WhyChooseBranding from '../WhyChooseBranding/WhyChooseBranding';

const Branding = ({ 
  badge = "Next-Level Brand Identity",
  title = "Branding",
  subtitle = "is",
  highlight = "success",
  description = "Is your brand just seen or truly remembered?",
  rightImage = pumb,
  rightImageAlt = "Neon sign",
  backgroundImage = null
}) => {
  return (
    <div className="branding-container">
      {/* Background overlay */}
      <div className="branding-overlay"></div>
      
      {/* Background image if provided */}
      {backgroundImage && (
        <div 
          className="branding-bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      
      {/* Content */}
      <div className="branding-content">
        {/* Left side content */}
        <div className="branding-left">
          <div className="branding-badge">
            {badge}
          </div>
          
          <h1 className="branding-title">
            {title}
          </h1>
          
          <h1 className="branding-subtitle">
            {subtitle}
          </h1>
          
          <h1 className="branding-highlight">
            {highlight}
          </h1>
          
          <p className="branding-description">
            {description}
          </p>
        </div>
        
        {/* Right side - Image */}
        <div className="branding-right">
          <div className="branding-image-container">
            <img 
              src={rightImage} 
              alt={rightImageAlt}
              className="branding-image"
            />
          </div>
        </div>

       
      </div>
 
    </div>
    
    
  );
 
};


export default Branding;