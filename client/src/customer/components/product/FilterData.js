const subCategories = [
  { name: 'Cà Phê' },
  { name: 'Trà' },
  { name: 'Dụng Cụ Pha Chế' },
];

const filters = [
  {
    id: 'name',
    name: 'Loại sản phẩm',
    options: [
      { value: 'ca-phe-hoa-tan', label: 'Cà phê hòa tan', checked: false },
      { value: 'ca-phe-hat', label: 'Cà phê hạt', checked: false },
      { value: 'ca-phe-rang', label: 'Cà phê rang', checked: false },
      { value: 'tra-xanh', label: 'Trà xanh', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Kích cỡ',
    options: [
      { value: '250g', label: '250g', checked: false },
      { value: '500g', label: '500g', checked: false },
      { value: '1kg', label: '1kg', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Giá',
    options: [
      { value: '0-300', label: '$0 - $300', checked: false },
      { value: '300-400', label: '$300 - $400', checked: false },
      { value: '400-500', label: '$400 - $500', checked: false },
      { value: '500+', label: '$500+', checked: false },
    ],
  },
  // {
  //   id: 'discount',
  //   name: 'Discount Percent',
  //   options: [
  //     { value: '30-40', label: '30% - 40%', checked: false },
  //     { value: '40-50', label: '40% - 50%', checked: false },
  //     { value: '50+', label: '> 50%', checked: false },
  //   ],
  // },
];

export default { subCategories, filters };
