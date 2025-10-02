import React from "react";
import Layout from "../components/layout/Layout";

const GridCard = ({ title, items }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="space-y-2">
            <img src={it.img} alt={it.label} className="w-full h-32 object-cover rounded" />
            <p className="text-sm text-gray-700">{it.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Trends = () => {
  const sections = [
    {
      title: "Fashion trends you like",
      items: [
        { img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", label: "Dresses" },
        { img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop", label: "Knits" },
        { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", label: "Jackets" },
        { img: "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=800&auto=format&fit=crop", label: "Jewelry" },
      ],
    },
    {
      title: "Refresh your space",
      items: [
        { img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop", label: "Dining" },
        { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop", label: "Home" },
        { img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=800&auto=format&fit=crop", label: "Kitchen" },
        { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", label: "Health & Beauty" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid gap-6">
          {sections.map((s, i) => (
            <GridCard key={i} title={s.title} items={s.items} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Trends;


