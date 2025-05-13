'use client'

import { useState, useEffect } from 'react'
import { Grid, Rating, Box } from '@mui/material'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { test as productData } from '../../../Data/test.js'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ProductReviewCard from './ProductReviewCard.jsx'
import LinearProgress from '@mui/material/LinearProgress'
import HomeSectionCard from '../ProductSectionCard/ProductSectionCard.jsx'
import test from '../../../Data/test.js'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const reviews = { href: '', average: 4, totalCount: 117 }

export default function ProductDetails() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

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
                Đang tải sản phẩm... hoặc không tìm thấy sản phẩm.
            </div>
        )
    }

    const handleAddToCart = () => {
        if (!selectedSize) return
        console.log('Thêm vào giỏ hàng:', { product, selectedSize, quantity })
        navigate('/cart')
    }

    const mappedSizes = product.size
        ? product.size.map(s => ({
            name: s.name,
            inStock: s.quantity > 0,
            quantity: s.quantity
        }))
        : []

    const mappedImages = product.imageUrl
        ? Array(4).fill({ src: product.imageUrl, alt: `Hình ảnh của ${product.name}` })
        : []

    const breadcrumbs = [
        { id: 1, name: 'Sản phẩm', href: '/products' },
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

            {/* Chi tiết sản phẩm */}
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
                                    <span className="text-green-600 font-medium">{product.discountPercent}% giảm</span>
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
                                {reviews.totalCount} đánh giá
                            </a>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Mô tả</h3>
                                <p className="text-sm text-gray-700">{product.description}</p>
                            </div>
                        </div>

                        <div className="mb-4 mt-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">Kích cỡ</h3>
                                <a href="#" className="text-sm text-indigo-600 hover:underline">Hướng dẫn chọn kích cỡ</a>
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
                                            className={({ checked }) =>
                                                classNames(
                                                    'py-2 px-2 rounded border text-sm font-medium text-center transition duration-200 shadow-sm',
                                                    size.inStock
                                                        ? checked
                                                            ? 'bg-orange-100 text-orange-800 border-orange-500 ring-2 ring-orange-400'
                                                            : 'bg-white text-gray-900 hover:bg-orange-50 hover:border-orange-400'
                                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                )
                                            }
                                        >
                                            <div className="flex flex-col items-center">
                                                <span>{size.name}</span>
                                                {!size.inStock && (
                                                    <span className="text-[10px] text-red-400">Hết hàng</span>
                                                )}
                                            </div>
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            ) : (
                                <p className="text-sm text-gray-500 mt-2">Không có kích cỡ nào.</p>
                            )}
                        </div>

                        <div className="mt-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                Số lượng
                            </label>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 border rounded px-2 py-1 text-center"
                                />
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                            className={classNames(
                                !selectedSize ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700',
                                'mt-6 w-full py-3 text-white rounded-lg font-semibold transition shadow-md'
                            )}
                        >
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </section>

            {/* Đánh giá sản phẩm */}
            <section className="mt-12 bg-gray-50 p-6 rounded-xl shadow-sm">
                <h1 className="font-semibold text-xl pb-4 text-gray-800">Đánh giá gần đây</h1>
                <Grid container spacing={7}>
                    <Grid item xs={12} md={7}>
                        <div className="space-y-5">
                            {[1, 1, 1].map((item, idx) => (
                                <ProductReviewCard key={idx} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <h1 className='text-xl font-semibold pb-2'>Xếp hạng sản phẩm</h1>
                        <div className='flex items-center space-x-3'>
                            <Rating value={4.6} precision={.5} readOnly />
                            <p className='opacity-60'>7894 lượt đánh giá</p>
                        </div>

                        <Box className="mt-5 space-y-3">
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}><p>Xuất sắc</p></Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={70} color="success" sx={{ height: 7, width: 200, bgcolor: "#d0d0d0", borderRadius: 4 }} />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}><p>Rất tốt</p></Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={25} sx={{ height: 7, width: 200, borderRadius: 4, bgcolor: "#d0d0d0", '& .MuiLinearProgress-bar': { backgroundColor: '#00e676' } }} />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}><p>Tốt</p></Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={25} sx={{ height: 7, width: 200, borderRadius: 4, bgcolor: "#d0d0d0", '& .MuiLinearProgress-bar': { backgroundColor: '#facc15' } }} />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}><p>Trung bình</p></Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={20} color="warning" sx={{ height: 7, width: 200, bgcolor: "#d0d0d0", borderRadius: 4 }} />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" gap={2}>
                                <Grid item xs={2}><p>Kém</p></Grid>
                                <Grid item xs={7}>
                                    <LinearProgress variant="determinate" value={15} color="error" sx={{ height: 7, width: 200, bgcolor: "#d0d0d0", borderRadius: 4 }} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </section>

            {/* Sản phẩm tương tự */}
            <section className='pt-10'>
                <h1 className='py-5 text-xl font-bold'>Sản phẩm tương tự</h1>
                <div className='flex flex-wrap space-y-5'>
                    {test.map((item) => (
                        <Link key={item.id} to={`/product/${item.id}`} className="block">
                            <HomeSectionCard product={item} />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
