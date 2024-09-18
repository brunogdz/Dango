import React from 'react';
import { useCart } from '../context/cartContext';
import { FaTrash } from 'react-icons/fa';

const CartDropdown = ({ toggleCart }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${parseFloat(item.variants.edges[0].node.priceV2.amount).toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 border border-gray-400 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border border-gray-400 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-red-500 ml-4"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">Total: ${totalPrice}</p>
          </div>
        </div>
      )}
      <button className="bg-gray-300 px-4 py-2 rounded mt-4" onClick={toggleCart}>
        Close
      </button>
    </div>
  );
};

export default CartDropdown;