import React, { useEffect, useState } from 'react'
import { test } from '../../../Data/test';
import HomeSectionCarousel from '../ProductSectionCarousel/ProductSectionCarousel';
import tra from '../../../Data/tra';

const AllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/products");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Map the API response to our Product interface
                const formattedProducts = data.map((item) => ({
                    id: item.id,
                    imageUrl: item.imageUrl,
                    name: item.name,
                    category: item.category,
                    price: item.price,
                    discountPercent: item.discountPercent,
                    size: item.size || [],
                    description: item.description,
                }));

                setProducts(formattedProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home-page">
            <div className="main-content pt-24">
                <div className="section-container">
                    <HomeSectionCarousel data={products} sectionName={"Cafe"} />
                    {/* <HomeSectionCarousel data={tra} sectionName={"Trà"} />
                    <HomeSectionCarousel data={test} sectionName={"test"} /> */}
                </div>
            </div>
        </div>
    )
}

export default AllProduct

