import React from "react";
import { Link } from "react-router-dom";

const cardClass =
  "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden";

const SectionCard = ({ title, items, ctaLabel }) => {
  return (
    <div className={cardClass}>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {items.map((it, idx) => (
            <Link key={idx} to={`/products?search=${encodeURIComponent(it.label)}`} className="space-y-2">
              <img
                src={it.img}
                alt={it.label}
                className="w-full h-28 object-cover rounded transform transition-transform duration-300 hover:scale-105"
              />
              <p className="text-sm text-gray-700">{it.label}</p>
            </Link>
          ))}
        </div>
        {ctaLabel && (
          <Link
            className="inline-block mt-4 text-sm text-blue-700 hover:underline"
            to={`/products?search=${encodeURIComponent(title)}`}
          >
            {ctaLabel}
          </Link>
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
          img: "https://images.unsplash.com/photo-1592839719941-8e2651039d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbnNvbGVzfGVufDB8fDB8fHww",
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
          img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xlYW5pbmclMjBUb29sc3xlbnwwfHwwfHx8MA%3D%3D",
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
      title: "Shop for your home essentials",
      items: [
        {
          img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xlYW5pbmclMjBUb29sc3xlbnwwfHwwfHx8MA%3D%3D",
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
          img: "https://images.unsplash.com/photo-1592839719941-8e2651039d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbnNvbGVzfGVufDB8fDB8fHww",
          label: "Consoles",
        },
        {
          img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
          label: "Headsets",
        },
      ],
      ctaLabel: "Explore more in gaming",
    },
    // ...add other sections similarly
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((sec, idx) => (
          <SectionCard
            key={idx}
            title={sec.title}
            items={sec.items}
            ctaLabel={sec.ctaLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscoverySection;
