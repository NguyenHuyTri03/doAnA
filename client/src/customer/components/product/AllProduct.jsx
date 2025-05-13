import React from 'react'
import { test } from '../../../Data/test';
import ProductSectionCarousel from '../ProductSectionCarousel/ProductSectionCarousel';
import tra from '../../../Data/tra';


const AllProduct = () => {
    return (
        <div className="home-page">
            <div className="main-content pt-24">
                <div className="section-container">
                    <ProductSectionCarousel data={test} sectionName={"Cafe"} />
                    <ProductSectionCarousel data={tra} sectionName={"Trà"} />
                    <ProductSectionCarousel data={test} sectionName={"test"}/>
                </div>
            </div>
        </div>
    )
}

export default AllProduct

