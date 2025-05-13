import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogBackdrop, DialogPanel,
  Disclosure, DisclosureButton, DisclosurePanel,
  Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon, MinusIcon, PlusIcon,
} from '@heroicons/react/20/solid';
import ProductCard from './ProductCard';
import test from '../../../Data/test.js';
import filterData from '../product/FilterData.js';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from 'react-router-dom';


const { filters } = filterData;


const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}



export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectednames, setSelectednames] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedDiscountPercentRange, setSelectedDiscountPercentRange] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(test);




  // Hàm xử lý thay đổi name
  const handlenameChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectednames([...selectednames, value]);
    } else {
      setSelectednames(selectednames.filter(name => name !== value));
    }
  };


  // Hàm xử lý thay đổi Size
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };


  // Hàm xử lý thay đổi Price Range
  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  // Hàm xử lý thay đổi Discount Percent Range
  const handleDiscountPercentChange = (event) => {
    setSelectedDiscountPercentRange(event.target.value);
  };



  useEffect(() => {
    let newFilteredProducts = [...test];


    // Filter by name
    if (selectednames.length > 0) {
      newFilteredProducts = newFilteredProducts.filter(product =>
        selectednames.includes(product.name)
      );
    }


    // Filter by Size
    if (selectedSize) {
      newFilteredProducts = newFilteredProducts.filter(product => {
        // Ensure product.size exists and is an array
        let sizeMatch = Array.isArray(product.size) && product.size.some(s => s.name === selectedSize && s.quantity > 0);
        return sizeMatch;
      });
    }


    // Filter by Price Range
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
      if (maxPrice) {
        newFilteredProducts = newFilteredProducts.filter(
          product => product.price >= minPrice && product.price <= maxPrice
        );
      } else {
        newFilteredProducts = newFilteredProducts.filter(
          product => product.price >= minPrice
        );
      }
    }

    // Filter by Discount Percent Range
    if (selectedDiscountPercentRange) {
      let minPercent, maxPercent;

      if (selectedDiscountPercentRange.includes('-')) {
        [minPercent, maxPercent] = selectedDiscountPercentRange.split('-').map(Number);
      } else if (selectedDiscountPercentRange.endsWith('+')) {
        minPercent = Number(selectedDiscountPercentRange.replace('+', ''));
        maxPercent = Infinity;
      } else {
        minPercent = Number(selectedDiscountPercentRange);
        maxPercent = minPercent;
      }

      if (!isNaN(minPercent)) {
        if (maxPercent !== undefined && maxPercent !== Infinity && !isNaN(maxPercent)) {
          newFilteredProducts = newFilteredProducts.filter(
            product => product.discountPercent >= minPercent && product.discountPercent <= maxPercent
          );
        } else {
          newFilteredProducts = newFilteredProducts.filter(
            product => product.discountPercent >= minPercent
          );
        }
      }
    }



    setFilteredProducts(newFilteredProducts);

  }, [selectednames, selectedSize, selectedPriceRange, selectedDiscountPercentRange]);




  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-in-out data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition-all duration-300 ease-in-out data-[closed]:translate-x-full data-[closed]:opacity-0"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-indigo-500"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              Filters
              <form className="mt-4 border-t border-gray-200">


                {/* Use filters from filterData */}
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="size-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="size-5" aria-hidden="true" />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex gap-3">

                                {section.id === 'size' ? (
                                  <>
                                    <input
                                      type="radio"
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name="size"
                                      value={option.value}
                                      checked={selectedSize === option.value}
                                      onChange={handleSizeChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-gray-500">
                                    </label>
                                  </>
                                ) : section.id === 'price' ? (
                                  <>
                                    <input
                                      type="radio"
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name="price"
                                      value={option.value}
                                      checked={selectedPriceRange === option.value}
                                      onChange={handlePriceRangeChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-gray-500">
                                      {option.label}
                                    </label>
                                  </>
                                ) : section.id === 'name' ? (
                                  <>
                                    <input
                                      type="checkbox"
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name="name"
                                      value={option.value}
                                      checked={selectednames.includes(option.value)}
                                      onChange={handlenameChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-gray-500">
                                      {option.label}
                                    </label>
                                  </>
                                ) : section.id === 'discount' ? (
                                  <>
                                    <input
                                      type="radio"
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name="discountPercent"
                                      value={option.value}
                                      checked={selectedDiscountPercentRange === option.value}
                                      onChange={handleDiscountPercentChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-gray-500">
                                      {option.label}
                                    </label>
                                  </>
                                ) : (
                                  <>
                                    <input
                                      type="checkbox"
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-gray-500">
                                      {option.label}
                                    </label>
                                  </>

                                )}
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>


        <main className="mx-auto px-4 sm:px-6 lg:px-20 "  style={{ paddingTop: '24px' }}>
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Coffee </h1>


            <div className="flex items-center">
              <button type="button" className="-m-2 ml-4 p-2 text-gray-400 sm:ml-6 lg:hidden" onClick={() => setMobileFiltersOpen(true)}>
                <span className="sr-only">Filters</span>
                <FilterListIcon />
              </button>
              {/* Sort Menu */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name} className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a href={option.href} className="block px-4 py-2 text-sm">
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>


            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters (Desktop) */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  section.id !== 'category' && (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="size-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="size-5" aria-hidden="true" />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center gap-3">
                                  {section.id === 'size' ? (
                                    <>
                                      <input
                                        type="radio"
                                        id={`filter-desktop-${section.id}-${optionIdx}`}
                                        name="size"
                                        value={option.value}
                                        checked={selectedSize === option.value}
                                        onChange={handleSizeChange}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                      </label>
                                    </>
                                  ) : section.id === 'price' ? (
                                    <>
                                      <input
                                        type="radio"
                                        id={`filter-desktop-${section.id}-${optionIdx}`}
                                        name="price"
                                        value={option.value}
                                        checked={selectedPriceRange === option.value}
                                        onChange={handlePriceRangeChange}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                      </label>
                                    </>
                                  ) : section.id === 'name' ? (
                                    <>
                                      <input
                                        type="checkbox"
                                        id={`filter-desktop-${section.id}-${optionIdx}`}
                                        name="name"
                                        value={option.value}
                                        checked={selectednames.includes(option.value)}
                                        onChange={handlenameChange}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                      </label>
                                    </>
                                  ) : section.id === 'discount' ? (
                                    <>
                                      <input
                                        type="radio"
                                        id={`filter-desktop-${section.id}-${optionIdx}`}
                                        name="discountPercent"
                                        value={option.value}
                                        checked={selectedDiscountPercentRange === option.value}
                                        onChange={handleDiscountPercentChange}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                      </label>
                                    </>
                                  ) : (
                                    <>
                                      <input
                                        type="checkbox"
                                        id={`filter-desktop-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                      </label>
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )
                ))}
              </form>


              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white py-5">
                  {filteredProducts.map((item, index) => (
                    <Link
                      key={item.id || index}
                      to={`/product/${item.id}`}
                    >
                      <ProductCard product={item} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}