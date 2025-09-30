import React from "react";
import { FiPlus, FiMinus, FiTrash2, FiShare2 } from "react-icons/fi";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items: cartItems, updateQty, removeItem } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const increaseQty = (id) => updateQty(id, (cartItems.find(i => i.id === id)?.quantity || 0) + 1);

  const decreaseOrDeleteItem = (id, quantity) => {
    if (quantity <= 1) removeItem(id);
    else updateQty(id, quantity - 1);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceed = () => {
    if (!user) {
      navigate("/login", { replace: true, state: { from: { pathname: "/order-summary" } } });
      return;
    }
    navigate("/order-summary");
  };

  return (
    <Layout>
    <div className="min-h-screen  bg-green-50 p-4 sm:p-6"> 
      <h1 className="text-4xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
          Shopping Cart
        </h1>
        <p className="text-center text-lg text-gray-500 mb-10 border-b pb-4">
          You have <strong className="font-semibold text-gray-700">{3}</strong> items in your cart.
        </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"> 
        <div className="lg:col-span-2 space-y-4 sm:space-y-6"> {/* Adjusted space-y for small screens */}
          {cartItems.map((item, index) => (
          
            <div
              key={`${item.id}-${index}`} 
              className="flex flex-col sm:flex-row p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => alert(`You clicked on ${item.name}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                // The main change: control image size and ensure it's on top on mobile
                className="w-full h-auto sm:w-48 sm:h-48 object-cover rounded-lg flex-shrink-0 mb-4 sm:mb-0" 
              />

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between sm:ml-6"> {/* Removed margin-left on mobile */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Color: {item.color} | Size: {item.size}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      item.stock ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.stock ? "In stock" : "Out of stock"}
                  </p>
                </div>

                {/* Quantity & Price - Stacked vertically on very small screens for better space management */}
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
        <div className="bg-white sticky top-8 p-6 rounded-lg shadow flex flex-col justify-between h-72">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>
            <p className="text-gray-700 mb-2"></p>
            <p className="font-bold text-lg text-gray-800">
              Subtotal: ₹{totalPrice}
            </p>
            <p className="text-green-600 text-sm mt-2">
              Your order is eligible for FREE Delivery
            </p>
          </div>
          <button onClick={handleProceed} className="mt-6 w-full bg-yellow-300 hover:bg-yellow-400 text-black py-3 rounded-lg font-medium transition">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Cart;