import React from 'react';
import { FiHeart } from 'react-icons/fi';
import sellerOne from "../assets/products/sellerOne.svg";
import sellerTwo from "../assets/products/sellerTwo.svg";
import sellerThree from "../assets/products/sellerThree.svg";
import sellerFour from "../assets/products/sellerFour.svg";

const products = [
  {
    id: 1,
    image: sellerOne,
    title: 'Vintage Engagement Ring with Marquise Cut',
    price: 'USD $1,059.10',
    originalPrice: '$1,246.00',
    rating: 4.5,
    reviews: 25,
    tag: 'Lab Grown Diamond',
  },
  {
    id: 2,
    image: sellerTwo,
    title: 'Emerald Cut Lab Grown Diamond Eternity Ring',
    price: 'USD $1,378.70',
    originalPrice: '$1,622.00',
    rating: 4,
    reviews: 9,
    tag: 'Lab Grown Diamond',
  },
  {
    id: 3,
    image: sellerThree,
    title: 'Round Lab Grown Diamond Stud Earrings',
    price: 'USD $577.15',
    originalPrice: '$679.00',
    rating: 4.5,
    reviews: 4,
    tag: 'Lab Grown Diamond',
  },
  {
    id: 4,
    image: sellerFour,
    title: "Men's Matte Finish Wedding Ring",
    price: 'USD $1,108.40',
    originalPrice: '$1,304.00',
    rating: 0,
    reviews: 0,
    tag: 'Lab Grown Diamond',
  },
];

const BestSellers = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 unna-regular">
      Our Best-Selling Moissanite Jewelry
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FiHeart className="text-gray-600" size={20} />
              </button>
              <span className="absolute bottom-2 left-2 bg-white text-xs font-semibold text-gray-800 px-2 py-1 rounded">
                {product.tag}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h3>
              <div className="flex items-center mb-2">
                <span className="text-lg font-bold text-gray-800">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.originalPrice}
                </span>
              </div>
              <div className="flex items-center text-sm text-yellow-500">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                <span className="ml-2 text-gray-600">
                  {product.reviews} {product.reviews === 1 ? 'review' : 'reviews'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 text-black rounded transition border-[#00254E] border">
          View All
        </button>
      </div>
    </div>
  );
};

export default BestSellers;


