'use client'

import { useState, useEffect } from 'react'
import { Grid, Rating, Box } from '@mui/material'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { test as productData } from '../../../Data/test.js'
import { useParams } from 'react-router-dom'
import ProductReviewCard from './ProductReviewCard.jsx'
import LinearProgress from '@mui/material/LinearProgress';
import HomeSectionCard from '../ProductSectionCard/ProductSectionCard.jsx'
import test from '../../../Data/test.js'
import { Link } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const reviews = { href: '', average: 4, totalCount: 117 }

export default function ProductDetails() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    useEffect(() => {
        const foundProduct = productData.find(p => p.id === parseInt(productId))
        setProduct(foundProduct)

        if (foundProduct?.size?.length > 0) {
            const defaultSize = foundProduct.size.find(s => s.quantity > 0)
            setSelectedSize(defaultSize || null)
        } else {
            setSelectedSize(null)
        }
    }, [productId])

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen text-xl text-gray-600">
                Loading product... or Product not found.
            </div>
        )
    }

    const mappedSizes = product.size
        ? product.size.map(s => ({
            name: s.name,
            inStock: s.quantity > 0,
            quantity: s.quantity
        }))
        : []

    const mappedImages = product.imageUrl
        ? Array(4).fill({ src: product.imageUrl, alt: `Image of ${product.name}` })
        : []

    const breadcrumbs = [
        { id: 1, name: 'Products', href: '/products' },
        product.brand
            ? { id: 2, name: product.brand, href: `/products?Brand=${product.brand}` }
            : null
    ].filter(Boolean)

    return (
        <div className="bg-white min-h-screen px-4 py-6 sm:px-8 sm:py-10">
            <nav aria-label="Breadcrumb" className="border-b pb-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                    {breadcrumbs.map((b, i) => (
                        <li key={b.id || i} className="flex items-center">
                            <a href={b.href} className="hover:text-gray-900">{b.name}</a>
                            {i < breadcrumbs.length - 1 && (
                                <svg width={16} height={16} viewBox="0 0 16 16" className="mx-2 text-gray-400" fill="none">
                                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            )}
                        </li>
                    ))}
                    <li className="text-gray-500 font-medium">{product.name}</li>
                </ol>
            </nav>

            {/* product details */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mt-8">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-full h-[480px] overflow-hidden rounded-xl border bg-gray-50">
                            <img
                                src={mappedImages[0].src}
                                alt={mappedImages[0].alt}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>
                        <div className="flex gap-3 mt-4 overflow-x-auto">
                            {mappedImages.slice(1).map((img, idx) => (
                                <div key={idx} className="w-24 h-20 border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <p className="text-sm text-gray-500 mb-4">{product.category}</p>

                        <div className="mb-4">
                            {product.discountPercent > 0 && (
                                <div className="flex items-center mb-1 space-x-4">
                                    <span className="line-through text-gray-500">{product.price.toLocaleString()}đ</span>
                                    <span className="text-green-600 font-medium">{product.discountPercent}% Off</span>
                                </div>
                            )}

                            <p className="text-2xl font-semibold text-gray-900">
                                {product.discountPercent > 0
                                    ? `${(product.price * (1 - product.discountPercent / 100)).toLocaleString()}đ`
                                    : `${product.price.toLocaleString()}đ`}
                            </p>
                        </div>

                        <div className="flex items-center mb-6">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                        'w-5 h-5'
                                    )}
                                    aria-hidden="true"
                                />
                            ))}
                            <a href={reviews.href} className="ml-2 text-sm text-indigo-600 hover:underline">
                                {reviews.totalCount} reviews
                            </a>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Description</h3>
                                <p className="text-sm text-gray-700">{product.description}</p>
                            </div>
                        </div>

                        <div className="mb-4 mt-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm text-indigo-600 hover:underline">Size guide</a>
                            </div>
                            {mappedSizes.length > 0 ? (
                                <RadioGroup
                                    value={selectedSize}
                                    onChange={setSelectedSize}
                                    className="grid grid-cols-4 gap-2 mt-2"
                                >
                                    {mappedSizes.map((size) => (
                                        <Radio
                                            key={size.name}
                                            value={size}
                                            disabled={!size.inStock}
                                            className={classNames(
                                                size.inStock ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-50 text-gray-400 cursor-not-allowed',
                                                'rounded border py-2 text-sm font-medium text-center'
                                            )}
                                        >
                                            {size.name}
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            ) : (
                                <p className="text-sm text-gray-500 mt-2">No size available.</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            onClick={() => console.log('test')}
                            disabled={!selectedSize}
                            className={classNames(
                                !selectedSize ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700',
                                'mt-6 w-full py-3 text-white rounded-lg font-semibold transition shadow-md'
                            )}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>

            {/* Rating and reviews  */}
            <section className="mt-12 bg-gray-50 p-6 rounded-xl shadow-sm">
                <h1 className="font-semibold text-xl pb-4 text-gray-800">Recent reviews and rating</h1>
                <Grid container spacing={7}>
                    <Grid item xs={12} md={7}>
                        <div className="space-y-5">
                            {[1, 1, 1].map((item, idx) => (
                                <ProductReviewCard key={idx} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <h1 className='text-xl font-semibold pb-2 '> Product Ratings </h1>
                        <div className='flex items-center space-x-3 '>
                            <Rating value={4.6} precision={.5} readOnly />
                            <p className='opacity-60 '>7894 Ratings </p>
                        </div>

                        {/* Product ratings  */}
                        <Box className="mt-5 space-y-3 ">
                            {/* Success progress */}
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}>
                                    <p>Excellent</p>
                                </Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={70} color="success" sx={{ height: 7, width: 200, bgcolor: "#d0d0d0", borderRadius: 4 }} />
                                </Grid>
                            </Grid>
                            {/* Very good */}
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}>
                                    <p>Very Good</p>
                                </Grid>
                                <Grid item xs={7}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={25}
                                        sx={{
                                            height: 7,
                                            width: 200,
                                            borderRadius: 4,
                                            bgcolor: "#d0d0d0",
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#00e676',
                                                borderRadius: 4,
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            {/*Good  */}
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}>
                                    <p>Good</p>
                                </Grid>
                                <Grid item xs={7}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={25}
                                        sx={{
                                            height: 7,
                                            width: 200,
                                            borderRadius: 4,
                                            bgcolor: "#d0d0d0",
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#facc15',
                                                borderRadius: 4,
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Avarage */}
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}>
                                    <p>Avarage</p>
                                </Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={20} color="warning" sx={{ height: 7, width: 200, bgcolor: "#d0d0d0", borderRadius: 4 }} />
                                </Grid>
                            </Grid>

                            {/* Poor */}
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}>
                                    <p>Poor</p>
                                </Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={15} color="error" sx={{ height: 7, width: 200, bgcolor: "#d0d0d0", borderRadius: 4 }} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </section>

            {/* Similar products */}
            <section className='pt-10'>
                <h1 className='py-5 text-xl font-bold '>
                    similar products
                </h1>
                <div className='flex flex-wrap space-y-5'>
                    {test.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className="block"
                        >
                            <HomeSectionCard product={item} />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
