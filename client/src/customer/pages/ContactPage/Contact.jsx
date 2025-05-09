import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-28 px-4 lg:px-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Gửi thắc mắc cho chúng tôi</h2>
          <p className="text-gray-600 mb-6">
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tên của bạn"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="Số điện thoại của bạn"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Nội dung"
              className="w-full h-40 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>

            <button
              type="submit"
              className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
              GỬI CHO CHÚNG TÔI
            </button>
          </form>
        </div>

        {/* Thông tin liên hệ */}
        <div className="text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thông tin liên hệ</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Địa chỉ</p>
                <p> 123 Đường Nguyễn Huệ, Quận 1, TP.HCM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Điện thoại</p>
                <p> 0123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Thời gian làm việc</p>
                <p>Thứ 2 đến Thứ 6: từ 8h đến 18h;</p>
                <p>Thứ 7 và Chủ nhật: từ 8h00 đến 17h00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@capheabc.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
