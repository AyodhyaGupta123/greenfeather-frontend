import React, { useState } from "react";
import {
  Lock,
  ChevronLeft,
  CreditCard,
  Smartphone,
  Building2,
  Banknote,
  Gift,
} from "lucide-react";

const PaymentPage = () => {
  const [upiId, setUpiId] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-5">
      <div className="max-w-7xl mx-auto bg-white  shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 ">
          <div className="flex items-center gap-3">
            <ChevronLeft className="w-5 h-5 text-blue-600 cursor-pointer" />
            <h1 className="text-lg font-semibold text-gray-900">
              Complete Payment
            </h1>
          </div>
          <div className="flex items-center gap-1 text-gray-700 text-sm">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="font-medium">Secure Payment</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 p-6">
          <div className="flex-1 max-w-md">
            <div className="border border-gray-200 rounded-xl p-4 mb-3 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-1">
                <Smartphone className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">UPI</span>
              </div>
              <p className="text-xs text-gray-600 ml-8">Pay by any UPI app</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 mb-3 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-1">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Credit / Debit / ATM Card
                </span>
              </div>
              <p className="text-xs text-gray-600 ml-8">
                Add and secure cards as per RBI guidelines
              </p>
              <p className="text-xs text-green-600 ml-8 mt-1">
                Save up to ₹750 • 3 offers available
              </p>
            </div>

            {/* EMI Option */}
            <div className="border border-gray-200 rounded-xl p-4 mb-3 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-1">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 10h18M7 14h.01M11 14h.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">EMI</span>
              </div>
              <p className="text-xs text-gray-600 ml-8">
                Get Debit and Cardless EMIs on HDFC Bank
              </p>
            </div>

            {/* Net Banking Option */}
            <div className="border border-gray-200 rounded-xl p-4 mb-3 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-medium text-gray-900">
                  Net Banking
                </span>
              </div>
            </div>

            {/* Cash on Delivery Option */}
            <div className="border border-gray-200 rounded-xl p-4 mb-3 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-1">
                <Banknote className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Cash on Delivery
                </span>
              </div>
              <p className="text-xs text-gray-600 ml-8">
                Pay ₹1,249 as advance and rest on delivery
              </p>
            </div>

            {/* Gift Card Option */}
            <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  Have a Gift Card?
                </span>
              </div>
            </div>
          </div>

          {/* Center - UPI Form */}
          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-200 p-6 relative shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-sm text-gray-900 flex-1 font-medium">
                Add new UPI ID
              </span>
              <a
                href="#"
                className="text-xs text-blue-600 hover:underline"
              >
                How to find?
              </a>
            </div>

            {/* UPI Input */}
            <div className="mb-5">
              <label className="block text-sm text-gray-800 mb-2">UPI ID</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600"
                />
                <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 shadow-md">
                  Verify
                </button>
              </div>
            </div>

            {/* Pay Button */}
            <button
              className="w-full py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded text-sm cursor-not-allowed"
              disabled
            >
              Pay ₹4,598
            </button>
          </div>

          {/* Right Side - Price Details */}
          <div className="w-full lg:w-72">
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 shadow-sm">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Price (6 items)</span>
                  <span>₹4,591</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Platform Fee</span>
                  <span>₹7</span>
                </div>
                <div className="border-t border-gray-200 my-3"></div>
                <div className="flex justify-between font-medium text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-blue-600 font-semibold">₹4,598</span>
                </div>
              </div>

              {/* Discount Section */}
              <div className="bg-green-50 border border-green-100 rounded p-3">
                <p className="text-xs text-green-700 font-medium mb-1">
                  10% instant discount
                </p>
                <p className="text-xs text-green-600">Claim now with offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PaymentPage;
