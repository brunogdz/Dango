import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const image = product.images.edges?.[0]?.node.originalSrc || '/placeholder.png';
  const altText = product.images.edges?.[0]?.node.altText || 'Product Image';
  const priceV2 = product.variants.edges[0].node.priceV2;
  const price = priceV2 ? parseFloat(priceV2.amount) : 0;

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-0 pb-[125%]"> 
        <Image
          src={image}
          alt={altText}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-black">{formattedPrice}</p>
        <button className="bg-[#7AA65A] text-white px-2 rounded-full transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
