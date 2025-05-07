import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel'; 
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { test } from '../../../Data/test';
import Footer from '../../components/footer/footer'; 
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="main-content">
        <MainCarousel />
        <div className="section-container">
          <HomeSectionCarousel data={test} sectionName={"Test"} />
          <HomeSectionCarousel data={test} sectionName={"Abc"} />
          <HomeSectionCarousel data={test} />
        </div>
      </div>

    </div>
  );
};

export default HomePage;