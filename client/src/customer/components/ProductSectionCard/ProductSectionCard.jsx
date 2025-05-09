import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ProductSectionCard = () => {
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
        <div className="product-section-card">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
                    <div className='h-[20rem]'>
                        <img
                            className='h-full w-full object-cover object-left-top'
                            src={product.imageUrl}
                            alt='Product' />
                    </div>
                    <div className='textPart bg-white p-3'>
                        <div>
                            <p className='font-bold opacity-60'>{product.name}</p>
                            <p>{product.title}</p>
                        </div>
                        <div className='flex items-center space-x-2'>

                            {product.discountPercent > 0 && (
                                <div className="flex items-center mb-1 space-x-4">
                                    <span className="line-through text-gray-500">{product.price.toLocaleString()}đ</span>
                                    <span className="text-green-600 font-medium">{product.discountPercent}% Off</span>
                                </div>
                            )}

                            <p className="font-semibold text-gray-900">
                                {product.discountPercent > 0
                                    ? `${(product.price * (1 - product.discountPercent / 100)).toLocaleString()}đ`
                                    : `${product.price.toLocaleString()}đ`}
                            </p>

                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
};

export default ProductSectionCard;
