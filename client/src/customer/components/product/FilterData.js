const subCategories = [
    { name: 'Cà Phê' },
    { name: 'Trà' },
    { name: 'Dụng Cụ Pha Chế' },
  ];
  
  const filters = [
    {
      id: 'name',
      name: 'Brand Coffee',
      options: [
        { value: 'Arabica House', label: 'Arabica House', checked: false },
        { value: 'Robusta King', label: 'Robusta King', checked: false },
        { value: 'Blend Brew', label: 'Blend Brew', checked: false },
        { value: 'Espresso Lovers', label: 'Espresso Lovers', checked: false },
        { value: 'Colombia Coffee', label: 'Colombia Coffee', checked: false },
        { value: 'Vietnam Legend', label: 'Vietnam Legend', checked: false },
        { value: 'Cold Brew Co.', label: 'Cold Brew Co.', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '250g', label: '250g', checked: false },
        { value: '500g', label: '500g', checked: false },
        { value: '1kg', label: '1kg', checked: false },
      ],
    },
    {
      id: 'price',
      name: 'Price Range',
      options: [
        { value: '0-300', label: '$0 - $300', checked: false },
        { value: '300-400', label: '$300 - $400', checked: false },
        { value: '400-500', label: '$400 - $500', checked: false },
        { value: '500+', label: '$500+', checked: false },
      ],
    },
    {
      id: 'discount',
      name: 'Discount Percent',
      options: [
        { value: '30-40', label: '30% - 40%', checked: false },
        { value: '40-50', label: '40% - 50%', checked: false },
        { value: '50+', label: '> 50%', checked: false },
      ],
    },
  ];
  
  export default { subCategories, filters };
  