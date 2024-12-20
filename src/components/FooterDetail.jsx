import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Lab Grown Diamonds</h4>
          <ul className="text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Engagement Rings</a></li>
            <li><a href="#" className="hover:underline">Wedding Rings</a></li>
            <li><a href="#" className="hover:underline">Diamond Earrings</a></li>
            <li><a href="#" className="hover:underline">Bracelets And Bangles</a></li>
            <li><a href="#" className="hover:underline">Pendants And Necklaces</a></li>
            <li><a href="#" className="hover:underline">Wedding Sets</a></li>
            <li><a href="#" className="hover:underline">Men's Collection</a></li>
            <li><a href="#" className="hover:underline">Lab Grown Diamonds</a></li>
            <li><a href="#" className="hover:underline">Hand Picked Diamonds</a></li>
            <li><a href="#" className="hover:underline">Colored Lab Diamonds</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Moissanite Rings</h4>
          <ul className="text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Moissanite Bridal Sets</a></li>
            <li><a href="#" className="hover:underline">Moissanite Engagement Rings</a></li>
            <li><a href="#" className="hover:underline">Fancy Colored Moissanite Engagement Rings</a></li>
            <li><a href="#" className="hover:underline">Moissanite Vintage Engagement Rings</a></li>
          </ul>
        </div>

        <div className="md:col-span-1 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-4">Wedding Bands</h4>
              <ul className="text-sm text-gray-700">
                <li><a href="#" className="hover:underline">Lab Grown Diamond Eternity Bands</a></li>
                <li><a href="#" className="hover:underline">Lab Grown Diamond Wedding Bands</a></li>
                <li><a href="#" className="hover:underline">Moissanite Eternity Wedding Bands</a></li>
                <li><a href="#" className="hover:underline">Wedding Bands</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Loose Stones</h4>
              <ul className="text-sm text-gray-700">
                <li><a href="#" className="hover:underline">Lab Grown Diamonds Rose Cut Loose</a></li>
                <li><a href="#" className="hover:underline">Moissanite Loose Stones</a></li>
                <li><a href="#" className="hover:underline">Lab Grown Loose Diamonds Fancy Color</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-12 text-center text-xs text-gray-500">
        <p>©2024 [Your Company Name]. All Rights Reserved. Developed by [Your Name/Company].</p>
      </div>
    </footer>
  );
};

export default Footer;