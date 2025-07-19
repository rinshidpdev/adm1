// import React from 'react';
// import './WhyChooseBranding.css';
// import pumb from '../../assets/pumb.png'

// const WhyChooseBranding = ({ 
//   mainTitle = "Why Choose Branding?",
//   mainDescription = "In today's crowded marketplace, branding is more than just a logo; it's the story, emotion, and experience behind your business. It shapes how people perceive you, influences their decisions, and plays a crucial role in your overall growth. Here's why investing in branding is essential for long-term success.",
//   features = [
//     {
//       id: 1,
//       title: "Builds Trust and Credibility",
//       subtitle: "Consistency Builds Confidence",
//       description: "Visuals, messaging, and tone are consistent across every touchpoint—from your website to social media—it shows professionalism. People are more likely to trust and engage with a brand that appears polished and cohesive.",
//       image: pumb,
//       imageAlt: "Brand consistency mockup",
//       layout: "left" // text left, image right
//     },
//     {
//       id: 2,
//       title: "Differentiates You from Competitors",
//       subtitle: "Stand Out by Being Unmistakably You",
//       description: "Branding allows you to highlight what makes you unique. In a crowded market, your brand identity sets you apart. It's not just your logo or tagline—it's your story, your values, your mission, and how you communicate. A strong brand tells people why they should choose you over anyone else.",
//       image: pumb,
//       imageAlt: "Brand differentiation 3D design",
//       layout: "right" // text right, image left
//     },
//     {
//       id: 3,
//       title: "Creates Emotional Connection",
//       subtitle: "Win Hearts, Not Just Wallets",
//       description: "People connect with brands on an emotional level. Great branding goes beyond rational benefits; it evokes feelings—trust, excitement, comfort, or aspiration. These emotional triggers drive loyalty and long-term engagement, turning casual customers into brand advocates.",
//       image: pumb,
//       imageAlt: "Branding strategy diagram",
//       layout: "left" // text left, image right
//     },
//     {
//       id: 4,
//       title: "Supports Marketing and Sales",
//       subtitle: "A Strong Brand Supercharges Your Growth",
//       description: "Your brand acts as the foundation for all marketing efforts. Every campaign—from digital ads to email newsletters—relies on a consistent and compelling brand voice. A unified brand message improves visibility, boosts conversions, and gives people a reason to care and act.",
//       image: pumb,
//       imageAlt: "Pump neon sign",
//       layout: "right" // text right, image left
//     }
//   ]
// }) => {
//   return (
//     <div className="why-choose-branding">
//       {/* Header Section */}
//       <div className="why-choose-header">
//         <h2 className="why-choose-title">{mainTitle}</h2>
//         <p className="why-choose-description">{mainDescription}</p>
//       </div>

//       {/* Features Section */}
//       <div className="why-choose-features">
//         {features.map((feature) => (
//           <div key={feature.id} className={`feature-item ${feature.layout}`}>
//             <div className="feature-content">
//               <h3 className="feature-title">{feature.title}</h3>
//               <h4 className="feature-subtitle">{feature.subtitle}</h4>
//               <p className="feature-description">{feature.description}</p>
//             </div>
//             <div className="feature-image-container">
//               <img 
//                 src={feature.image} 
//                 alt={feature.imageAlt}
//                 className="feature-image"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyChooseBranding;

// BrandingPage.jsx
import React from 'react';
import './WhyChooseBranding.css';
import pumb from '../../assets/pumb.png';

const Branding = () => {
  const features = [
    {
      id: 1,
      title: "Builds Trust and Credibility",
      subtitle: "Consistency Builds Confidence",
      description: "Visuals, messaging, and tone are consistent across every touchpoint—from your website to social media—it shows professionalism. People are more likely to trust and engage with a brand that appears polished and cohesive.",
      image: pumb,
      imageAlt: "Brand consistency mockup",
      layout: "left"
    },
    {
      id: 2,
      title: "Differentiates You from Competitors",
      subtitle: "Stand Out by Being Unmistakably You",
      description: "Branding allows you to highlight what makes you unique. In a crowded market, your brand identity sets you apart. It's not just your logo or tagline—it's your story, your values, your mission, and how you communicate. A strong brand tells people why they should choose you over anyone else.",
      image: pumb,
      imageAlt: "Brand differentiation 3D design",
      layout: "right"
    },
    {
      id: 3,
      title: "Creates Emotional Connection",
      subtitle: "Win Hearts, Not Just Wallets",
      description: "People connect with brands on an emotional level. Great branding goes beyond rational benefits; it evokes feelings—trust, excitement, comfort, or aspiration. These emotional triggers drive loyalty and long-term engagement, turning casual customers into brand advocates.",
      image: pumb,
      imageAlt: "Branding strategy diagram",
      layout: "left"
    },
    {
      id: 4,
      title: "Supports Marketing and Sales",
      subtitle: "A Strong Brand Supercharges Your Growth",
      description: "Your brand acts as the foundation for all marketing efforts. Every campaign—from digital ads to email newsletters—relies on a consistent and compelling brand voice. A unified brand message improves visibility, boosts conversions, and gives people a reason to care and act.",
      image: pumb,
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
            <div className="branding-badge">Next-Level Brand Identity</div>
            <h1 className="branding-title">Branding</h1>
            <h1 className="branding-subtitle">is</h1>
            <h1 className="branding-highlight">success</h1>
            <p className="branding-description">Is your brand just seen or truly remembered?</p>
          </div>
          <div className="branding-right">
            <div className="branding-image-container">
              <img src={pumb} alt="Neon sign" className="branding-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Branding Section */}
      <div className="why-choose-branding">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Branding?</h2>
          <p className="why-choose-description">
            In today's crowded marketplace, branding is more than just a logo; it's the story, emotion, and experience behind your business. It shapes how people perceive you, influences their decisions, and plays a crucial role in your overall growth. Here's why investing in branding is essential for long-term success.
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

export default Branding;
