import React from 'react'
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt="" />);

  return (
    <div className="relative z-0">
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1800}
      infinite
    />
  </div>
  
  )
}

export default MainCarousel