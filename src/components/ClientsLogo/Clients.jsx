import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  // Sample client logos - replace with your actual client logo paths
  const allClients = [
    { id: 1, name: 'Berkeley', logo: '/path/to/berkeley-logo.png' },
    { id: 2, name: 'Bin Hendi', logo: '/path/to/binhendi-logo.png' },
    { id: 3, name: 'Al Fattan', logo: '/path/to/alfattan-logo.png' },
    { id: 4, name: 'Al Ghurair', logo: '/path/to/alghurair-logo.png' },
    { id: 5, name: 'Al Hilal Bank', logo: '/path/to/alhilal-logo.png' },
    { id: 6, name: 'Client 6', logo: '/path/to/client6-logo.png' },

  ];

  const [expanded, setExpanded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Handle view all clients button click
  const handleViewAllClients = () => {
    setAnimating(true);
    setTimeout(() => {
      setExpanded(!expanded);
      setAnimating(false);
    }, 300);
  };

  // Set up auto-scrolling for the carousel view
  useEffect(() => {
    if (!expanded && sliderRef.current) {
      let position = 0;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      
      const scroll = () => {
        if (sliderRef.current) {
          if (position >= maxScroll) {
            position = 0;
          } else {
            position += 1;
          }
          sliderRef.current.scrollLeft = position;
        }
      };
      
      autoScrollRef.current = setInterval(scroll, 50);
      
      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }
  }, [expanded]);

  // Stop auto-scrolling when user interacts with the slider
  const handleUserInteraction = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      // Restart after 5 seconds of inactivity
      setTimeout(() => {
        if (!expanded && sliderRef.current) {
          autoScrollRef.current = setInterval(() => {
            if (sliderRef.current) {
              sliderRef.current.scrollLeft += 1;
            }
          }, 50);
        }
      }, 5000);
    }
  };

  // Get displayed clients based on expanded state
  const getDisplayedClients = () => {
    return expanded ? allClients : allClients.slice(0, 5);
  };

  return (
    <div className="clients-container" style={{
      backgroundColor: '#000',
      padding: '60px 20px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {!expanded ? (
        // Carousel view (automatically scrolls)
        <div 
          ref={sliderRef}
          className="clients-carousel" 
          style={{
            display: 'flex',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
            overflowX: 'hidden',
            marginBottom: '60px',
            paddingBottom: '10px',
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
          onMouseDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
        >
          {/* Double the client list to create seamless scrolling effect */}
          {[...allClients, ...allClients].map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="client-box"
              style={{
                minWidth: '200px',
                height: '150px',
                border: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                flexShrink: 0
              }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  filter: 'brightness(0) invert(1)' // Makes logos white
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        // Grid view (all clients)
        <div 
          className="clients-grid" 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
            marginBottom: '60px',
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          {getDisplayedClients().map((client) => (
            <div 
              key={client.id} 
              className="client-box"
              style={{
                height: '150px',
                border: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px'
              }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  filter: 'brightness(0) invert(1)' // Makes logos white
                }}
              />
            </div>
          ))}
        </div>
      )}

      <button 
        className="view-all-button"
        style={{
        display:'none',
          border: '1px solid #fff',
          backgroundColor: 'transparent',
          color: '#fff',
          padding: '12px 30px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.color = '#000';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#fff';
        }}
        onClick={handleViewAllClients}
      >
        {expanded ? 'View Less' : 'View All Clients'}
      </button>
    </div>
  );
};

export default Clients;