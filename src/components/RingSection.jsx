import React from "react";

const EngagementRingsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-4 lg:px-16 py-4">
        <nav className="text-sm text-gray-600">
          <span>Home / </span>
          <span className="text-gray-900 font-medium">
            Lab Grown Diamond Three Stone Engagement Rings
          </span>
        </nav>
      </div>

      <div className="px-4 lg:px-16 py-4 text-center w-2/3 m-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Lab Grown Diamond Three Stone Engagement Rings
        </h1>
        <p className="text-gray-700">
          Picture this: one occasion, two people, and three stones. A diamond
          already holds the crown for the most beloved gemstone, but add
          sustainability, cost-efficiency, and two more stones to the mix, and
          you have the perfect diamon...
          <a href="#" className="text-[#11273F] hover:underline">
            Read more
          </a>
        </p>
      </div>

      <div className="border-t border-gray-300 px-4 lg:px-16 py-4 flex justify-between items-center">
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1h-2l-3 5v6l-4 2v-8H8l-3-5H4a1 1 0 01-1-1V4z"
            />
          </svg>
          Filter By
        </button>
        <div className="text-gray-700 flex items-center space-x-4">
          <span>44 Items</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <svg
              className="w-5 h-5 absolute right-2 top-2.5 pointer-events-none text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementRingsPage;
