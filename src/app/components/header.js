import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import CustomCartIcon from './customCartIcon';
import CartDropdown from './cartDropDown';
import { useCart } from '../context/cartContext';

const Header = () => {
  const [selected, setSelected] = useState('HOME');
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  const navItems = ['HOME', 'ITEM 1', 'ITEM 2', 'ITEM 3', 'ITEM 4', 'ITEM 5'];

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header>

      <div className="bg-[#70925B] text-white text-center py-1 text-sm">
        30% OFF ALL ORDERS UNTIL 4/27
      </div>

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-[#70925B] md:hidden">
            <HiMenu size={24} />
          </div>

          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-9 text-[#7AA65A] text-sm md:text-base list-none">
              {navItems.map((item) => (
                <li key={item} className="relative">
                  <a
                    href="#"
                    onClick={() => setSelected(item)}
                    className={`${selected === item ? 'font-bold' : 'hover:text-[#4B7A44]'
                      }`}
                  >
                    {item}
                  </a>
                  {selected === item && (
                    <div className="absolute left-0 right-0 h-1 bg-[#7AA65A] rounded-full mt-1" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative text-[#70925B]">
            <button onClick={toggleCart} className="relative">
              <CustomCartIcon />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                  {totalItems}
                </span>
              )}
            </button>

            {cartOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                <CartDropdown toggleCart={toggleCart} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;