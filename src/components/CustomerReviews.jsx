import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import reviewOne from '../assets/products/reviewOne.svg'
import reviewTwo from '../assets/products/reviewTwo.svg'
import reviewThree from '../assets/products/reviewThree.svg'

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="mb-4">
      {review.image && (
        <img 
          src={review.image} 
          alt="Product review" 
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
    </div>
    <p className="text-gray-800 text-sm mb-4">{review.text}</p>
    <button className="border-[#00254E] border text-sm mb-4 hover:underline">Read more</button>
    <div className="text-gray-600 text-sm mb-2">
      Verified Purchase on {review.date}
    </div>
    <div className="text-gray-800 font-medium">{review.author}</div>
  </div>
);

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      image:reviewOne,
      text: "This ring is stunning beyond words. I have always wanted an asscher, but they are extremely expensive stones. Also because they face up smaller, I would never have been able to afford th...",
      date: "17/03/2022",
      author: "MKD"
    },
    {
      image: reviewTwo,
      text: "I am a repeat customer because of excellent customer service and it was a pleasant experience from ordering, to customizing my jewelry piece and to receiving my order. I highly recommend...",
      date: "21/02/2023",
      author: "Ciana"
    },
    {
      image: reviewThree,
      text: "Amazing experience working with Ankit! He was so quick to answer all my questions, picked out the best available stone for me, and everything was ready to go in two weeks. The end result...",
      date: "08/10/2023",
      author: "Eleventh"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif mb-4">Customer Reviews</h2>
        <div className="flex justify-center items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          3460+ Verified Reviews with an Average Rating of 4.98 Stars
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          <div className="md:hidden w-full">
            <ReviewCard review={reviews[currentSlide]} />
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:hidden bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:hidden bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center mt-8">
        <button className="bg-navy-900 text-white px-6 py-2 rounded text-sm hover:bg-navy-800 transition-colors">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;