import React from 'react';
import commitmentOne from "../assets/products/commitmentOne.svg";
import commitmentTwo from "../assets/products/commitmentTwo.svg";
import commitmentThree from "../assets/products/commitmentThree.svg";
import commitmentFour from "../assets/products/commitmentFour.svg";
import commitmentFive from "../assets/products/commitmentFive.svg";
import commitmentSix from "../assets/products/commitmentSix.svg";

const CommitmentFeature = ({ icon, title, className = "" }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className={`mb-4 flex items-center justify-center ${className}`}>
      <img 
        src={icon} 
        alt={title}
        className="w-12 h-12 object-contain"
      />
    </div>
    <p className="text-sm text-gray-800 max-w-[120px] leading-tight">{title}</p>
  </div>
);

const CommitmentSection = () => {
  const features = [
    {
      title: "60 Inn'l + 60 Hug Worldwide",
      icon: commitmentOne,
      className: "bg-opacity-10 p-3 rounded-lg"
    },
    {
      title: "24/7 Customer Service",
      icon: commitmentTwo,
      className: "bg-opacity-10 p-3 rounded-lg"
    },
    {
      title: "100% Money Back Guarantee",
      icon: commitmentThree,
      className: "bg-opacity-10 p-3 rounded-lg"
    },
    {
      title: "Areum's Trust",
      icon: commitmentFour,
      className: "bg-opacity-10 p-3 rounded-lg"
    },
    {
      title: "Unbeatable Market Price",
      icon: commitmentFive,
      className: "bg-opacity-10 p-3 rounded-lg"
    },
    {
      title: "Eco Friendly Element",
      icon: commitmentSix,
      className: "bg-opacity-10 p-3 rounded-lg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h3 className="text-[#0088cc] niconne-regular text-2xl mb-2 font-medium">Dream Promise</h3>
        <h2 className="text-2xl md:text-3xl text-gray-900 font-serif">Our Commitment to Excellence</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <CommitmentFeature 
            key={index}
            icon={feature.icon}
            title={feature.title}
            className={feature.className}
          />
        ))}
      </div>
    </div>
  );
};

export default CommitmentSection;