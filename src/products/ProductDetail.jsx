import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import Layout from "../components/layout/Layout";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-red-600">Product not found!</h2>
        <Link
          to="/products"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <Layout>
    <div className="containe  py-10  bg-gradient-to-r from-green-100 via-green-50 to-green-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-between items-start mx-16">
          <img
            src={product.image}
            alt={product.name}
            className="w-full mt-5 h-96 object-cover shadow"
          />
        </div>

        {/* Product Details */}
        <div className=" mt-5 justify-around">
          <h1 className="text-4xl  font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg mt-4">{product.description}</p>
          <p className="text-2xl text-blue-600 font-semibold mt-6">
            ₹{product.price}
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Add to Cart
          </button>

          <div className="mt-6">
            <Link
              to="/products"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProductDetail;
