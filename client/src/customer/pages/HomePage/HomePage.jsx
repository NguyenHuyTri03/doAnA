import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="main-content">
        <MainCarousel />
      </div>
    </div>
  );
};

export default HomePage;