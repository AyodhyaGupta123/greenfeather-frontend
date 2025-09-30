import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      _id: "1",
      name: "Eco-friendly Tote Bag",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1605050714263-e8b7d424d945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxFY28lMjBmcmllbmRseSUyMFRvdGUlMjBCYWclMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      _id: "2",
      name: "Reusable Water Bottle",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1628582357531-3da2e5a05875?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxXYXRlciUyMEJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: "3",
      name: "Latest iPhone",  
      price: 59999,
      image:
        "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SXBob25lfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-100 via-green-50 to-green-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Handpicked items just for you – eco-friendly and sustainable
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-md mb-4 font-semibold">
                  ₹{product.price.toLocaleString()}
                </p>

                <div className="flex justify-center gap-10">
                  <button className="flex items-center justify-center gap-1 px-4 py-1.5 cursor-pointer text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300">
                    <Plus size={16} />
                    Add
                  </button>

                  <button className="flex items-center justify-center gap-1 px-4 py-1.5 cursor-pointer text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all duration-300">
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
