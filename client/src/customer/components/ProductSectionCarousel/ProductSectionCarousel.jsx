import React, { useState, useRef, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../ProductSectionCard/ProductSectionCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const ProductSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const itemsPerPage = 4;
  const visibleItems = data.slice(0, 8);
  const items = visibleItems.map((item) => <HomeSectionCard key={item.id} product={item} />);

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 },
    1200: { items: itemsPerPage },
  };

  const handlePrev = () => {
    if (carouselRef.current) carouselRef.current.slidePrev();
  };

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="my-8 px-4 lg:px-8">
      {sectionName && (
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-400 inline-block pb-1">
          {sectionName}
        </h2>
      )}

      <div className="relative bg-white rounded-xl shadow-md p-4">
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

        {/* Navigation buttons */}
        {activeIndex > 0 && items.length > itemsPerPage && (
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-orange-100 transition z-10"
            onClick={handlePrev}
            aria-label="previous"
          >
            <FaArrowLeft className="w-5 h-5 text-orange-500" />
          </button>
        )}

        {activeIndex < items.length - itemsPerPage && items.length > itemsPerPage && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-orange-100 transition z-10"
            onClick={handleNext}
            aria-label="next"
          >
            <FaArrowRight className="w-5 h-5 text-orange-500" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSectionCarousel;
