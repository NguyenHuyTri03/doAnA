import React, { useEffect, useState } from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import './HomePage.css';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const HomePage = () => {

  return (
    <div className="home-page">
      <div className="main-content my-12">
        <MainCarousel />
      </div>
      {/* kiểu dị á 1  */}
      <div className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348')" }}>
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Khơi nguồn cảm hứng cùng ly cà phê chất lượng</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow">
            Chúng tôi mang đến những hạt cà phê tuyển chọn từ vùng đất trù phú, rang xay theo công thức riêng để giữ trọn hương vị.
          </p>
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528825871115-3581a5387919')" }}>
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Thưởng thức hương vị tinh tế của trà thiên nhiên</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow">
            Trà của chúng tôi được chọn lọc từ những đồi chè xanh tươi, chế biến tỉ mỉ để mang đến trải nghiệm nhẹ nhàng và thư thái.
          </p>
          <Link
            to="/san-pham"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
