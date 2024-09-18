import React, { useState } from 'react';
import { useCart } from '../context/cartContext';

const Modal = ({ product, closeModal }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        closeModal();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
                <h2 className="text-lg font-bold text-black mb-4">{product.title}</h2>
                <p className="text-black mb-4">
                    Price: ${parseFloat(product.variants.edges[0].node.priceV2.amount).toFixed(2)}
                </p>

                <div className="flex items-center justify-between mb-4">
                    <button
                        className="px-4 py-2 border border-gray-300 rounded text-black"
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    >
                        -
                    </button>
                    <span className="text-black px-4">{quantity}</span>
                    <button
                        className="px-4 py-2 border border-gray-300 rounded text-black"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>

                <div className="flex justify-between">
                    <button
                        className="bg-[#7AA65A] text-white px-4 py-2 rounded"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="bg-gray-300 text-black px-4 py-2 rounded"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;