import React from "react";
import { motion } from "framer-motion";

const cardClass =
  "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden";

const SectionCard = ({ title, items, ctaLabel }) => {
  return (
    <div className={cardClass}>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="space-y-2">
              <img
                src={it.img}
                alt={it.label}
                className="w-full h-28 object-cover rounded"
              />
              <p className="text-sm text-gray-700">{it.label}</p>
            </div>
          ))}
        </div>
        {ctaLabel && (
          <a className="inline-block mt-4 text-sm text-blue-700 hover:underline" href="#">
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
};

const DiscoverySection = () => {
  const sections = [
    {
      title: "Get your game on",
      items: [
        {
          img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
          label: "Shop gaming",
        },
        {
          img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
          label: "PC accessories",
        },
        {
          img: "https://images.unsplash.com/photo-1585386959984-a415522316a8?q=80&w=800&auto=format&fit=crop",
          label: "Consoles",
        },
        {
          img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
          label: "Headsets",
        },
      ],
      ctaLabel: "Explore more in gaming",
    },
    {
      title: "Shop for your home essentials",
      items: [
        {
          img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=800&auto=format&fit=crop",
          label: "Cleaning Tools",
        },
        {
          img: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&w=800&auto=format&fit=crop",
          label: "Home Storage",
        },
        {
          img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop",
          label: "Home Decor",
        },
        {
          img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
          label: "Bedding",
        },
      ],
      ctaLabel: "Discover more in Home",
    },
    {
      title: "Shop Fashion for less",
      items: [
        {
          img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
          label: "Jeans under ₹999",
        },
        {
          img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
          label: "Tops under ₹799",
        },
        {
          img: "https://images.unsplash.com/photo-1520975693416-35a04f7bf0a4?q=80&w=800&auto=format&fit=crop",
          label: "Dresses under ₹1499",
        },
        {
          img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
          label: "Shoes under ₹1299",
        },
      ],
      ctaLabel: "See all deals",
    },
    {
      title: "New home arrivals under ₹999",
      items: [
        {
          img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
          label: "Kitchen & Dining",
        },
        {
          img: "https://images.unsplash.com/photo-1615529179035-df0f9b1f0a8b?q=80&w=800&auto=format&fit=crop",
          label: "Home Improvement",
        },
        {
          img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
          label: "Décor",
        },
        {
          img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
          label: "Bedding & Bath",
        },
      ],
      ctaLabel: "Shop the latest from Home",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <SectionCard title={sec.title} items={sec.items} ctaLabel={sec.ctaLabel} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverySection;


