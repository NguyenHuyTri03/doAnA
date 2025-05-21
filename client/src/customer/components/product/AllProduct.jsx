import React, { useEffect, useState } from 'react'
import { test } from '../../../Data/test';
import ProductSectionCarousel from '../ProductSectionCarousel/ProductSectionCarousel';
import tra from '../../../Data/tra';
import { useAuth } from '../Auth/AuthContext';
import ProductService from '../../../Services/Product/ProductService';
import LoadingSpinner from '../Loader/loadingSpin';


const AllProduct = () => {
    const { authTokens } = useAuth();
    const [loading, setLoading] = useState(true);
    const [coffee, setCoffee] = useState(null);
    const [tea, setTea] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            if (authTokens?.access_token) {
                try {
                    const coff = await ProductService.getAllByCat(authTokens.access_token, "ca-phe");
                    const teaDat = await ProductService.getAllByCat(authTokens.access_token, "tra");
                    if (coff != null && teaDat != null) {
                        setLoading(false);
                        setCoffee(coff);
                        setTea(teaDat);
                        console.log(coff);
                    }
                } catch (error) {
                    console.error(`Error getting products: `, error);
                }
            } else {
                console.error("Can't get product");
            }
        };

        getProducts();
    }, []);

    return (
        <div>
            {(loading == true) ? (
                <LoadingSpinner></LoadingSpinner>
            ) : (
                <div className="home-page">
                    <div className="main-content pt-24">
                        <div className="section-container">
                            <ProductSectionCarousel data={coffee} sectionName={"Cafe"} />
                            <ProductSectionCarousel data={tea} sectionName={"Trà"} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllProduct

