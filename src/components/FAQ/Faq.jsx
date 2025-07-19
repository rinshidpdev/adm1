import React, { useState } from 'react';
import './Faq.css';
import faqImage from '../../assets/02.png'; // Use your image here

const faqData = [
  {
    question: 'What Kind Of Content Creation Do You Provide?',
    answer:
      'We offer complete content services in Dubai, including photoshoots, reels, ad video production, scripts, and creative copy tailored for web and social media.',
  },
  {
    question: 'Do You Work With Startups Or Only Established Companies In Dubai?',
    answer:
      "We work with both! Whether you're a growing startup or a well-established brand in Dubai, our team tailors solutions to fit your needs.",
  },
  {
    question: 'Can You Help Rebrand My Business From Scratch?',
    answer:
      'Yes! From logo design to full brand identity, we specialize in building standout brands for businesses in Dubai and beyond.',
  },
{
   question: 'Can you Help Rebranch My Buisiness From Scratch',
   answer :
   'Yes! From logo design to full brand identity, we specialize in building standout brands for businesses in Dubai and beyond.'
},
  {
    question: "What Is ADM's Outsourcing Model In Dubai?",
    answer:
      'We provide trained digital marketing experts to work as in-house staff at your office in Dubai — with full ADM agency support and no visa or HR headaches.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Open second by default

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h4>ADM FAQ</h4>
        <h1>
          FREQUENTLY <br /> ASKED <span>Questions</span>
        </h1>
        <img src={faqImage} alt="faq visual" />
      </div>

      <div className="faq-right">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{activeIndex === index ? '−' : '+'}</span> {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
