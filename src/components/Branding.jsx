import React from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import Img1 from '../assets/pumb.png';
import Img2 from '../assets/brand-tools.png';
import Img3 from '../assets/brand-connect.png';

const Branding = () => {
  const features = [
    {
      title: 'Builds Trust and Credibility',
      description: 'Consistency builds confidence. Professional branding shows polish, builds trust, and attracts customers.',
      image: Img2
    },
    {
      title: 'Differentiates You from Competitors',
      description: 'Stand out by highlighting what makes your brand unique — values, mission, and message.',
      image: Img3
    },
    {
      title: 'Creates Emotional Connection',
      description: 'Win hearts, not just wallets. Emotional branding turns buyers into loyal advocates.',
      image: Img1
    }
  ];

  return (
    <ServiceDetail
      title="Branding is"
      subtitle="innovation"
      introText="Is your brand just seen or truly remembered?"
      coverImage={Img1}
      features={features}
    />
  );
};

export default Branding;
