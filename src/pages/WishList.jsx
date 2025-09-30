import React, { useState } from "react";
import { FiTrash2, FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi"; // Added FiShare2 for summary actions
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
    <div className="min-h-screen bg-green-50 p-4 sm:p-8">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <h1 className="text-4xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
          My Wishlist
        </h1>
        <p className="text-center text-lg text-gray-500 mb-10 border-b pb-4">
          You have <strong className="font-semibold text-gray-700">{totalItems}</strong> items saved for later.
        </p>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Wishlist Items (2/3 width) */}
          <div className="lg:col-span-2 space-y-5">
            {wishlistItems.length === 0 ? (
              // Empty State (Retained professional style)
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-inner border-2 border-dashed border-gray-200">
                <FiHeart className="text-red-500 mb-4 opacity-75" size={48} />
                <p className="text-gray-600 text-xl font-medium">
                  Your Wishlist is Empty 😔
                </p>
                <p className="text-gray-400 mt-2">
                  Browse our selection and save your favorite items!
                </p>
              </div>
            ) : (
              // Item List
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100 
                             hover:shadow-xl transition-shadow duration-300"
                >
                  
                  {/* Image Container */}
                  <div className="relative w-full sm:w-40 h-40 flex-shrink-0 mb-4 sm:mb-0 mr-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Floating Trash Button (Retained clean style) */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-1 right-1 bg-white/90 rounded-full p-2 text-gray-500 shadow-md 
                                 hover:bg-red-500 hover:text-white transition"
                      title="Remove item"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>

                  {/* Details and Actions Column */}
                  <div className="flex-1 flex flex-col justify-between">
                    
                    {/* Top Section: Name, Details, Price */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Color: <span className="font-medium text-gray-700">{item.color || 'N/A'}</span>
                      </p>
                      
                      {/* Stock Status */}
                      <p className={`mt-1 text-sm font-semibold ${
                        item.inStock ? "text-green-600" : "text-red-600"
                      }`}>
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </p>
                    </div>

                    {/* Bottom Section: Price & CTA */}
                    <div className="flex items-center justify-between mt-4 border-t pt-4 border-gray-100">
                      
                      {/* Price */}
                      <p className="text-2xl font-extrabold text-gray-900">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>

                      {/* Move to Cart Button (NEW INDIGO COLOR) */}
                      <button
                        onClick={() => moveToCart(item)}
                        disabled={!item.inStock}
                        className={`px-6 py-2 flex items-center justify-center font-semibold text-sm rounded-lg transition-colors duration-200 
                                   ${item.inStock
                                     ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-200/50'
                                     : 'bg-gray-200 text-gray-500 cursor-not-allowed hover:bg-gray-300'}`}
                      >
                        <FiShoppingCart size={16} className="mr-2" />
                        {item.inStock ? 'Move to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Summary (Retained sticky professional style) */}
          <div className="lg:col-span-1">
            <div className="bg-white sticky top-8 p-6 rounded-xl shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">
                Order Preparation
              </h3>

              <div className="space-y-3">
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
                    ₹{wishlistItems.reduce((acc, item) => acc + item.price, 0).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Primary Action (Move All In Stock) - NEW INDIGO COLOR */}
              <button
                disabled={itemsInStock === 0}
                className={`mt-6 w-full flex items-center justify-center font-bold py-3 rounded-lg transition-colors duration-200 text-white shadow-xl shadow-green-200/50
                           ${itemsInStock > 0
                             ? 'bg-green-500 hover:bg-green-600'
                             : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Move {itemsInStock} Item{itemsInStock !== 1 ? 's' : ''} to Cart
              </button>

              {/* Secondary Action (Share) - Retained neutral bordered style */}
              <button
                className="mt-3 w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center"
              >
                <FiShare2 size={16} className="mr-2" />
                Share Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* --- End Main Content Grid --- */}
      </div>
    </div>
    </Layout>
  );
};

export default Wishlist;