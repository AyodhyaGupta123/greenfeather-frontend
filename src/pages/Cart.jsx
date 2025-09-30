import React, { useState } from "react";
import { FiPlus, FiMinus, FiTrash2, FiShare2 } from "react-icons/fi";
import Layout from "../components/layout/Layout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White",
      price: 110000,
      quantity: 1,
      image: "/imgs/cart/cart_item_1.jpeg",
      size: "A5",
      stock: true,
    },
    {
      id: 2,
      name: "Reusable Water Bottle - 1L, BPA Free",
      price: 500,
      quantity: 2,
      image: "/imgs/cart/cart_item_2.jpeg",
      color: "Green",
      size: "1L",
      stock: true,
    },
    {
      id: 3,
      name: "Smart Watch Series 8",
      price: 25000,
      quantity: 1,
      image: "/imgs/cart/cart_item_3.jpeg",
      color: "Green",
      size: "1L",
      stock: true,
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseOrDeleteItem = (id, quantity) => {
    if (quantity <= 1) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="min-h-screen bg-green-50">
        {/* 🔹 Banner with Background Image */}
        <div className="relative h-72 flex flex-col items-center justify-center mb-10">
          {/* Background Image */}
          <img
            src="https://plus.unsplash.com/premium_photo-1681398745480-151fc6addaaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjBjYXJ0JTIwYmFubmVyfGVufDB8fDB8fHww"
            alt="Cart Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-black/0" />


          {/* Text Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold">
              Welcome to Your Shopping Cart
            </h1>
            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-500 hover:text-white transition transform hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => (window.location.href = "/wishlist")}
                className="px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-500 hover:text-white transition transform hover:scale-105"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Cart Content */}
        <div className="p-4 sm:p-6">
          <p className="text-center text-lg text-gray-600 mb-10 border-b pb-4">
            You have{" "}
            <strong className="font-semibold text-gray-700">
              {cartItems.length}
            </strong>{" "}
            items in your cart.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex flex-col sm:flex-row p-4 sm:p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer hover:border hover:border-green-300 transition"
                  onClick={() => alert(`You clicked on ${item.name}`)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto sm:w-48 sm:h-48 object-cover rounded-lg flex-shrink-0 mb-4 sm:mb-0"
                  />

                  <div className="flex-1 flex flex-col justify-between sm:ml-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-3">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Color: {item.color || "N/A"} | Size: {item.size}
                      </p>
                      <p
                        className={`mt-1 text-sm ${
                          item.stock ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {item.stock ? "In stock" : "Out of stock"}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            decreaseOrDeleteItem(item.id, item.quantity);
                          }}
                          className={`px-3 py-1 border rounded-lg ${
                            item.quantity === 1
                              ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                              : "border-green-300 text-gray-800 hover:bg-green-100"
                          } transition`}
                        >
                          {item.quantity === 1 ? <FiTrash2 /> : <FiMinus />}
                        </button>
                        <span className="px-3 font-medium">{item.quantity}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            increaseQty(item.id);
                          }}
                          className="px-3 py-1 border border-green-300 rounded-lg text-gray-800 hover:bg-green-100 transition"
                        >
                          <FiPlus />
                        </button>

                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1 hover:bg-blue-100 transition flex items-center rounded-lg border border-blue-200"
                        >
                          <FiShare2 className="mr-1" />
                        </button>
                      </div>

                      <p className="font-bold text-lg text-gray-800 whitespace-nowrap sm:ml-4">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary */}
            <div className="bg-white sticky top-8 p-6 rounded-xl shadow flex flex-col justify-between h-72">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Order Summary
                </h3>
                <p className="font-bold text-lg text-gray-800">
                  Subtotal: ₹{totalPrice.toLocaleString("en-IN")}
                </p>
                <p className="text-green-600 text-sm mt-2">
                  Your order is eligible for FREE Delivery
                </p>
              </div>
              <button
                onClick={() => (window.location.href = "/")}
                className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
