export const tra = [
    {
      id: 1,
      imageUrl: "https://image.tienphong.vn/w890/Uploaded/2025/rwbvhvobvvimsb/2021_12_16/uong-tra-xanh-moi-ngay-co-tot-khong-665x400-8524.jpg", // Image for Green Tea
      name: "Trà Xanh Truyền Thống",
      category: "tra-xanh",
      price: 350, // Adjusted price for tea
      discountPercent: 30, // Adjusted discount
      description: "Lá trà xanh được tuyển chọn kỹ lưỡng, mang hương vị thanh mát, chát dịu đặc trưng. Rất tốt cho sức khỏe, phù hợp để thưởng thức hàng ngày.",
      size: [
        { name: "100g", quantity: 50 },
        { name: "200g", quantity: 30 },
        { name: "500g", quantity: 0 }, // Out of stock
      ],
    },
    {
      id: 2,
      imageUrl: "https://image.tienphong.vn/w890/Uploaded/2025/rwbvhvobvvimsb/2021_12_16/uong-tra-xanh-moi-ngay-co-tot-khong-665x400-8524.jpg", // Image for Black Tea
      name: "Trà Đen Assam",
      category: "tra-den",
      price: 380,
      discountPercent: 25,
      size: [
        { name: "100g", quantity: 60 },
        { name: "200g", quantity: 35 },
        { name: "500g", quantity: 15 },
      ],
      description: "Trà đen từ vùng Assam nổi tiếng với hương vị đậm đà, mạnh mẽ và màu nước đỏ sẫm. Thích hợp để pha trà sữa hoặc uống nóng.",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1583047797233-e3c59e7216a8", // Image for Oolong Tea
      name: "Trà Oolong Cao Cấp",
      category: "tra-o-long",
      price: 550,
      discountPercent: 40,
      size: [
        { name: "50g", quantity: 40 },
        { name: "100g", quantity: 25 },
        { name: "200g", quantity: 10 },
      ],
      description: "Loại trà Oolong bán lên men, mang hương thơm hoa cỏ tinh tế và vị ngọt dịu kéo dài. Được trồng ở vùng núi cao, chất lượng hảo hạng.",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1567498389080-612e51ac1855", // Image for Chamomile Tea
      name: "Trà Hoa Cúc",
      category: "tra-thao-moc",
      price: 280,
      discountPercent: 15,
      size: [
        { name: "20 túi lọc", quantity: 55 },
        { name: "50g", quantity: 30 },
        { name: "100g", quantity: 12 },
      ],
      description: "Trà thảo mộc từ hoa cúc sấy khô, có tác dụng thư giãn, giúp ngủ ngon. Hương thơm nhẹ nhàng, vị ngọt tự nhiên.",
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1520328851907-b7913973a910", // Image for Puerh Tea
      name: "Trà Puerh Lâu Năm",
      category: "tra-den", // Puerh is a type of fermented tea, often categorized with black tea
      price: 750,
      discountPercent: 20,
      size: [
        { name: "50g", quantity: 30 },
        { name: "100g", quantity: 20 },
        { name: "200g", quantity: 8 },
      ],
      description: "Trà Puerh lên men sau thu hoạch, mang hương vị đất đặc trưng và có giá trị dinh dưỡng cao. Càng để lâu càng ngon.",
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1586065977021-c8d8f401876e", // Image for Instant Tea
      name: "Trà Gừng Mật Ong Hòa Tan",
      category: "tra-hoa-tan",
      price: 180,
      discountPercent: 25,
      size: [
        { name: "10 gói", quantity: 100 },
        { name: "20 gói", quantity: 60 },
      ],
      description: "Thức uống hòa tan tiện lợi với sự kết hợp của gừng ấm áp và mật ong ngọt ngào. Giúp giữ ấm cơ thể, đặc biệt vào mùa lạnh.",
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1579334700294-f42e741173ae", // Image for Lotus Tea
      name: "Trà Sen Hồ Tây",
      category: "tra-xanh",
      price: 600,
      discountPercent: 35,
      size: [
        { name: "100g", quantity: 45 },
        { name: "200g", quantity: 30 },
        { name: "500g", quantity: 10 },
      ],
      description: "Trà xanh được ướp hương sen tự nhiên từ Hồ Tây, mang đến hương thơm dịu dàng, thanh khiết và vị ngọt nhẹ.",
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1572465120571-4e25689e8c1a", // Image for Rooibos Tea
      name: "Trà Rooibos Hữu Cơ",
      category: "tra-thao-moc",
      price: 300,
      discountPercent: 18,
      size: [
        { name: "100g", quantity: 20 },
        { name: "200g", quantity: 10 },
        { name: "500g", quantity: 5 },
      ],
      description: "Trà không chứa caffeine từ Nam Phi, giàu chất chống oxy hóa. Hương vị ngọt dịu tự nhiên, thích hợp cho mọi lứa tuổi.",
    },
    {
      id: 9,
      imageUrl: "https://images.unsplash.com/photo-1559511260-54175691ca2f", // Image for Shan Tuyet Tea
      name: "Trà Shan Tuyết Cổ Thụ",
      category: "tra-xanh",
      price: 650,
      discountPercent: 30,
      size: [
        { name: "100g", quantity: 40 },
        { name: "200g", quantity: 25 },
        { name: "500g", quantity: 0 }, // Out of stock
      ],
      description: "Thu hoạch từ những cây trà cổ thụ trên núi cao, mang hương vị độc đáo, chát nhẹ và hậu vị ngọt sâu lắng.",
    },
    {
      id: 10,
      imageUrl: "https://images.unsplash.com/photo-1581314712833-a879bf771b06", // Image for Fruit Tea
      name: "Trà Vải Thiều",
      category: "tra-trai-cay",
      price: 250,
      discountPercent: 20,
      size: [
        { name: "10 túi lọc", quantity: 100 },
        { name: "20 túi lọc", quantity: 60 },
      ],
      description: "Trà đen được tẩm ướp hương vải thiều tự nhiên, mang đến hương vị ngọt ngào, thơm lừng. Thích hợp pha trà đá hoặc trà trái cây.",
    },
    {
      id: 11,
      imageUrl: "https://images.unsplash.com/photo-1566944756209-7502a40a404c", // Image for Earl Grey Tea
      name: "Trà Earl Grey Bá Tước",
      category: "tra-den",
      price: 400,
      discountPercent: 15,
      size: [
        { name: "100g", quantity: 25 },
        { name: "200g", quantity: 15 },
        { name: "500g", quantity: 10 },
      ],
      description: "Trà đen cổ điển được tẩm ướp dầu Bergamot, tạo nên hương thơm đặc trưng, sang trọng. Thường được uống kèm sữa hoặc chanh.",
    },
  ];
  
  export default tra;