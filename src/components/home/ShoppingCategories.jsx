import React from "react";
import { Link } from "react-router-dom";

const cardClass =
  "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden";

const SectionCard = ({ title, items, ctaLabel }) => {
  return (
    <div className={cardClass}>
      <div className="p-5 bg-gray-50">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <Link key={idx} to={`/products?search=${encodeURIComponent(item.label)}`} className="space-y-2">
              <div className={item.bgClass || ""}>
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-28 object-cover rounded transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-sm text-gray-700 text-center">{item.label}</p>
            </Link>
          ))}
        </div>
        {ctaLabel && (
          <Link
            to={`/products?search=${encodeURIComponent(title)}`}
            className="inline-block mt-4 text-sm text-teal-700 hover:text-orange-700 hover:underline"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

const ShoppingCategories = () => {
  const sections = [
    {
      title: "Most-loved travel essentials",
      items: [
        {
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
          label: "Backpacks",
        },
        {
          image:
            "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
          label: "Suitcases",
        },
        {
          image:
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
          label: "Accessories",
        },
        {
          image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
          label: "Handbags",
        },
      ],
      ctaLabel: "Discover more in Travel",
    },
    {
      title: "Gear up to get fit",
      items: [
        {
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          label: "Clothing",
        },
        {
          image:
            "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
          label: "Trackers",
        },
        {
          image:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
          label: "Equipment",
        },
        {
          image:
            "https://images.unsplash.com/photo-1624192647570-1131acc12ccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERlYWxzfGVufDB8fDB8fHww",
          label: "Deals",
        },
      ],
      ctaLabel: "Explore Fitness Gear",
    },
    {
      title: "Elevate your Electronics",
      items: [
        {
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
          label: "Headphones",
        },
        {
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
          label: "Tablets",
        },
        {
          image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
          label: "Gaming",
        },
        {
          image:
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
          label: "Speakers",
        },
      ],
      ctaLabel: "Shop Electronics",
    },
    {
      title: "Level up your beauty routine",
      items: [
        {
          image:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
          label: "Makeup",
        },
        {
          image:
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
          label: "Brushes",
        },
        {
          image:
            "https://media.istockphoto.com/id/2189054073/photo/rectangular-cleaning-sponge-isolated-gray.webp?a=1&b=1&s=612x612&w=0&k=20&c=UMCPyAUSzIMw-Oa2sb5OikLFPCgw6M0h2HqQC5A_ovQ=",
          label: "Sponges",
        },
        {
          image:
            "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
          label: "Mirrors",
        },
      ],
      ctaLabel: "See more in Beauty",
    },
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

export default ShoppingCategories;
