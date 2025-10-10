import React from "react";
import { FiPlus, FiMinus, FiTrash2, FiShare2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
  const { items: cartItems, updateQty, removeItem, getTotal, getTotalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const increaseQty = (uniqueId) => {
    const item = cartItems.find((i) => i.uniqueId === uniqueId);
    if (item) updateQty(uniqueId, item.quantity + 1);
  };

  const decreaseOrDeleteItem = (uniqueId, quantity) => {
    if (quantity <= 1) {
      removeItem(uniqueId);
    } else {
      updateQty(uniqueId, quantity - 1);
    }
  };

  const handleProceed = () => {
    if (!user) {
      navigate("/login", { replace: true, state: { from: { pathname: "/order-summary" } } });
      return;
    }
    navigate("/order-summary");
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-green-50 p-4 sm:p-6">
        <h1 className="text-4xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
          Shopping Cart
        </h1>
        <p className="text-center text-lg text-gray-500 mb-10 border-b pb-4">
          You have <strong className="font-semibold text-gray-700">{getTotalItems()}</strong> items in your cart.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.uniqueId}
                className="flex flex-col sm:flex-row p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <Link to={`/products/${item.id}`} state={{ product: item }} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto sm:w-48 sm:h-48 object-cover rounded-lg mb-4 sm:mb-0 hover:opacity-90 transition"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between sm:ml-6">
                  <div>
                    <Link to={`/products/${item.id}`} state={{ product: item }}>
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-3 hover:text-green-600 transition">
                        {item.name}
                      </h3>
                    </Link>

                    <div className="flex gap-2 text-sm text-gray-600 mt-2">
                      {item.color && <span>Color: {item.color}</span>}
                      {item.size && <span>| Size: {item.size}</span>}
                    </div>

                    {item.brand && (
                      <p className="text-sm text-gray-600 mt-1">Brand: {item.brand}</p>
                    )}

                    <p className={`mt-1 text-sm font-medium ${item.stock !== false ? "text-green-600" : "text-red-500"}`}>
                      {item.stock !== false ? "In stock" : "Out of stock"}
                    </p>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          decreaseOrDeleteItem(item.uniqueId, item.quantity);
                        }}
                        className={`px-3 py-1 border rounded-lg transition ${item.quantity === 1 ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white" : "border-green-300 text-gray-800 hover:bg-green-100"}`}
                        title={item.quantity === 1 ? "Remove item" : "Decrease quantity"}
                      >
                        {item.quantity === 1 ? <FiTrash2 /> : <FiMinus />}
                      </button>

                      <span className="px-3 font-medium">{item.quantity}</span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          increaseQty(item.uniqueId);
                        }}
                        className="px-3 py-1 border border-green-300 rounded-lg text-gray-800 hover:bg-green-100 transition"
                        title="Increase quantity"
                      >
                        <FiPlus />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="px-3 py-1 hover:bg-blue-100 transition flex items-center rounded-lg border border-blue-200"
                        title="Share this product"
                      >
                        <FiShare2 className="mr-1" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-xl text-gray-800">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                      <p className="text-xs text-gray-500">₹{item.price.toLocaleString("en-IN")} each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="bg-white sticky top-8 p-6 rounded-lg shadow flex flex-col justify-between h-fit">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Items ({cartItems.length})</span>
                  <span className="font-semibold">₹{getTotal().toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>

                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{getTotal().toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <p className="text-green-600 text-sm mt-2">Your order is eligible for FREE Delivery</p>
            </div>

            <button
              onClick={handleProceed}
              className="mt-6 w-full bg-yellow-300 hover:bg-yellow-400 text-black py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg"
            >
              Proceed to Buy
            </button>

            <Link to="/products" className="mt-3 block text-center text-green-600 hover:text-green-700 text-sm font-medium">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
