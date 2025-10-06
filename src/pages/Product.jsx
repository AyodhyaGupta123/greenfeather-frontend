import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const topicToImage = {
  watch: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop",
  phone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop",
  laptop: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop",
  shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop",
};

const capitalize = (s = "") => s.charAt(0).toUpperCase() + s.slice(1);

const Product = () => {
  const { topic = "watch" } = useParams();
  const title = capitalize(topic);
  const image = topicToImage[topic.toLowerCase()] || topicToImage.watch;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>

          {/* Single product teaser without price */}
          <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 flex items-center justify-center bg-gray-50">
                <img src={image} alt={title} className="w-full h-80 object-contain" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 mb-6">
                  Explore the latest {title} collection with hundreds of options. Click below to see
                  all related products.
                </p>
                <Link
                  to={`/products?search=${encodeURIComponent(topic)}`}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Explore {title}s
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            Tip: On the products page, use the sidebar filters to refine by brand, price, and more.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;


