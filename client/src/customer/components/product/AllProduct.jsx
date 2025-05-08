import React from 'react'
import { test } from '../../../Data/test';
import HomeSectionCarousel from '../ProductSectionCarousel/ProductSectionCarousel';
import tra from '../../../Data/tra';


const AllProduct = () => {
    return (
        <div className="home-page">
            <div className="main-content pt-24">
                <div className="section-container">
                    <HomeSectionCarousel data={test} sectionName={"Cafe"} />
                    <HomeSectionCarousel data={tra} sectionName={"Trà"} />
                    <HomeSectionCarousel data={test} sectionName={"test"}/>
                </div>
            </div>
        </div>
    )
}

export default AllProduct

