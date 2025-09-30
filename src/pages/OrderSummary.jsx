import React from "react";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const { items: cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="min-h-screen bg-green-50 p-4 sm:p-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Order Summary
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="font-bold text-gray-800">₹{item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Price Details</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Delivery</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t mt-3 pt-3 flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSummary;


