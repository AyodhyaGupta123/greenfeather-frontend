import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; 
import Layout from "../components/layout/Layout";

const ProductList = () => {

  return (
    <Layout>
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="block  shadow-md rounded-lg p-4 hover:shadow-xl transition bg-gray-50"
          >
            <img src={product.image} alt={product.name} className="mb-4 w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-green-700 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default ProductList;
