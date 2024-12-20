import React from "react";
import { data } from "./RingJson";
import RingSection from "./RingSection";
import { useNavigate } from "react-router-dom";

const RingCard = ({ ring }) => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/category/${category.id}`, { state: { name: category.name, image: category.image, rating: category.rating, price: category.price, oldPrice: category.oldPrice } });
  };
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md"
      onClick={() => handleCategoryClick(ring)}
    >
      <img
        src={ring.image}
        alt={ring.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{ring.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500 line-through">
            {ring.oldPrice}
          </span>
          <span className="text-lg font-bold">{ring.price}</span>
        </div>
        <div className="mt-2 flex items-center">
          {Array.from({ length: ring.rating }).map((_, index) => (
            <span key={index} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const RingsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <RingSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((ring) => (
          <RingCard key={ring.id} ring={ring} />
        ))}
      </div>
    </div>
  );
};

export default RingsGrid;
