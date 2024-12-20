import React from "react";
import categoryOne from "../assets/products/categoryOne.svg";
import categoryTwo from "../assets/products/categoryTwo.svg";
import categoryThree from "../assets/products/categoryThree.svg";
import categoryFour from "../assets/products/categoryFour.svg";
import categoryFive from "../assets/products/categoryFive.svg";
import categorySix from "../assets/products/categorySix.svg";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "ENGAGEMENT RINGS",
    image: categoryOne,
  },
  {
    id: 2,
    name: "WEDDING RINGS",
    image: categoryTwo,
  },
  {
    id: 3,
    name: "EARRINGS",
    image: categoryThree,
  },
  {
    id: 4,
    name: "BRACELETS",
    image: categoryFour,
  },
  {
    id: 5,
    name: "PENDANTS / NECKLACES",
    image: categoryFive,
  },
  {
    id: 6,
    name: "WEDDING SETS",
    image: categorySix,
  },
];

const ShopByCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F0EE]">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 unna-regular">
        Shop by Category
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card flex flex-col items-center rounded-lg transition p-4"
            onClick={() => navigate("/category")}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 text-black text-sm font-medium rounded border-[#00254E] border">
          MORE CATEGORIES
        </button>
      </div>
    </div>
  );
};

export default ShopByCategory;
