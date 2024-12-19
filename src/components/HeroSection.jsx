import React from "react";

const JewelryBanner = () => {
  return (
    <div
      className="relative h-[600px]"
      style={{
        backgroundImage: "url('src/assets/heroSectionBanner/banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 absolute right-96 top-[20%]">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 my-4 unna-regular">
              Unique Jewelry, Rare Gems,
              <br />
              And Exquisite Pieces!
            </h2>
            <p className="mt-4 text-gray-600 my-4">CHIC AUTUMN CHILL</p>
            <div className="mt-6 text-black px-6 py-2 rounded my-4">
              GET UP TO 20% OFF | FREE SHIPPING
            </div>
            <button className="mt-2 text-white p-3 font-bold bg-[#11273F] rounded-lg w-[33%]">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryBanner;
