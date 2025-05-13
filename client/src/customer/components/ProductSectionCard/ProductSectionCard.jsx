import React from 'react';
import { test } from '../../../Data/test';
import { Link } from 'react-router-dom';


const HomeSectionCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
                <div className='h-[13rem] w-[10rem]'>
                    <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt={product.name} />
                </div>
                <div className='p-4'>
                    <h3 className='text-lg font-medium text-gray-900'>{product.name}</h3>
                    <p className='mt-2 text-sm text-gray-500'>{product.category}</p>
                </div>
            </div>
        </Link>

    );
};

export default HomeSectionCard;
