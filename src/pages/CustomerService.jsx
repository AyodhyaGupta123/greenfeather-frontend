import React from "react";
import Layout from "../components/layout/Layout";
import { FaBox, FaCreditCard, FaUndoAlt, FaUserCog, FaQuestionCircle, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Orders",
    description: "Track, return, or cancel orders and manage delivery preferences.",
    icon: <FaBox className="text-indigo-500 w-6 h-6" />,
  },
  {
    title: "Payments",
    description: "Update payment methods, view charges, and dispute transactions.",
    icon: <FaCreditCard className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Returns & Refunds",
    description: "Start a return, check refund status, and view return policies.",
    icon: <FaUndoAlt className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Account Settings",
    description: "Change your email, password, and notification preferences.",
    icon: <FaUserCog className="text-yellow-500 w-6 h-6" />,
  },
  {
    title: "Help Topics",
    description: "Shipping rates & policies, Prime benefits, Gift cards & promotional credits, Safety & privacy.",
    icon: <FaQuestionCircle className="text-purple-500 w-6 h-6" />,
  },
  {
    title: "Contact Us",
    description: "Need more help? Reach out via chat, email, or call center.",
    icon: <FaHeadset className="text-pink-500 w-6 h-6" />,
  },
];

const CustomerService = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-2">
        <div className="container mx-auto px-4 md:px-10 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
            Customer Service
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4 space-x-3">
                  {service.icon}
                  <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description.includes(",")
                    ? service.description.split(",").map((item, idx) => (
                        <span key={idx} className="block">
                          • {item.trim()}
                        </span>
                      ))
                    : service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerService;
