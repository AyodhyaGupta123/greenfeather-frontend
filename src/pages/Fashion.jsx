import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Elegant Silk Dress",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Stylish Sunglasses",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Trendy Handbag",
    price: "₹2,899",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Casual Sneakers",
    price: "₹3,199",
    image:
      "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=4R8v9FUMd5nD354Osnh9VWCsJFB4GK5h3wme3Y0_tCs=",
  },
  {
    id: 6,
    name: "Luxury Watch",
    price: "₹8,999",
    image:
      "https://media.istockphoto.com/id/483718275/photo/golden-wristwatch-on-black.webp?a=1&b=1&s=612x612&w=0&k=20&c=eIA0802zbWvTJI1VIMmfKtUDYTWVUDEl7CfqiahZTC8=",
  },
];

const Fashion = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
        {/* Title Section */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Fashion Collection
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition p-3 flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="flex flex-col h-full">
                <div className="w-full h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
                <div className="mt-3 flex-grow">
                  <h3 className="text-sm font-medium text-gray-700 leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900">
                  {product.price}
                </div>
                <button className="mt-2 text-sm bg-yellow-400 text-gray-900 rounded-md py-1 hover:bg-yellow-500 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fashion;
