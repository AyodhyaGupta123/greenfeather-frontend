import React from "react";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const DealsOffers = () => {
  const deals = [
    {
      _id: "1",
      title: "Festive Mega Sale",
      discount: "50% OFF",
      description: "Grab the best eco-friendly products at half price!",
      image: "https://media.istockphoto.com/id/1146494770/photo/mega-sale-template-with-tropical-leaves-on-black-background.jpg?s=612x612&w=0&k=20&c=e5lcr4zg2QuYnitlYLF56t970ZRnGnzEruc_SOeqRGI=",
      button: "Shop Now",
    },
    {
      _id: "2",
      title: "Limited Time Offer",
      discount: "Buy 1 Get 1 Free",
      description: "On selected reusable items. Don’t miss out!",
      image: "https://media.istockphoto.com/id/1446384594/photo/round-gold-podium-decorated-with-gold-and-black-balloons-on-an-abstract-gold-background.jpg?s=612x612&w=0&k=20&c=LV_u-7wFOL-IylaNAz14lXClwxRReAeEFcOj73mY5fo=",
      button: "Grab Deal",
    },
    {
      _id: "3",
      title: "Weekend Special",
      discount: "Flat 30% OFF",
      description: "Exclusive discounts on water bottles and tote bags.",
      image: "https://images.unsplash.com/photo-1656230776393-584a2cd2a13b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExpbWl0ZWQlMjBUaW1lJTIwT2ZmZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      button: "Explore",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-green-100 to-green-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Deals & <span className="text-green-600">Offers</span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Limited time sales and discounts you can’t miss
          </p>
        </div>

        {/* Cards Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal._id}
              className="relative overflow-hidden shadow-lg rounded-x"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Full Image */}
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-lg">
                    {deal.discount}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p className="mb-4">{deal.description}</p>
                <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium transition rounded-md">
                  {deal.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsOffers;
