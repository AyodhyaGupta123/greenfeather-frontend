import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";

const FeaturedProducts = () => {
  const products = [
    {
      _id: "1",
      name: "Eco-friendly Tote Bag",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1605050714263-e8b7d424d945?w=600&auto=format&fit=crop&q=60",
    },
    {
      _id: "2",
      name: "Reusable Water Bottle",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1628582357531-3da2e5a05875?w=600&auto=format&fit=crop&q=60",
    },
    {
      _id: "3",
      name: "Latest iPhone",
      price: 59999,
      image:
        "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60",
    },
  ];

  const { addItem } = useCart();

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <p className="mt-2 text-gray-500 text-lg">
            Handpicked eco-friendly items for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  New
                </span>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-green-600 text-xl font-bold mb-4">
                  ₹{product.price.toLocaleString()}
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    onClick={() => addItem({ id: product._id, name: product.name, price: product.price, image: product.image })}
                  >
                    <Plus size={16} />
                    Add
                  </button>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition">
                    <ShoppingCart size={16} />
                    Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
