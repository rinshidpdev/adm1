import React from 'react';
import './WhyChooseBranding.css';
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.png'

const SEO = () => {
  const features = [
    {
      id: 1,
      title: "Predictive SEO Analysis",
      subtitle: "Rank Before the Rush",
      description: "Predictive SEO analysis uses AI and data modeling to forecast what users will search for before they search for it. We analyze emerging trends, keyword trajectories, and shifting user intent to identify opportunities ahead of the curve. This means you can create content that ranks first when the trend breaks—not after it’s already saturated. It’s proactive SEO that keeps you in front, always..",
      image: s2,
      imageAlt: "Brand consistency mockup",
      layout: "left"
    },
    {
      id: 2,
      title: "On-Page SEO",
      subtitle: "Optimize with Foresight, Not Hindsight",
      description: "On-page SEO is about optimizing your content for both users and search engines. It ensures that every page is clear, relevant, and aligned with evolving search intent. At aieera, we offer in-depth keyword research with predictive forecasting, SEO-friendly content creation and topic clustering, optimized meta titles, descriptions, and headers, and strategic internal linking to build page authority. We also include image optimization using proper alt tags.",
      image: s3,
      imageAlt: "Brand differentiation 3D design",
      layout: "right"
    },
    {
      id: 3,
      title: "Off-Page SEO",
      subtitle: "Build Authority Before the Spotlight Hits",
      description: "Off-page SEO focuses on building your site’s reputation and digital authority. It’s about trust, relevance, and visibility beyond your own domain. Our services include smart backlink building from authoritative, relevant sources, AI-assisted outreach to rising influencers, social signal and engagement tracking, and promotion on trending content platforms to keep your brand top-of-mind across the web",
      image: s4,
      imageAlt: "Branding strategy diagram",
      layout: "left"
    },
    {
      id: 4,
      title: "Technical SEO",
      subtitle: "Strong Foundations. Seamless Performance.",
      description: "Technical SEO forms the foundation of your website’s performance, security, and indexability. We deliver predictive site health monitoring and performance audits to catch issues before they arise. Our services include mobile optimization, responsive design improvements, structured data implementation, and real-time page speed enhancements for a smooth, high-performing user experience.",
      image: s5,
      imageAlt: "Pump neon sign",
      layout: "right"
    },
    {
      id: 5,
      title: "Local SEO",
      subtitle: "Be Found Before They Ask",
      description: "Local SEO converts high-intent traffic into real-world action by enhancing your visibility in map results, voice searches, and nearby queries. We provide comprehensive Google Business Profile optimization, local keyword targeting with area-specific trend forecasting, and predictive analysis of local events and seasonal behaviors. Our services include online reputation management, review response strategies, and citation building to ensure your brand stands out in local searches.",
      image: s6,
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
            <div className="branding-badge">Next-Gen SEO Solution</div>
            <h1 className="branding-title">Search Engine
Optimization</h1>
            <h1 className="branding-subtitle">is</h1>
            <h1 className="branding-highlight">relevance</h1>
            <p className="branding-description">What if your SEO strategy could predict trends before they happen?</p>
          </div>
          <div className="branding-right">
            <div className="branding-image-container">
              <img src={s1} alt="Neon sign" className="branding-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Branding Section */}
      <div className="why-choose-branding">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Predictive SEO?</h2>
          <p className="why-choose-description">
           t adm, we don’t just optimize websites we empower them to anticipate. Our AI-driven predictive SEO uses advanced algorithms, search data modelling, and machine learning to identify emerging keywords, rising topics, and shifting user intent before they peak. This means your content gets positioned before your competitors even notice the trend.
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

export default SEO;
