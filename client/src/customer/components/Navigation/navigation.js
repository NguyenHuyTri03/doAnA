const navigation = {
  
  pages: [
    { name: 'Trang chủ', href: '/' },
    { name: 'Tất cả sản phẩm', href: '/products' },
    { name: 'Về chúng tôi', href: '/gioi-thieu' },
    { name: 'Liên hệ', href: '/lien-he' },
  ],
  
  categories: [
    {
      name: 'Cà Phê',
      featured: [
        { name: 'Arabica', href: '/product/1'},
        { name: 'Robusta', href: '/product/2' },
      ],
      sections: [
        {
          name: 'Dòng sản phẩm',
          items: [
            { name: 'Cà phê hạt' },
            { name: 'Cà phê bột'},
            { name: 'Cà phê hòa tan' },
          ],
        },
        {
          name: 'Thương hiệu',
          items: [
            { name: 'Arabica House' },
            { name: 'Robusta King' },
            { name: 'Blend Brew' },
            { name: 'Espresso Lovers'},
            { name: 'Colombia Coffee', href: '/products?brand=Colombia%20Coffee' },
            { name: 'Vietnam Legend', href: '/products?brand=Vietnam%20Legend' },
            { name: 'Cold Brew Co.', href: '/products?brand=Cold%20Brew%20Co.' },
          ],
        },
      ],
    },
    
    {
      name: 'Dụng Cụ Pha Chế',
      featured: [
        { name: 'Máy pha cà phê', href: '/products?category=may-pha-ca-phe', imageSrc: 'url_may_pha.jpg', imageAlt: 'Máy pha cà phê' },
      ],
      sections: [
        {
          name: 'Cà phê',
          items: [
            { name: 'Phin', href: '/products?category=phin' },
            { name: 'French press', href: '/products?category=french-press' },
          ],
        },
      
      ],
    },
  ],
};

export { navigation };
