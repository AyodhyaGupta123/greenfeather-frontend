import React from "react";
import Layout from "../components/layout/Layout";

const Shop = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 via-green-100 to-green-200 overflow-hidden pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Our <span className="text-green-700">Shop</span>
            </h1>
            <p className="mt-2 text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our curated collection of eco-friendly books. Every purchase helps plant a tree!
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="w-32 h-32 mx-auto bg-green-100 text-green-700 rounded-full flex items-center justify-center text-6xl">
            📚
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Shop Coming Soon!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're working hard to bring you an amazing collection of sustainable books. 
            Stay tuned for our launch!
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-700 hover:scale-105 transition transform duration-300">
            Notify Me When Available
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
