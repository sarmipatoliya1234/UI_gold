import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiHeart, FiUser, FiShoppingCart } from 'react-icons/fi';
import Logo from '../assets/products/logo.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md">
      <div className="bg-[#11273F] text-white text-sm py-2 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <span>Virtual Appointment</span>
          </div>
          <div className="hidden md:block">30-Day Hassle-Free Returns</div>
          <div className="flex items-center">
            <span className="hidden md:block mr-2">📞</span>
            <span>(+91) 90239-30923</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F0EE] py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* <div className="text-xl font-bold text-gray-800">AREUM</div> */}
          <img src={Logo} alt="" className='w-24 h-24'/>

          <div className="hidden md:flex flex-grow mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
              <FiSearch />
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#engagement-rings" className="text-gray-600 hover:text-gray-900">
              Engagement Rings
            </a>
            <a href="#wedding-rings" className="text-gray-600 hover:text-gray-900">
              Wedding Rings
            </a>
            <a href="#fine-jewelry" className="text-gray-600 hover:text-gray-900">
              Fine Jewelry
            </a>
            <a href="#custom-design" className="text-gray-600 hover:text-gray-900">
              Custom Design
            </a>
            <a href="#diamonds" className="text-gray-600 hover:text-gray-900">
              Diamonds
            </a>
            <a href="#gifts" className="text-gray-600 hover:text-gray-900">
              Gifts
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">USD $</span>
            </div>
            <FiHeart className="text-gray-600 hover:text-gray-900" size={20} />
            <FiUser className="text-gray-600 hover:text-gray-900" size={20} />
            <div className="relative">
              <FiShoppingCart className="text-gray-600 hover:text-gray-900" size={20} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
                0
              </span>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg py-4 px-6">
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                <FiSearch />
              </button>
            </div>

            <div className="space-y-4">
              <a href="#engagement-rings" className="block text-gray-600 hover:text-gray-900">
                Engagement Rings
              </a>
              <a href="#wedding-rings" className="block text-gray-600 hover:text-gray-900">
                Wedding Rings
              </a>
              <a href="#fine-jewelry" className="block text-gray-600 hover:text-gray-900">
                Fine Jewelry
              </a>
              <a href="#custom-design" className="block text-gray-600 hover:text-gray-900">
                Custom Design
              </a>
              <a href="#diamonds" className="block text-gray-600 hover:text-gray-900">
                Diamonds
              </a>
              <a href="#gifts" className="block text-gray-600 hover:text-gray-900">
                Gifts
              </a>
            </div>

            <div className="mt-4 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">USD $</span>
              </div>
              <div className="flex justify-between items-center">
                <FiHeart className="text-gray-600 hover:text-gray-900" size={20} />
                <FiUser className="text-gray-600 hover:text-gray-900" size={20} />
                <FiShoppingCart className="text-gray-600 hover:text-gray-900" size={20} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
