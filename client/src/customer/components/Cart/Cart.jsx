import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'

const Cart = () => {
  return (
    <div>
      {/* danh sách sản phẩm */}
      <div className='lg:grid grid-cols-3 lg:px-16 relative pt-28'>
        <div className='col-span-2'>
          {[1, 1, 1, 1].map((item) => <CartItem />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border '>
            {/* bảng tiền  */}
            <p className='uppercase font-bold  opacity-60 pb-4 '> GIÁ TIỀN CHI TIẾT</p>
            <hr />
            <div clasName="space-y-3 font-semibold mb-10 ">
              <div className='flex justify-between pt-3 text-black '>
                <span>GIÁ</span>
                <span>293</span>
              </div>

              <div className='flex justify-between pt-3  '>
                <span>GIẢM GIÁ</span>
                <span className='text-green-600'>23</span>
              </div>

              <div className='flex justify-between pt-3  '>
                <span>PHÍ GIAO HÀNG</span>
                <span className='text-green-600'>free</span>
              </div>

              <div className='flex justify-between pt-3 font-bold '>
                <span>TỔNG CỘNG</span>
                <span className='text-green-600 '>343</span>
              </div>
            </div>

            <Button
              href='/checkout'
              variant='contained'
              className='w-full mt-5'
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd", "&:hover": { bgcolor: "#7e3ff2" } }}
            > XÁC NHẬN</Button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart