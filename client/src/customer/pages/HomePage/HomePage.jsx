import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import './HomePage.css';
import { Link } from 'react-router-dom';
import coffeeCup from "../../../assets/coffee-cup.png"

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

// return (
//   <div className="home-page">
//     {/* <div className="main-content my-12">
//       <MainCarousel />
//     </div> */}

//     <section class="bg-[#1f140f] text-white py-20  bg-cover bg-center"
//       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348')" }}>
//       <div className="absolute inset-0 bg-black bg-opacity-65 z-0"></div>
//       <div class="max-w-7xl mx-auto w-full h-[80vh] flex flex-col-reverse md:flex-row items-center px-6 md:px-12">

//         {/* Left Content */}
//         <div class="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left">
//           <h1 class="text-5xl md:text-6xl font-bold leading-tight">
//             Hương thơm trong <br />
//             từng khoảnh khắc <br />
//           </h1>
//           <p class="text-gray-300 text-base md:text-xl">
//             Từ ly cà phê đậm đà đến tách trà dịu nhẹ — được tạo nên để hòa cùng cảm xúc của bạn, tiếp năng lượng cho hành trình, và giữ bạn luôn vững vàng.
//           </p>

//           <div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//             <a href="#" class="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
//               Mua ngay →
//             </a>
//             {/* <a href="#" class="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
//               Explore More
//             </a> */}
//           </div>

//           {/* Stats */}
//           <div class="flex justify-center md:justify-start space-x-6 pt-10 text-center">
//             <div>
//               <p class="text-2xl font-bold">50+</p>
//               <p class="text-sm text-gray-400">MẶT HÀNG</p>
//             </div>
//             <div>
//               <p class="text-2xl font-bold">20+</p>
//               <p class="text-sm text-gray-400">CÁI GÌ ĐÓ ẤN TƯỢNG</p>
//             </div>
//             <div>
//               <p class="text-2xl font-bold">2k+</p>
//               <p class="text-sm text-gray-400">kHÁCH HÀNG HÀI LÒNG</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* kiểu dị á 1  */}
//     <div className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
//       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348')" }}>
//       <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
//       <div className="relative z-10 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Khơi nguồn cảm hứng cùng ly cà phê chất lượng</h1>
//         <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow">
//           Chúng tôi mang đến những hạt cà phê tuyển chọn từ vùng đất trù phú, rang xay theo công thức riêng để giữ trọn hương vị.
//         </p>
//         <Link
//           to="/products"
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
//         >
//           Xem sản phẩm
//         </Link>
//       </div>
//     </div>

//     <div className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
//       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528825871115-3581a5387919')" }}>
//       <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
//       <div className="relative z-10 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Thưởng thức hương vị tinh tế của trà thiên nhiên</h1>
//         <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow">
//           Trà của chúng tôi được chọn lọc từ những đồi chè xanh tươi, chế biến tỉ mỉ để mang đến trải nghiệm nhẹ nhàng và thư thái.
//         </p>
//         <Link
//           to="/san-pham"
//           className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
//         >
//           Xem sản phẩm
//         </Link>
//       </div>
//     </div>
//   </div>
// );