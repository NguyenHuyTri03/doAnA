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
              name: 'Cà phê', href: '/products/ca-phe',
              children: [
                { name: 'Cà phê hạt', href: '/products/ca-phe-hat' },
                { name: 'Cà phê rang', href: '/products/ca-phe-rang' },
                { name: 'Cà phê hòa tan', href: '/products/ca-phe-hoa-tan' },
              ],
            },
            { name: 'Trà', href: '/products/tra' },
            {
              name: 'Máy pha', href: '/products/may',
              children: [
                { name: 'Máy xay', href: '/products/may-xay' },
                { name: 'Máy pha', href: '/products/may-pha' },
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
