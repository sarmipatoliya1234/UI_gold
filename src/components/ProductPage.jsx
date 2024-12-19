import React from "react";
import sellerOne from "../assets/products/sellerOne.svg";
import sellerTwo from "../assets/products/sellerTwo.svg";
import sellerThree from "../assets/products/sellerThree.svg";
import sellerFour from "../assets/products/sellerFour.svg";
import Faq from "./Faq";

const ProductPage = () => {
  return (
    <div className="p-4 md:p-8 container m-auto">
      <div className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:underline">
          Home
        </a>{" "}
        &gt;{" "}
        <a href="#" className="hover:underline">
          Engagement Rings
        </a>{" "}
        &gt; Emerald Cut Lab Grown Diamond Halo Engagement Ring
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <img
              src={sellerOne}
              alt="Main Product"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              sellerOne,
              sellerTwo,
              sellerThree,
              sellerFour,
              sellerOne,
              sellerTwo,
              sellerThree,
              sellerFour,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4">
            Emerald Cut Lab Grown Diamond Halo Engagement Ring
          </h1>
          <p className="text-xl font-semibold text-red-500 mb-2">
            From USD $1,498.55
          </p>
          <p className="text-gray-400 line-through mb-4">$1,763.00</p>
          <p className="mb-4">⭐ 4.5 (1 review)</p>

          <div className="mb-4">
            <span className="font-semibold">Metal Type:</span>
            <div className="flex gap-2 mt-2">
              {["10K", "14K", "18K", "PT"].map((type, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg mt-2 hover:bg-gray-200">
              Customize Order
            </button>
          </div>

          <p className="text-gray-600">
            This lab-grown diamond engagement ring will be more special because
            it is not just a ring for her; it is your symbol of emotion, love,
            care, and commitment.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Pairs Well With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[sellerOne, sellerTwo, sellerThree, sellerFour].map(
                (img, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={img}
                      alt={`Related ${idx + 1}`}
                      className="w-full rounded-lg"
                    />
                    <p className="text-sm mt-2">Emerald Cut Diamond Band</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default ProductPage;
