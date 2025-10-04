import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Stainless Steel Cookware Set",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1600181951920-7e3b1e46b4d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Non-stick Frying Pan",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Electric Kettle",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1580734073657-7c4d9b9c5b22?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Wooden Cutting Board",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1600185366320-f8578d2a58c8?auto=format&fit=crop&w=800&q=80",
  },
   {
    id: 5,
    name: "Wooden Cutting Board",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1600185366320-f8578d2a58c8?auto=format&fit=crop&w=800&q=80",
  },
];

const HomeKitchen = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Home & Kitchen Collection
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition p-3 flex flex-col"
            >
              <Link to={`/products/${product.id}`} className="flex flex-col h-full">
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

export default HomeKitchen;
