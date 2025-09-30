import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const HeroSection = ({ heightClass = "h-[90vh] md:h-[80vh] w-full " }) => {
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxhdGVzdCUyMHRyYW5kJTIwZSUyMGNvbW1lcmNlJTIwaW1hZ2UlMjBjbG90aGVzJTIwbmQlMjBlbGVjdHJvbmljcyUyMHBvcnRyaWF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1681487933632-c9eda34fcaf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxsYXRlc3QlMjB0cmFuZCUyMGUlMjBjb21tZXJjZSUyMGltYWdlJTIwZWxlY3Ryb25pY3MlMjBwb3J0cmlhdGV8ZW58MHx8MHx8fDA%3D",
  ];

  return (

    <section className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 relative overflow-hidden ">
      <div className={`flex justify-center relative ${heightClass}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-[90%] h-full rounded-m overflow-hidden"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="relative">
              <motion.img
                src={src}
                alt={`Hero ${idx + 1}`}
                className="w-full h-full object-cover rounded-m mt-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-m"></div>

              <div className="absolute bottom-6 left-6 md:left-12 text-white max-w-[85%] md:max-w-lg">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl md:text-4xl font-bold "
                >
                  Discover the Latest Trends
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-2 text-sm md:text-base opacity-90"
                >
                  Shop your favorite products now
                </motion.p>
               </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </section>
  );
};

export default HeroSection;
