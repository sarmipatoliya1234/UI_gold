import React from "react";
import ownJewelOne from "../assets/products/ownJewelOne.svg";
import ownJewelTwo from "../assets/products/ownJewelTwo.svg";
import ownJewelThree from "../assets/products/ownJewelThree.svg";
import yellowDiamond from "../assets/products/yellowDiamond.svg";
import blueDiamond from "../assets/products/blueDiamond.svg";
import modalRing from "../assets/products/modalRing.svg";
import ringModalBanner from "../assets/products/ringModalBanner.svg";
import { Heart } from "lucide-react";

const JewelryStore = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-12">
      <section>
        <h2 className="text-3xl text-center font-serif mb-8 unna-regular">
          Colored Diamonds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative hidden lg:block md:block">
            <div className="relative">
              <img src={ringModalBanner} alt="" />
              <div className="space-y-4 absolute left-6 top-6 w-40">
                <h3 className="text-2xl font-bold unna-regular">EVERLASTING LOVE</h3>
                <p className="text-gray-600">
                  Luxurious, colored, lab-grown diamonds in fancy shapes.
                </p>
                <button className="bg-[#00254E] text-white px-3 py-2 rounded">
                  SHOP NOW
                </button>
              </div>
              <div className="absolute bottom-0 right-0">
                <img
                  src={modalRing}
                  alt="Model with Ring"
                  className="h-52 w-52"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
            <Heart className="absolute top-2 md:right-14 right-9 text-gray-400 cursor-pointer hover:text-red-500 transition-colors bg-white rounded-full p-1" />
            <img
              src={blueDiamond}
              alt="Blue Diamond Ring"
              className="w-full h-[60%]"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Blue Diamond Oval Engagement Ring
              </h3>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="font-bold">USD $2,006.85</span>
                  <span className="text-gray-500 line-through ml-2">
                    $2,784.00
                  </span>
                </div>
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-gray-300">
                      {star}
                    </span>
                  ))}
                  <span className="text-sm ml-1">0 review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
            <Heart className="absolute top-2 md:right-14 right-9 text-gray-400 cursor-pointer hover:text-red-500 transition-colors bg-white rounded-full p-1" />
            <img
              src={yellowDiamond}
              alt="Yellow Diamond Ring"
              className="w-full h-[60%]"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Yellow Pear Lab Grown Diamond Bypass...
              </h3>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="font-bold">USD $2,359.60</span>
                  <span className="text-gray-500 line-through ml-2">
                    $2,784.00
                  </span>
                </div>
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-gray-300">
                      {star}
                    </span>
                  ))}
                  <span className="text-sm ml-1">0 review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-2 niconne-regular">Create Your Jewelry</h2>
          <h3 className="text-2xl mb-8 unna-regular">Design Your Own Engagement Ring</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src={ownJewelOne}
              alt="Design Settings"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-20 p-6 w-52">
              <div className="h-full flex flex-col">
                <h4 className="text-lg font-medium text-white mb-2">
                  Design Settings
                </h4>
                <p className="text-sm text-white">
                  Explore Design Ideas, Discuss Budget Options with Our Experts,
                  Opt for Virtual Consultation!
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group">
            <img
              src={ownJewelTwo}
              alt="Diamond Check"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-20 p-6 w-52">
              <div className="h-full flex flex-col">
                <h4 className="text-lg font-medium text-white mb-2">
                  Diamond Check
                </h4>
                <p className="text-sm text-white">
                  Request Experts to Share Diamond Images and Videos for
                  Approval Before Setting
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group">
            <img
              src={ownJewelThree}
              alt="Final Approval"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-20 p-6 w-52">
              <div className="h-full flex flex-col">
                <h4 className="text-lg font-medium text-white mb-2">
                  Final Approval
                </h4>
                <p className="text-sm text-white">
                  Team to Provide Pre-Shipment Jewelry Images and Video for
                  Approval
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-navy-blue text-white px-8 py-3 rounded-lg text-lg hover:bg-opacity-90 transition-colors">
            BEGIN NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default JewelryStore;
