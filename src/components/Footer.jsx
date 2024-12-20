import React from "react";
import Logo from '../assets/products/logo.svg'
import Amex from '../assets/paymentLogo/Amex.svg'
import MasterCard from '../assets/paymentLogo/MasterCard.svg'
import Paypal from '../assets/paymentLogo/Paypal.svg'
import Visa from '../assets/paymentLogo/Visa.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="space-y-4">
          <img src={Logo} alt="Logo" className="w-24" />
          <p className="text-sm leading-relaxed">
            ©2024 Areumjewels. All Rights Reserved.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">AREUM</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>The Founder</li>
            <li>Reviews</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Return/Exchange Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">LAB GROWN DIAMONDS</h3>
          <ul className="space-y-2 text-sm">
            <li>Engagement Rings</li>
            <li>Wedding Rings</li>
            <li>Diamond Earrings</li>
            <li>Bracelets and Bangles</li>
            <li>Pendants and Necklaces</li>
            <li>Wedding Sets</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">MOISSANITE</h3>
          <ul className="space-y-2 text-sm">
            <li>Engagement Rings</li>
            <li>Wedding Bands</li>
            <li>Earrings</li>
            <li>Bracelets</li>
            <li>Men’s Collection</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">RESOURCES/EDUCATION</h3>
          <ul className="space-y-2 text-sm">
            <li>The Blog</li>
            <li>Find Your Ring Size</li>
            <li>Jewelry Care</li>
            <li>Order Process</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center items-center space-x-4 border-t border-gray-200">
        <img src={Visa} alt="Visa" className="h-10" />
        <img src={Paypal} alt="PayPal" className="h-10" />
        <img src={MasterCard} alt="MasterCard" className="h-10" />
        <img src={Amex} alt="AmEx" className="h-10" />
      </div>

    </footer>
  );
};

export default Footer;
