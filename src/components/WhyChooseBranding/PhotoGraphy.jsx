import React from 'react';
import './WhyChooseBranding.css';
import ph1 from '../../assets/ph6.jpg'
import ph2 from '../../assets/ph2.jpg'
import ph3 from '../../assets/ph3.jpg'
import ph4 from '../../assets/ph4.jpg'
import ph5 from '../../assets/ph5.jpg'

const PhotoGraphy = () => {
  const features = [
    {
      id: 1,
      title: "Product Shoot",
      subtitle: "Showcase Your Product in Its Best Light",
      description: "In today’s visual world, quality imagery can make or break your brand. Professional product photography doesn't just capture objects — it tells a story, builds trust, and drives sales. From clean e-commerce shots to creative lifestyle imagery, a powerful product shoot highlights every detail, making your brand stand out in a crowded market and helping customers connect before they even click buy",
      image: ph5,
      imageAlt: "Brand consistency mockup",
      layout: "left"
    },
    {
      id: 2,
      title: " Industrial & Real Estate Shoot",
      subtitle: "Bring Big Spaces and Bold Structures to Life",
      description: "In industries where precision and scale matter, high-quality visuals are key. Whether it’s a sprawling factory, a buzzing warehouse, or a luxury real estate property, professional shoots showcase the size, efficiency, and design of",
      image: ph4,
      imageAlt: "Brand differentiation 3D design",
      layout: "right"
    },
    {
      id: 3,
      title: "Event Shoot",
      subtitle: "Capture Moments That Matter",
      description: "Every event is a story unfolding — and great photography ensures it’s remembered forever. From corporate gatherings and product launches to weddings and cultural festivals, a professional event shoot captures the energy, emotion, and key highlights in every frame. These images not only preserve memories but also serve as powerful content for social media, marketing, and future promotions",
      image: ph2,
      imageAlt: "Branding strategy diagram",
      layout: "left"
    },
    {
      id: 4,
      title: "Food Shoot",
      subtitle: "Make Taste Visible Through Stunning Visuals",
      description: "In the world of food, people eat with their eyes first. A professional food shoot captures the texture, color, and flavor of every dish — turning meals into mouth-watering visuals. Whether it's for a restaurant menu, social media, or a delivery app, high-quality food photography helps you attract customers, build cravings, and create a brand that’s impossible to ignore.",
      image: ph3,
      imageAlt: "Pump neon sign",
      layout: "right"
    }
  ];

  return (
    <div className="branding-page-container">
      {/* Hero Section */}
      <div className="branding-container">
        <div className="branding-overlay"></div>
        <div className="branding-content">
          <div className="branding-left">
            <div className="branding-badge">Capture Timeless Moments</div>
            <h1 className="branding-title">Photography</h1>
            <h1 className="branding-subtitle">is</h1>
            <h1 className="branding-highlight">emotion</h1>
            <p className="branding-description">Are your memories just taken or deeply felt?</p>
          </div>
          <div className="branding-right">
            <div className="branding-image-container">
              <img src={ph1} alt="Neon sign" className="branding-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Branding Section */}
      <div className="why-choose-branding">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Do Brands Trust Our Photography?</h2>
          <p className="why-choose-description">
                We go beyond just clicking pictures — our shoots are crafted with storytelling, lighting precision, and brand identity in mind. Every shot speaks, sells, and stays memorable.
          </p>
        </div>

        <div className="why-choose-features">
          {features.map((feature) => (
            <div key={feature.id} className={`feature-item ${feature.layout}`}>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <h4 className="feature-subtitle">{feature.subtitle}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-image-container">
                <img src={feature.image} alt={feature.imageAlt} className="feature-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGraphy;
