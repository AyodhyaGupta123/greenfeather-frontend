import React, { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const HeroSection = ({ heightClass = "h-[100vh] w-full" }) => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultBanners = [
    {
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
      title: "Discover the Latest Trends",
      subtitle: "Upgrade your lifestyle with our premium collections, handpicked for you.",
      ctaText: "Shop Now",
      ctaLink: "/shop",
    },
  ];

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await apiGet("/api/hero");
        if (mounted) setBanners(Array.isArray(data) ? data : []);
      } catch {
        if (mounted) setBanners([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        className={`w-full ${heightClass}`}
      >
        {(loading ? defaultBanners : (banners.length ? banners : defaultBanners)).map((item, idx) => (
          <SwiperSlide key={idx} className="relative">
            <motion.img
              src={item.imageUrl}
              alt={`Hero ${idx + 1}`}
              className="w-full h-full object-cover object-top"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 text-white">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
              >
                {item.title || "Discover the Latest Trends"}
              </motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 text-sm md:text-lg opacity-90 max-w-xl"
              >
                {item.subtitle || "Upgrade your lifestyle with our premium collections, handpicked for you."}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-6 flex gap-4"
              >
                {item.ctaLink && (
                  <a href={item.ctaLink} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
                    {item.ctaText || "Shop Now"}
                  </a>
                )}
                <button className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition">
                  Explore Collection
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
