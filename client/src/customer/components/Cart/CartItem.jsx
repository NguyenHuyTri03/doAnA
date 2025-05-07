import React, { useState } from 'react'
import { IconButton, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'

const CartItem = () => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1)
  }

  const handleRemove = () => {
    alert('Removed from cart')
  }

  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex'>
        {/* Image & Remove Button */}
        <div className='flex flex-col items-center'>
          <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="Product"
              className='w-full h-full object-cover rounded-lg border'
            />
          </div>

          
        </div>

        {/* Product Info */}
        <div className='ml-5 flex-1 space-y-1'>
          <p className='font-semibold'>test test test</p>
          <p className='opacity-70'>test test</p>
          <p className='opacity-70 mt-2'>test test</p>
          <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='font-semibold'>199</p>
            <p className='opacity-50 line-through'>174</p>
            <p className='text-green-600 font-semibold'>12% off</p>
          </div>

   
          <div className='flex items-center space-x-2 pt-4'>
            <IconButton size="small" color="primary" onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <p className='w-6 text-center'>{quantity}</p>
            <IconButton size="small" color="primary" onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
            <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={handleRemove}
            className='mt-3'
          >
            Remove
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
