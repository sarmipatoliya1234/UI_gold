import React from "react";
import CustomerReviewDetailsPage from "./CustomerReviewDetailsPage";
import Container from "../assets/products/Container.svg";

const ringDetails = {
  height: "1.90 MM",
  width: "2.00 MM",
  features: { comfortFit: "Yes", resizable: "Yes" },
  centerStone: {
    type: "Lab Grown Diamond",
    shape: "Emerald Cut",
    color: "F",
    caratWeight: "1.80 CT",
    clarity: "VS1",
    measurement: "8.15 x 5.61 x 3.79 MM",
  },
  sideStone: {
    type: "Lab Grown Diamonds",
    shape: "Round Brilliant Cut",
    color: "E",
    caratWeight: "0.64 CT",
    clarity: "VS",
    measurement: "1.30 MM, 1.50 MM and 1.70 MM",
  },
  image: Container,
};

const RingDetails = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ring Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <p>Height:</p>
                <p className="font-medium">{ringDetails.height}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Width:</p>
                <p className="font-medium">{ringDetails.width}</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Features</p>
              <ul className="list-disc pl-4">
                <li>Comfort Fit: {ringDetails.features.comfortFit}</li>
                <li>Resizable: {ringDetails.features.resizable}</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Center Stone Details</h3>
              <ul className="space-y-1">
                {Object.entries(ringDetails.centerStone).map(([key, value]) => (
                  <li key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Side Stone Details</h3>
              <ul className="space-y-1">
                {Object.entries(ringDetails.sideStone).map(([key, value]) => (
                  <li key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            src={ringDetails.image}
            alt="Ring"
            className="w-full rounded-md h-[60%]"
          />
        </div>
      </div>
      <CustomerReviewDetailsPage />
    </>
  );
};

export default RingDetails;
