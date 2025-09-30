import React, { useState } from "react";
import { FiTrash2, FiShoppingCart, FiHeart } from "react-icons/fi";
import Layout from "../components/layout/Layout";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White",
      price: 110000,
      image: "/imgs/cart/cart_item_1.jpeg",
      inStock: true,
      color: "White",
    },
    {
      id: 2,
      name: "Reusable Water Bottle - 1L, BPA Free",
      price: 500,
      image: "/imgs/cart/cart_item_2.jpeg",
      inStock: true,
      color: "Blue",
    },
    {
      id: 3,
      name: "Luxury Leather Office Chair - Ergonomic Design",
      price: 18500,
      image: "/imgs/cart/cart_item_3.jpeg", 
      inStock: false,
      color: "Black",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    // Logic to add to cart
    console.log(`Moved "${item.name}" to cart!`);
    removeFromWishlist(item.id);
  };

  const totalItems = wishlistItems.length;
  const itemsInStock = wishlistItems.filter(item => item.inStock).length;

  return (
    <Layout>
      <div className="min-h-screen bg-green-50">

        {/* 🔹 Banner with Background Image */}
        <div className="relative h-72 flex flex-col items-center justify-center mb-10">
          {/* Background Image */}
          <img
            src="https://media.istockphoto.com/id/2174431036/photo/colorful-pastel-colored-ornament-on-the-christmas-tree-with-bokeh-lights-background-christmas.webp?a=1&b=1&s=612x612&w=0&k=20&c=JaGSI6YxeD4zNkdarat0zx7zR3zig5NZZqfgQ5th_0g="
            alt="Wishlist Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0" />


          {/* Text Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold">
              Welcome to Your Wishlist
            </h1>
            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-500 hover:text-white transition transform hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => (window.location.href = "/cart")}
                className="px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-500 hover:text-white transition transform hover:scale-105"
              >
                Cart
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Wishlist Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left Column: Wishlist Items */}
            <div className="lg:col-span-2 space-y-6">
              {wishlistItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-inner border-2 border-dashed border-gray-200">
                  <FiHeart className="text-red-500 mb-4 opacity-80" size={48} />
                  <p className="text-gray-600 text-xl font-medium">
                    Your Wishlist is Empty 😔
                  </p>
                  <p className="text-gray-400 mt-2 text-center">
                    Browse our selection and save your favorite items!
                  </p>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row p-4 sm:p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer hover:border hover:border-green-300"
                  >
                    {/* Image */}
                    <div className="relative w-full sm:w-44 h-44 flex-shrink-0 mb-4 sm:mb-0 mr-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-2 right-2 bg-white/90 rounded-full p-2 text-gray-500 shadow-md hover:bg-red-500 hover:text-white transition"
                        title="Remove item"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Color:{" "}
                          <span className="font-medium text-gray-700">
                            {item.color || "N/A"}
                          </span>
                        </p>
                        <p
                          className={`mt-1 text-sm font-semibold ${
                            item.inStock ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>

                      {/* Price & Action */}
                      <div className="flex items-center justify-between mt-4 border-t pt-4 border-gray-100">
                        <p className="text-2xl font-extrabold text-gray-900">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                        <button
                          onClick={() => moveToCart(item)}
                          disabled={!item.inStock}
                          className={`px-6 py-1 flex items-center justify-center font-semibold text-sm rounded-xl transition transform duration-200 ${
                            item.inStock
                              ? "bg-gradient-to-r from-green-400 to-green-500 text-white hover:scale-105 shadow-lg"
                              : "bg-gray-200 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          <FiShoppingCart size={16} className="mr-2" />
                          {item.inStock ? "Move to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white sticky top-8 p-6 rounded-2xl shadow-2xl border border-gray-100 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">
                  Order Summary
                </h3>

                <div className="space-y-3 flex-1">
                  <div className="flex justify-between text-gray-600">
                    <p>Total Items in List:</p>
                    <p className="font-semibold text-gray-800">{totalItems}</p>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <p>Ready to Move:</p>
                    <p className="font-semibold text-green-600">{itemsInStock}</p>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t font-extrabold">
                    <p>Estimated Total Value:</p>
                    <p className="text-gray-900">
                      ₹
                      {wishlistItems
                        .reduce((acc, item) => acc + item.price, 0)
                        .toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
                >
                  Move item to Cart
                </button>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="mt-6 px-6 py-3 bg-white text-green-500 border border-green-500 font-semibold rounded-full shadow-lg hover:cursor-pointer hover:scale-105"
                >
                  Share Wishlist
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
