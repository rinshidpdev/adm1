import React from 'react';
import './WhyChooseBranding.css';
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'


const ADS = () => {
  const features = [
    {
      id: 1,
      title: "Automated Campaign Management",
      subtitle: "Launch fast, optimize smarter, scale effortlessly with AI.",
      description: "Automated Campaign Management uses AI to launch, optimize, and scale marketing efforts. It sets up campaigns, targets the right audience, writes ad copy, and allocates budgets intelligently. In real-time, it adjusts bids, tests creatives, refines targeting, and improves content based on performance. As results grow, it scales successful strategies to new audiences or regions, maximizing ROI with minimal manual effort.",
      image: p2,
      imageAlt: "Brand consistency mockup",
      layout: "left"
    },
    {
      id: 2,
      title: "Smart A/B Testing",
      subtitle: "Test smarter, spend wiser, let AI pick the winners.",
      description: "Smart A/B Testing uses AI to automatically test and optimize ad variations (headlines, images, CTAs, and more) by tracking performance in real-time. It shifts budget to top-performing ads, cuts underperformers, and continuously learns what drives results. This speeds up decision-making, reduces wasted spend, and ensures every marketing dollar is used effectively.",
      image: p3,
      imageAlt: "Brand differentiation 3D design",
      layout: "right"
    },
    {
      id: 3,
      title: "Customer Journey Intelligence",
      subtitle: "See the whole journey, turn insights into action.",
      description: "Customer Journey Intelligence is the process of tracking, analyzing, and understanding every interaction a customer has with your brand before making a purchase. It provides a complete view of the path customers take from discovering your business to exploring your offerings and finally deciding to buy.",
      image: p4,
      imageAlt: "Branding strategy diagram",
      layout: "left"
    },
    {
      id: 4,
      title: "Real-Time Performance Insights",
      subtitle: "Smarter Decisions. Better ROI. Instantly.",
      description: "Unlock advanced data with immediate, actionable insights into your ad campaigns. Our advanced analytics platform monitors every click, impression, and conversion in real-time, giving you the clarity you need to make smarter decisions, faster. Identify high-performing channels, uncover underperforming segments, and adjust strategies instantly.",
      image: p5,
      imageAlt: "Pump neon sign",
      layout: "right"
    },
    
  ];

  return (
    <div className="branding-page-container">
      {/* Hero Section */}
      <div className="branding-container">
        <div className="branding-overlay"></div>
        <div className="branding-content">
          <div className="branding-left">
            <div className="branding-badge">Next gen Ad Engine</div>
            <h1 className="branding-title"> AI-Powered
PPC / Paid Ads</h1>
            <h1 className="branding-subtitle">is</h1>
            <h1 className="branding-highlight">automation</h1>
            <p className="branding-description">Would you rather manage ads manually or let AI find the highest converting audience for you ?</p>
          </div>
          <div className="branding-right">
            <div className="branding-image-container">
              <img src={p1} alt="Neon sign" className="branding-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Branding Section */}
      <div className="why-choose-branding">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose AI Powered PPC?</h2>
          <p className="why-choose-description">
          Smarter ads. Better results. Powered by AI.
Let AI take the guesswork out of your campaigns. Boost ROI, eliminate ad spend waste, and unlock scalable growth with data driven precision.
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

export default ADS;
