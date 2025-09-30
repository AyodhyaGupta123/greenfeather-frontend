import React, { useState } from "react";
import { FiUser, FiCreditCard, FiGift, FiHome, FiChevronDown } from "react-icons/fi";
import Layout from "../components/layout/Layout";

const ProfileDashboard = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const user = {
    firstName: "Himanshu",
    lastName: "Chaurasiya",
    email: "chaurasiyahimanshu2002@gmail.com",
    phone: "+918103306133",
    gender: "Male",
    avatar: "/imgs/profile/himanshu.jpg",
  };

  const menu = [
    { section: "My Orders", items: [{ name: "Order History", icon: <FiHome /> }] },
    {
      section: "Account Settings",
      items: [
        { name: "Profile Information", icon: <FiUser /> },
        { name: "Manage Addresses", icon: <FiUser /> },
        { name: "PAN Card Information", icon: <FiUser /> },
      ],
    },
    {
      section: "Payments",
      items: [
        { name: "Gift Cards", icon: <FiGift />, value: "₹0" },
        { name: "Saved UPI", icon: <FiCreditCard /> },
        { name: "Saved Cards", icon: <FiCreditCard /> },
      ],
    },
  ];

  const faqs = [
    {
      question: "What happens when I update my email address (or mobile number)?",
      answer:
        "Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).",
    },
    {
      question:
        "When will my Flipkart account be updated with the new email address (or mobile number)?",
      answer:
        "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.",
    },
    {
      question:
        "What happens to my existing Flipkart account when I update my email address (or mobile number)?",
      answer:
        "Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.",
    },
    {
      question:
        "Does my Seller account get affected when I update my email address?",
      answer:
        "Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen flex bg-green-100">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-lg p-6 space-y-8 flex flex-col">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-24 h-24 pt-2 rounded-full object-cover shadow-md"
            />
            <p className="text-gray-500 mt-2 text-sm">Hello,</p>
            <p className="font-semibold text-gray-900 text-lg">{`${user.firstName} ${user.lastName}`}</p>
          </div>

          <div className="space-y-6">
            {menu.map((section, idx) => (
              <div key={idx}>
                <p className="text-gray-400 uppercase text-xs mb-2">{section.section}</p>
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <button
                      key={i}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {item.value && (
                        <span className="text-green-600 font-semibold">{item.value}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 space-y-8">
          {/* Personal Info Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                    <button className="text-green-600 font-semibold hover:underline">Edit</button>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        value={user.firstName}
                        readOnly
                        className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                    <input
                        type="text"
                        value={user.lastName}
                        readOnly
                        className="border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                    </div>

                    {/* Gender */}
                    <div>
                    <label className="block text-gray-500 mb-1 font-medium">Gender</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-gray-700">
                        <input type="radio" checked={user.gender === "Male"} disabled className="accent-green-500" /> Male
                        </label>
                        <label className="flex items-center gap-2 text-gray-700">
                        <input type="radio" checked={user.gender === "Female"} disabled className="accent-green-500" /> Female
                        </label>
                    </div>
                    </div>

                    {/* Email */}
                    <div>
                    <label className="block text-gray-500 mb-1 font-medium">Email Address</label>
                    <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="border border-gray-200 rounded-lg px-4 py-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                    </div>

                    {/* Mobile */}
                    <div>
                    <label className="block text-gray-500 mb-1 font-medium">Mobile Number</label>
                    <input
                        type="text"
                        value={user.phone}
                        readOnly
                        className="border border-gray-200 rounded-lg px-4 py-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                    </div>
                </div>
                </div>


          {/* FAQs Accordion */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">FAQs</h2>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    {faq.question}
                    <FiChevronDown
                      className={`transition-transform ${
                        openFaq === idx ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 py-3 text-gray-500 text-sm border-t border-gray-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Account Actions</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 border border-red-500 text-red-500 px-4 py-3 rounded-lg hover:bg-red-50 font-semibold transition">
                Deactivate Account
              </button>
              <button className="flex-1 border border-gray-500 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 font-semibold transition">
                Delete Account
              </button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ProfileDashboard;
