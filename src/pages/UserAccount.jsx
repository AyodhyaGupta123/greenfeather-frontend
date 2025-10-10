import React, { useState } from "react";
import {
  User,
  Package,
  CreditCard,
  Gift,
  Star,
  Bell,
  Heart,
  LogOut,
  Edit2,
  Save,
  X,
  CheckCircle,
} from "lucide-react";
import Layout from "../components/layout/Layout";

const UserAccount = () => {
  const [user, setUser] = useState({
    name: "Ayodhya Gupta",
    firstName: "Ayodhya",
    lastName: "Gupta",
    email: "guptaayodhya359@gmail.com",
    mobile: "+919682780368",
    gender: "male",
    avatar: "https://tse4.mm.bing.net/th/id/OIP.9-f7QqWBTLMRfooMVoRENgHaHa?pid=Api&P=0&h=220",
    createdAt: "2024-01-15",
  });

  const [activeSection, setActiveSection] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    email: user.email,
    mobile: user.mobile,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({
      ...user,
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
    });
    setIsEditing(false);
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  const handleLogout = () => {
    alert("Logout functionality");
  };

  const handleViewOrders = () => {
    alert("View Orders");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {showSaveNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-bounce">
            <CheckCircle className="w-5 h-5" />
            <span>Profile updated successfully!</span>
          </div>
        )}
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
              <div className="p-6 bg-green-300 text-purple-700">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden ring-4 ring-white/30">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt="profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-700">
                      Hello,
                    </div>
                    <div className="font-bold text-lg">{user.name}</div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-3">
                <div
                  onClick={() => setActiveSection("orders")}
                  className={`mx-3 px-3 py-1 flex items-center gap-3 cursor-pointer  transition-all duration-200 ${
                    activeSection === "orders"
                      ? "bg-none text-green-800 transform scale-105 font-bold"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span className="text-sm font-bold ">MY ORDERS</span>
                </div>

                <div className="border-t mx-3 mt-3 pt-3">
                  <div className="px-4 py-2 flex items-center gap-3 text-gray-700">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold tracking-wide">
                      ACCOUNT SETTINGS
                    </span>
                  </div>

                  <div
                    onClick={() => setActiveSection("profile")}
                    className={`mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg transition-all duration-200 text-sm ${
                      activeSection === "profile"
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Profile Information
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    Manage Addresses
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    PAN Card Information
                  </div>
                </div>

                <div className="border-t mx-3 mt-3 pt-3">
                  <div className="px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-all duration-200">
                    <CreditCard className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold tracking-wide">
                      PAYMENTS
                    </span>
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 flex items-center justify-between transition-all duration-200">
                    <span>Gift Cards</span>
                    <span className="text-green-600 font-bold">₹0</span>
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    Saved UPI
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    Saved Cards
                  </div>
                </div>

                <div className="border-t mx-3 mt-3 pt-3">
                  <div className="px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-all duration-200">
                    <Gift className="w-5 h-5 text-purple-600" />
                    <span className="text-xs font-bold tracking-wide">
                      MY STUFF
                    </span>
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    My Coupons
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    My Reviews & Ratings
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    All Notifications
                  </div>
                  <div className="mx-3 px-4 py-2.5 pl-12 cursor-pointer rounded-lg hover:bg-gray-50 text-sm text-gray-600 transition-all duration-200">
                    My Wishlist
                  </div>
                </div>

                <div className="border-t mx-3 mt-3 pt-3 mb-3">
                  <div
                    onClick={handleLogout}
                    className="mx-3 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-red-50 text-red-600 rounded-lg transition-all duration-200"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-semibold">Logout</span>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="border-t p-4 bg-gray-50 text-xs text-gray-600">
                <div className="mb-2 font-bold text-gray-700">
                  Frequently Visited:
                </div>
                <div className="cursor-pointer hover:text-blue-600 transition-colors duration-200 mb-1">
                  Track Order
                </div>
                <div className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  Help Center
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-9">
              {activeSection === "profile" && (
                <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                  {/* Personal Information Section */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <User className="w-6 h-6 text-blue-600" />
                          Personal Information
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Manage your personal details
                        </p>
                      </div>
                      {!isEditing ? (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit Profile
                        </button>
                      ) : (
                        <div className="flex gap-3">
                          <button
                            onClick={handleSave}
                            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-600 text-white px-4 py-1 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                          >
                            <Save className="w-4 h-4" />
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setIsEditing(false);
                              setFormData({
                                firstName: user.firstName,
                                lastName: user.lastName,
                                gender: user.gender,
                                email: user.email,
                                mobile: user.mobile,
                              });
                            }}
                            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300 transition-all duration-200"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className={`w-full px-3 py-2 border-2 rounded-xl transition-all duration-200 ${
                            isEditing
                              ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className={`w-full px-3 py-2 border-2 rounded-xl transition-all duration-200 ${
                            isEditing
                              ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-3">
                        Your Gender
                      </div>
                      <div className="flex gap-4">
                        <label
                          className={`flex-1 flex items-center justify-center gap-3 px-3 py-2 cursor-pointer rounded-xl border-2 transition-all duration-200 ${
                            formData.gender === "male"
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="text-sm font-semibold">Male</span>
                        </label>
                        <label
                          className={`flex-1 flex items-center justify-center gap-3 px-3 py-2 cursor-pointer rounded-xl border-2 transition-all duration-200 ${
                            formData.gender === "female"
                              ? "border-pink-500 bg-pink-50 text-pink-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-5 h-5 text-pink-600"
                          />
                          <span className="text-sm font-semibold">Female</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex gap-4">
                    {/* Email Address */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-md font-semibold text-gray-800">
                          Email Address
                        </h2>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-3 py-2 border-2 rounded-xl transition-all duration-200 ${
                          isEditing
                            ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                        placeholder="Email Address"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-md font-semibold text-gray-800">
                          Mobile Number
                        </h2>
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-3 py-2 border-2 rounded-xl transition-all duration-200 ${
                          isEditing
                            ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>

                  {/* Account Details */}
                  <div className="mb-8 border-t-2 border-gray-100 pt-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">
                      Account Summary
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                        <div className="text-sm text-gray-600 mb-1">
                          Full Name
                        </div>
                        <div className="font-bold text-gray-800">
                          {user.name}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl border border-green-100">
                        <div className="text-sm text-gray-600 mb-1">Email</div>
                        <div className="font-bold text-gray-800">
                          {user.email}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-xl border border-pink-100">
                        <div className="text-sm text-gray-600 mb-1">Mobile</div>
                        <div className="font-bold text-gray-800">
                          {user.mobile}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-100">
                        <div className="text-sm text-gray-600 mb-1">
                          Member Since
                        </div>
                        <div className="font-bold text-gray-800">
                          {user.createdAt
                            ? new Date(user.createdAt).toDateString()
                            : "N/A"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t-2 border-gray-100 pt-6 flex gap-4">
                    <button className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-semibold transition-all duration-200">
                      Deactivate Account
                    </button>
                    <button className="text-red-600 hover:text-red-700 hover:underline text-sm font-semibold transition-all duration-200">
                      Delete Account
                    </button>
                  </div>
                </div>
              )}

              {activeSection === "orders" && (
                <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-6 bg-black bg-clip-text text-transparent">
                    My Orders
                  </h2>
                  <div className="text-center py-16">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Package className="w-16 h-16 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      No orders yet
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Start shopping to see your orders here
                    </p>
                    <button
                      onClick={handleViewOrders}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer text-white px-4 py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
                    >
                      Start Shopping
                    </button>
                  </div>
                </div>
              )}

              {/* Decorative Footer */}
              <div className="relative mt-6 h-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="absolute bottom-0 left-8">
                  <div
                    className="w-12 h-20 bg-white/30 rounded-full backdrop-blur-sm"
                    style={{ marginBottom: "-10px" }}
                  >
                    <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-8">
                  <div
                    className="w-12 h-20 bg-white/30 rounded-full backdrop-blur-sm"
                    style={{ marginBottom: "-10px" }}
                  >
                    <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-white text-7xl animate-pulse">✈</div>
                </div>
                <svg
                  className="absolute bottom-0 w-full"
                  viewBox="0 0 1200 80"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 Q300,20 600,50 T1200,50 L1200,80 L0,80 Z"
                    fill="white"
                    opacity="0.2"
                  />
                  <path
                    d="M0,60 Q300,30 600,60 T1200,60 L1200,80 L0,80 Z"
                    fill="white"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserAccount;
