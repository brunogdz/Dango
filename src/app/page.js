'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/api';
import Header from './components/header';
import Hero from './components/hero';
import ProductGrid from './components/productGrid';
import { CartProvider } from './context/cartContext';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setBanners(fetchedProducts);
    };

    loadProducts();
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero banners={banners} />
        <ProductGrid />
      </div>
    </CartProvider>
  );
}