import React from "react";

const Newsletter = () => {
  return (
    <section className="py-8 px-4 bg-gray-50 text-center">
      <h2 className="text-2xl font-semibold mb-4">Be the first to see our latest designs</h2>
      <p className="text-gray-700 mb-6">Sign up for exclusive discounts and updates.</p>
      <form className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
