import React, { useState, useRef, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const visibleItems = data.slice(0, 8);
  const items = visibleItems.map((item) => <HomeSectionCard key={item.id} product={item} />);

  const itemsPerPage = 4;
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 },
    1200: { items: itemsPerPage },
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Check initial screen size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <div style={carouselContainerStyle}>
      <h2 style={sectionNameStyle}>{sectionName}</h2>
      <div style={carouselWrapperStyle}>
        {items.length > 0 && (
          <AliceCarousel
            ref={carouselRef}
            items={items}
            disableButtonsControls
            disableDotsControls
            infinite={false}
            responsive={responsive}
            activeIndex={activeIndex}
            onSlideChanged={syncActiveIndex}
          />
        )}

        {activeIndex > 0 && items.length > itemsPerPage && (
          <button
            style={isMobile ? prevButtonMobileStyle : prevButtonStyle}
            onClick={handlePrev}
            aria-label="previous"
          >
            <FaArrowLeft style={isMobile ? arrowIconMobileStyle : arrowIconStyle} />
          </button>
        )}

        {activeIndex < items.length - itemsPerPage && items.length > itemsPerPage && (
          <button
            style={isMobile ? nextButtonMobileStyle : nextButtonStyle}
            onClick={handleNext}
            aria-label="next"
          >
            <FaArrowRight style={isMobile ? arrowIconMobileStyle : arrowIconStyle} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

// Styles
const carouselContainerStyle = {
  border: '1px solid #ccc',
  margin: '10px 0',
};

const sectionNameStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
  padding: '10px 0',
  textAlign: 'center',
};

const carouselWrapperStyle = {
  position: 'relative',
  padding: '10px',
};

const prevButtonStyle = {
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)',
  zIndex: 10,
  backgroundColor: 'white',
  borderRadius: '50%',
  padding: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ':hover': { backgroundColor: '#f0f0f0' }, // Pseudo-selector (not directly supported, careful)
};

const nextButtonStyle = {
  ...prevButtonStyle,
  left: 'auto',
  right: '10px',
};

const arrowIconStyle = {
  width: '20px',
  height: '20px',
  color: 'black',
};

// Mobile styles
const prevButtonMobileStyle = {
  ...prevButtonStyle,
  padding: '4px',
};

const nextButtonMobileStyle = {
  ...nextButtonStyle,
  padding: '4px',
};

const arrowIconMobileStyle = {
  ...arrowIconStyle,
  width: '16px',
  height: '16px',
};