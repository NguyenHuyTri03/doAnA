import { href } from "react-router-dom";

const navigation = {
  categories: [
    {
      name: 'Danh mục sản phẩm',
      sections: [
        {
          name: 'Các loại sản phẩm',
          items: [
            {
              name: 'Cà phê', href: '/products',
              children: [
                { name: 'Cà phê rang' },
                { name: 'Cà phê xay' },
                { name: 'Cà phê hòa tan' },
              ],
            },
            { name: 'Trà' },
            {
              name: 'Máy pha',
              children: [
                { name: 'Máy xay' },
                { name: 'Máy pha' },
              ],
            },
          ],
        },
        {
          name: 'Thương hiệu',
          items: [
            { name: 'Quà tặng' },
            { name: 'Sản phẩm khác' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Trang chủ', href: '/' },
    { name: 'Tất cả sản phẩm', href: '/san-pham' },
    { name: 'Liên hệ', href: '/lien-he' },
  ],
};

export { navigation };
