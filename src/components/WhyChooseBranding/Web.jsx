import React from 'react';
import './WhyChooseBranding.css';
import w1 from '../../assets/w1.png'
import w2 from '../../assets/w2.png'
import w3 from '../../assets/w3.png'
import w4 from '../../assets/w4.png'
import w5 from '../../assets/w5.png'

const Web = () => {
  const features = [
    {
      id: 1,
      title: "Responsive Web Design",
      subtitle: "Flawless Performance Across All Devices",
      description: "In a mobile-driven world, your website must perform flawlessly across all devices. We design and develop responsive websites that automatically adapt to screen size and orientation, ensuring your visitors enjoy a seamless experience whether they’re on desktop, tablet, or mobile.",
      image: w2,
      imageAlt: "Brand consistency mockup",
      layout: "left"
    },
    {
      id: 2,
      title: "SEO & Performance Optimized",
      subtitle: "Every Line of Code is Core Web Vitals",
      description: "We build with speed, structure, and search visibility in mind right from the first line of code. No bloated themes. No unnecessary scripts. Just clean, efficient, and modern development that meets—and often exceeds—Google’s Core Web Vitals standards. Our sites load fast, interact smoothly, and maintain visual stability, delivering a better user experience while improving your SEO rankings.",
      image: w3,
      imageAlt: "Brand differentiation 3D design",
      layout: "right"
    },
    {
      id: 3,
      title: "Marketing First Architecture",
      subtitle: "Web Builds Structured to Drive Conversions, Not Just Look Pretty",
      description: "We design and develop websites with one goal in mind: growth. A beautiful website is great, but beauty without purpose doesn’t drive results. That’s why every element we build—from layout to functionality—is grounded in proven marketing strategies that guide visitors toward conversion.",
      image: w4,
      imageAlt: "Branding strategy diagram",
      layout: "left"
    },
    {
      id: 4,
      title: "Modern Frontend Frameworks",
      subtitle: "React, Vue, or Angular — We Make It Fast, Fluid, and User Friendly",
      description: "We specialize in building snappy, responsive interfaces using today’s most powerful frontend frameworks. Whether you prefer React for its component-driven efficiency, Vue for its flexibility, or Angular for its enterprise-level structure, we deliver a seamless user experience tailored to your needs and stack.",
      image: w5,
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
            <div className="branding-badge">Next gen Design Engine</div>
            <h1 className="branding-title">Web Development</h1>
            <h1 className="branding-subtitle">is</h1>
            <h1 className="branding-highlight">speed</h1>
            <p className="branding-description">What if your website actually drove sales, not just traffic?</p>
          </div>
          <div className="branding-right">
            <div className="branding-image-container">
              <img src={w1} alt="Neon sign" className="branding-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Branding Section */}
      <div className="why-choose-branding">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why build with us?</h2>
          <p className="why-choose-description">
           In today’s digital first world, your website is often the first interaction a customer has with your brand. At Aieera, we build powerful, elegant, and user-focused websites that elevate your brand and drive real results. Whether you're a startup or an established business, our web development solutions are designed to help you grow and scale online.
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

export default Web;
