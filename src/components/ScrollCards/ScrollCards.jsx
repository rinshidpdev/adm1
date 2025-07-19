

import React, { useState,useEffect } from 'react';
import './ScrollCards.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../../assets/seo.png'; // Replace with your images
import img2 from '../../assets/cont.png';
import img3 from '../../assets/brand.png';
import img4 from '../../assets/web.png';
import img5 from '../../assets/social.png';

const images = [
  { src: img1, title: 'Search Engine Optimization' },
  { src: img2, title: 'Content Creation' },
  { src: img3, title: 'Branding' },
  { src: img4, title: 'Web Development' },
  { src: img5, title: 'Social Media Marketing' },
];

const ScrollCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(images[(currentIndex + i) % images.length]);
    }
    return slides;
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="carousel-slides">
        {getVisibleSlides().map((img, index) => (
          <div className="carousel-card" key={index}>
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
            <button className="carousel-btn">Show More</button>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};






export default ScrollCards
