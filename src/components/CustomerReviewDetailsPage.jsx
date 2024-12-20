import React from "react";

const reviews = [
  {
    id: 1,
    name: "Kara",
    date: "04/29/2024",
    rating: 5,
    title: "Exactly As Pictured",
    content: "Beautiful ring! Exactly as pictured",
    reply: "Thank you for your review! We're glad the ring met your expectations. Enjoy your beautiful new piece!"
  }
];

const CustomerReviews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Customer Reviews</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-6">
        <div className="text-center md:text-left">
          <p className="text-5xl font-bold">5.0</p>
          <p className="text-sm">Total 1 Reviews</p>
        </div>
        <div className="flex-1 md:ml-8">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <span className="w-16">{star} Star</span>
              <div className="flex-1 bg-gray-200 h-2 mx-2 rounded">
                <div className="bg-yellow-400 h-2 rounded" style={{ width: star === 5 ? "100%" : "0%" }}></div>
              </div>
              <span>{star === 5 ? "1" : "0"}</span>
            </div>
          ))}
        </div>
        <button className="text-black px-4 py-2 rounded-md text-sm mt-4 md:mt-0 border-[black] border-2 ml-5">
          Write a Review
        </button>
      </div>

      <div>
        <div className="border-b pb-4 mb-6 flex justify-between">
          <div>
            <span className="font-bold">Reviews ({reviews.length})</span>
            <span className="ml-4 text-gray-500">QA (0)</span>
          </div>
          <div>
            <label htmlFor="sort" className="text-sm mr-2">Sort by:</label>
            <select id="sort" className="border rounded-md p-1 text-sm">
              <option>Most Recent</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
            </select>
          </div>
        </div>

        {reviews.map((review) => (
          <div key={review.id} className="mb-6">
            <div className="flex items-center space-x-2">
              <p className="font-bold">{review.name}</p>
              <span className="text-green-600 font-semibold">&#10003;</span>
              <p className="text-gray-500 text-sm">{review.date}</p>
            </div>
            <div className="mt-2">
              <div className="flex items-center">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="font-semibold mt-2">{review.title}</p>
              <p className="mt-1">{review.content}</p>
            </div>
            {review.reply && (
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <p className="font-bold text-sm">Aureum's Reply</p>
                <p className="text-sm mt-2">{review.reply}</p>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <button className="text-blue-600">Previous</button>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-blue-600 text-white rounded-md">1</button>
          </div>
          <button className="text-blue-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
