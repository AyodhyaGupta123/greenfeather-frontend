import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { apiPost } from "../lib/api";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { items: cartItems, clear } = useCart();
  const { user } = useAuth();
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");

  // ✅ Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ✅ Define a complete shipping address object
  const shippingAddress = {
    fullName: user?.name || "Ankit Kumar",
    addressLine1: user?.address?.street || "123 Default Street",
    city: user?.address?.city || "New Delhi",
    postalCode: user?.address?.zipCode || "110001",
    country: user?.address?.country || "India",
  };

  const placeOrder = async () => {
    if (!cartItems.length) {
      setError("Your cart is empty. Add items before placing an order.");
      return;
    }

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setError("");
      setPlacing(true);

      // ✅ Correct structure for backend schema
      const orderItems = cartItems.map((ci) => ({
        product: ci._id || ci.id, // must be MongoDB ObjectId
        quantity: ci.quantity,
        sellingPrice: ci.price,
      }));

      // ✅ Correct order payload for your schema
      const orderData = {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalAmount: subtotal,
      };

      // ✅ Token retrieval (for secure API call)
      let token = user?.token || user?.user?.token;
      if (!token) {
        const raw = localStorage.getItem("auth");
        const parsed = raw ? JSON.parse(raw) : null;
        token = parsed?.token || parsed?.user?.token || null;
      }

      // ✅ Post to API
      await apiPost("/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      clear();
      alert("Order placed successfully!");
      navigate("/payment");
    } catch (e) {
      console.error(e);
      setError(
        e.response?.data?.message ||
          e.message ||
          "Failed to place order. Please try again."
      );
    } finally {
      setPlacing(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-green-50 p-4 sm:p-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Order Summary
        </h1>

        {cartItems.length === 0 ? (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-700 mb-4">Your cart is empty.</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="font-bold text-gray-800">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary & Actions */}
            <div className="bg-white p-6 rounded-lg shadow h-fit">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Price Details
              </h2>

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

              {/* Payment Method */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                >
                  <option value="Online Payment">Online Payment</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>

              {/* Shipping Address */}
              <div className="mt-4 text-sm text-gray-700">
                <h3 className="font-semibold mb-1">Shipping Address</h3>
                <p>{shippingAddress.fullName}</p>
                <p>{shippingAddress.addressLine1}</p>
                <p>
                  {shippingAddress.city} - {shippingAddress.postalCode}
                </p>
                <p>{shippingAddress.country}</p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-3 text-sm text-red-600">{error}</div>
              )}

              {/* Place Order Button */}
              <button
                disabled={placing}
                onClick={placeOrder}
                className={`mt-6 w-full text-white py-3 rounded-lg font-medium transition ${
                  placing
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {placing ? "Placing order..." : "Place Order"}
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrderSummary;
