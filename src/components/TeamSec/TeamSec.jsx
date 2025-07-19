import React from 'react';
import './TeamSec.css';
import ani from '../../assets/1.jpg'
import akhila from '../../assets/Akhila-SMM.jpg'
import cristan from '../../assets/christo-paul.jpg'
import prashanth from '../../assets/5.jpg'
import vishnav from '../../assets/vyshnav.jpg'
import lakshmi from '../../assets/Muthu-Lakshmi.jpg'
import ashwin from '../../assets/4-1.jpg'
import sufana from '../../assets/Sufana.jpg'
import shamna from '../../assets/Shamna.jpg'
const TeamSec = () => {
  const teamMembers = [
    {
      name: "ANISHA MUKIL",
      role: "CEO & Founder | Anisha Group of Companies",
      image: ani
    },
    {
      name: "AKHILA M NAIR",
      role: "Social Media Manager",
      image: akhila
    },
    {
      name: "CHRISTO PAUL",
      role: "Digital Marketing Team Lead",
      image: cristan
    },
    {
      name: "PRASANTH A K",
      role: "Senior Graphic Designer",
      image: prashanth
    },
    {
      name: "VYSHNAV K PRAKASH",
      role: "Business Development Officer",
      image: vishnav
    },
    {
      name: "MUTHULAKSHMY K",
      role: "SEO Specialist",
      image: lakshmi
    },
    {
      name: "ASWIN P K",
      role: "Video Editor",
      image: ashwin
    },
    {
      name: "SUFANA SALIM",
      role: "Web & SEO Specialist",
      image: sufana
    },
    {
      name: "SHAMNA M A",
      role: "Social Media Marketer",
      image: shamna
    }
  ];

  return (
    <div className="team-section">
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <h1 className="team-title">
            Meet The <span className="italic">Professionals</span>
          </h1>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="card-inner">
                {/* Image Container */}
                <div className="image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="card-content">
                  <div className="text-section">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="arrow-container">
                    <div className="arrow-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSec;