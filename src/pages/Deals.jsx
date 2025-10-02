import React from "react";
import Layout from "../components/layout/Layout";

const Deals = () => {
  const blocks = [
    {
      title: "Gear up to get fit",
      rows: [
        { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2a12dd?q=80&w=800&auto=format&fit=crop", label: "Clothing" },
        { img: "https://images.unsplash.com/photo-1519861155730-9d02f04f0a3f?q=80&w=800&auto=format&fit=crop", label: "Trackers" },
        { img: "https://images.unsplash.com/photo-1517963628607-235ccdd5476d?q=80&w=800&auto=format&fit=crop", label: "Equipment" },
        { img: "https://images.unsplash.com/photo-1526401485004-2fda9f4d4753?q=80&w=800&auto=format&fit=crop", label: "Deals" },
      ],
    },
    {
      title: "Most-loved watches",
      rows: [
        { img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop", label: "Women" },
        { img: "https://images.unsplash.com/photo-1524594227085-0f0654e20314?q=80&w=800&auto=format&fit=crop", label: "Men" },
        { img: "https://images.unsplash.com/photo-1511385348-a52b4a05d57c?q=80&w=800&auto=format&fit=crop", label: "Girls" },
        { img: "https://images.unsplash.com/photo-1524594154908-edd076e4d15e?q=80&w=800&auto=format&fit=crop", label: "Boys" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid gap-6">
          {blocks.map((b, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-5">
                <h2 className="text-xl font-bold mb-4">{b.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {b.rows.map((r, i) => (
                    <div key={i} className="space-y-2">
                      <img src={r.img} alt={r.label} className="w-full h-32 object-cover rounded" />
                      <p className="text-sm text-gray-700">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Deals;


