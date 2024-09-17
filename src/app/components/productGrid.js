import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fetchProducts } from '../../lib/api';
import ProductCard from './productCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#7AA65A94] mb-8">
                    Featured Collection
                </h2>
                {loading ? (
                    <p className="text-center">Loading products...</p>
                ) : products.length === 0 ? (
                    <p className="text-center">No products available.</p>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom-grid',
                            prevEl: '.swiper-button-prev-custom-grid',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-custom',
                            renderBullet: (index, className) =>
                                `<span class="${className} bg-[#7AA65A] w-4 h-4 rounded-full mx-1"></span>`,
                        }}
                        className="w-full max-w-screen-xl mx-auto"
                    >

                        <SwiperSlide>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {products.slice(0, 5).map((product) =>
                                    product.images.edges?.[0]?.node.originalSrc ? (
                                        <ProductCard key={product.id} product={product} />
                                    ) : null
                                )}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {products.slice(5, 8).map((product) =>
                                    product.images.edges?.[0]?.node.originalSrc ? (
                                        <ProductCard key={product.id} product={product} />
                                    ) : null
                                )}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                )}

                <div className="pagination-button-grid flex justify-center mt-4">
                    <button className="bg-transparent text-[#7AA65A] border border-[#7AA65A] px-2 py-1 rounded-[15px] hover:bg-[#4B7A44] hover:text-white flex items-center mr-4 swiper-button-prev-custom-grid">
                        <FaArrowLeft />
                    </button>
                    <button className="bg-transparent text-[#7AA65A] border border-[#7AA65A] px-2 py-1 rounded-[15px] hover:bg-[#4B7A44] hover:text-white flex items-center swiper-button-next-custom-grid">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;