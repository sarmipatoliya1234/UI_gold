import React from 'react';
import giftOne from "../assets/products/giftOne.svg"; 
import giftTwo from "../assets/products/giftTwo.svg"; 
import giftThree from "../assets/products/giftThree.svg"; 
import giftFour from "../assets/products/giftFour.svg"; 

const GiftCard = ({ title, image }) => (
  <div className="relative group cursor-pointer overflow-hidden rounded-lg">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
    </div>
    
    <div className="absolute inset-0 flex flex-col p-6 text-white text-center">
      <h3 className="text-2xl font-serif">{title}</h3>
      <button className="text-sm font-medium tracking-wide hover:underline">
        EXPLORE NOW
      </button>
    </div>
  </div>
);

const GiftIdeas = () => {
  const giftCategories = [
    {
      title: "Mother's Day Gifts",
      image: giftOne
    },
    {
      title: "Someone's Special",
      image: giftTwo
    },
    {
      title: "Trending Gifts",
      image: giftThree
    },
    {
      title: "Wedding Gifts",
      image: giftFour
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-serif mb-8">Gift Ideas</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {giftCategories.map((category, index) => (
          <GiftCard
            key={index}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
};

export default GiftIdeas;
