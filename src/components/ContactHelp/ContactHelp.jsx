import React from 'react';
import './ContactHelp.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const contactCards = [
  {
    icon: <FaPhoneAlt />,
    title: '(+655) 6654776',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit',
    action: 'Call Us Now',
  },
  {
    icon: <FaEnvelope />,
    title: 'MAIL@PROMETIX.ID',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit',
    action: 'Send Email',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'CALIFORNIA',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit',
    action: 'Visit Us Now',
  },
  {
    icon: <FaComments />,
    title: 'PROMETIX.ID',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit',
    action: 'See Profile',
  },
];

const ContactHelp = () => {
  return (
    <div className="contact-help-container">
      <div className="contact-help-header">
        <p>// HELP CENTER</p>
        <h1>
          WE ARE <span className="highlight">Here To Help</span> YOU
        </h1>
      </div>

      <div className="contact-cards">
        {contactCards.map((card, index) => (
          <div className="contact-card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <hr />
            <p>{card.desc}</p>
            <div className="card-action">
              {card.action} <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHelp;
