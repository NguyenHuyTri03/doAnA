import React from 'react';
import { test } from '../../../Data/test';
import { Link } from 'react-router-dom';


const HomeSectionCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="bg-white h-full flex flex-col shadow-md rounded-lg max-h-[350px] mx-4 w-[250px] flex-shrink-0 hover:scale-[1.03] transition-transform duration-300">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                    <p className="text-orange-500 font-bold mt-2">{product.price}₫</p>
                </div>
            </div>
        </Link>

    );
};

export default HomeSectionCard;
