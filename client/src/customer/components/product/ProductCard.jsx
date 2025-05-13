import React from 'react'
import './ProductCard.css'


const ProductCard = ({ product }) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img
          className='h-full w-full object-cover object-left-top'
          src={product.imageUrl}
          alt='Product' />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.name}</p>
          <p>{product.category}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='line-through opacity-50'>{product.price}đ</p>
          <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
        </div>

        <p className='fonts-bold text-orange-600'>
          {(product.price * (1 - product.discountPercent / 100)).toLocaleString()}đ
        </p>
      </div>
    </div>




  )
}

export default ProductCard