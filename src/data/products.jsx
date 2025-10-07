const products = [
  // ================================
  // ELECTRONICS
  // ================================
  {
    id: 1,
    name: "Smartphone",
    price: 499,
    colors: ["Black", "White", "Blue", "Red"],
    category: "Electronics",
    brand: "TechBrand",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1707438095940-1eee18e85400?w=600",
    description: "Latest smartphone with high-end specs."
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    colors: ["Silver", "Gray", "Black"],
    category: "Electronics",
    brand: "CompTech",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600",
    description: "High performance laptop for work and gaming."
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 199,
    colors: ["Black", "White", "Blue", "Red"],
    category: "Electronics",
    brand: "WristTech",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=600",
    description: "Stylish smartwatch with fitness tracking."
  },
  {
    id: 4,
    name: "Headphones",
    price: 149,
    colors: ["Black", "White", "Blue"],
    category: "Electronics",
    brand: "SoundMax",
    rating: 4.6,
    image: "https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?w=600",
    description: "Noise-cancelling over-ear headphones."
  },
  {
    id: 5,
    name: "Camera",
    price: 699,
    colors: ["Black", "White", "Blue", "Red"],
    category: "Electronics",
    brand: "PhotoPro",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600",
    description: "High-resolution DSLR camera."
  },

  // ================================
  // FASHION
  // ================================
  {
    id: 6,
    name: "Men's T-Shirt",
    price: 29,
    colors: ["Black", "White", "Blue"],
    category: "Fashion",
    brand: "StyleWear",
    rating: 4.3,
    image: "https://media.istockphoto.com/id/1138400603/photo/t-shirt-design-and-people-concept-close-up-of-young-man-in-blank-white-t-shirt-shirt-front.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eiy_2uk-rLjq-IOr4pGjEReG-mZsZbLC4Hlx8I4-kI4=",
    description: "Comfortable cotton t-shirt for daily wear."
  },
  {
    id: 7,
    name: "Women's Dress",
    price: 59,
    colors: ["Red", "Pink", "Blue"],
    category: "Fashion",
    brand: "GlamTrend",
    rating: 4.6,
    image: "https://media.istockphoto.com/id/2160248204/photo/portrait-of-attractive-pretty-person-excitement-wear-vintage-isolated-on-yellow-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=8_hYTrUiGzDd1uiZl8iLq_Li6-_TxkIXjO_pkAg-eyU=",
    description: "Elegant evening dress for special occasions."
  },
  {
    id: 8,
    name: "Jeans",
    price: 49,
    colors: ["Blue", "Black"],
    category: "Fashion",
    brand: "DenimX",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmVhbnN8ZW58MHx8MHx8fDA%3D",
    description: "Slim-fit stretchable denim jeans."
  },
  {
    id: 9,
    name: "Sneakers",
    price: 79,
    colors: ["White", "Black", "Gray"],
    category: "Fashion",
    brand: "UrbanStep",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1464043502/photo/happy-woman-looking-for-new-sneakers-while-shopping-at-the-mall.webp?a=1&b=1&s=612x612&w=0&k=20&c=tMPaw5css_Sq2kT65O8p48O9K-pagzv6NiBzhCsHsIw=",
    description: "Comfortable sneakers for all-day wear."
  },
  {
    id: 10,
    name: "Wrist Watch",
    price: 149,
    colors: ["Black", "Silver"],
    category: "Fashion",
    brand: "Timely",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543956872-37cfc5474a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdyaXN0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
    description: "Stylish analog watch with leather strap."
  },

  // ================================
  // HOME & KITCHEN
  // ================================
  {
    id: 11,
    name: "Blender",
    price: 59,
    colors: ["White", "Silver"],
    category: "Home & Kitchen",
    brand: "HomeEase",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Powerful blender for smoothies and shakes."
  },
  {
    id: 12,
    name: "Air Fryer",
    price: 129,
    colors: ["Black", "White"],
    category: "Home & Kitchen",
    brand: "CrispyCook",
    rating: 4.6,
    image: "https://media.istockphoto.com/id/1363719703/photo/air-fryer.webp?a=1&b=1&s=612x612&w=0&k=20&c=XIEhb3n144bmDEi2WWiEdj9Hy-id06-ZDZ8XUQ3SleY=",
    description: "Oil-free air fryer for healthy cooking."
  },
  {
    id: 13,
    name: "Cookware Set",
    price: 199,
    colors: ["Silver"],
    category: "Home & Kitchen",
    brand: "ChefMaster",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/1223414833/photo/clean-saucepan-on-a-gas-stove-in-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=GV-EQ2zWu7SC4KIpw-mUYFTg_ykki-B-tTaNyfNi-Ts=",
    description: "Non-stick stainless steel cookware set."
  },
  {
    id: 14,
    name: "Vacuum Cleaner",
    price: 159,
    colors: ["Red", "Gray"],
    category: "Home & Kitchen",
    brand: "CleanPro",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600",
    description: "Powerful vacuum cleaner for home use."
  },

  // ================================
  // BEAUTY & PERSONAL CARE
  // ================================
  {
    id: 15,
    name: "Hair Dryer",
    price: 49,
    colors: ["Pink", "Black"],
    category: "Beauty",
    brand: "StylePro",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1620331313174-3c6cfd5e292a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhhaXIlMjBEcnllcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Fast-drying hair dryer with heat protection."
  },
  {
    id: 16,
    name: "Face Cream",
    price: 25,
    colors: ["White"],
    category: "Beauty",
    brand: "GlowSkin",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmFjZSUyMENyZWFtfGVufDB8fDB8fHww",
    description: "Moisturizing face cream for glowing skin."
  },
  {
    id: 17,
    name: "Perfume",
    price: 89,
    colors: ["Transparent"],
    category: "Beauty",
    brand: "AromaLux",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Long-lasting fragrance for daily wear."
  },

  // ================================
  // SPORTS & FITNESS
  // ================================
  {
    id: 18,
    name: "Yoga Mat",
    price: 39,
    colors: ["Blue", "Purple", "Green"],
    category: "Sports",
    brand: "FitGear",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/2115051775/photo/thunderbolt-pose-or-diamond-pose-or-vajrasana-indian-young-women-meditating-in-the-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=qxNbVFHSYXrnI57Uuub4x4Hjg60G-y8QbImxg7p_WmU=",
    description: "Non-slip yoga mat for workouts and meditation."
  },
  {
    id: 19,
    name: "Dumbbell Set",
    price: 79,
    colors: ["Black"],
    category: "Sports",
    brand: "PowerLift",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/182186905/photo/gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=AuTkHlOS9YIAJ6PXmPsgInCPcSVzd4g_5RwerWzKXCI=",
    description: "Adjustable dumbbells for strength training."
  },

  // ================================
  // BOOKS & STATIONERY
  // ================================
  {
    id: 20,
    name: "Notebook Set",
    price: 15,
    colors: ["Brown", "Blue"],
    category: "Books",
    brand: "PaperCraft",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1625533617580-3977f2651fc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIyTm90ZWJvb2slMjBTZXR8ZW58MHx8MHx8fDA%3D",
    description: "Pack of 3 premium notebooks for journaling."
  },
  {
    id: 21,
    name: "Novel - The Future Mind",
    price: 19,
    colors: ["Blue"],
    category: "Books",
    brand: "BookWorld",
    rating: 4.7,
    image: "https://media.istockphoto.com/id/2187591963/photo/smiling-businessman-using-tablet-while-looking-out-of-the-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=2NWAk1yjbB0ovjegmWtgBBfVDPUT16SmVd7xwstnqys=",
    description: "A thrilling sci-fi novel about AI and humanity."
  },

  // ================================
  // FURNITURE
  // ================================
  {
    id: 22,
    name: "Office Chair",
    price: 149,
    colors: ["Black", "Gray"],
    category: "Furniture",
    brand: "ComfortZone",
    rating: 4.6,
    image: "https://plus.unsplash.com/premium_photo-1661962796359-68221d943c29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE9mZmljZSUyMENoYWlyfGVufDB8fDB8fHww",
    description: "Ergonomic office chair with lumbar support."
  },
  {
    id: 23,
    name: "Coffee Table",
    price: 99,
    colors: ["Brown", "White"],
    category: "Furniture",
    brand: "WoodCraft",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1691922005/photo/cozy-stylish-living-room-with-a-round-dining-table-chairs-and-shelf-with-decorative.webp?a=1&b=1&s=612x612&w=0&k=20&c=zJgXbO-UK4lhHZq4JR3LzJPoOE5tOF4mwj1Lr02KHXs=",
    description: "Modern wooden coffee table for living room."
  },

  // ================================
  // TOYS & BABY PRODUCTS
  // ================================
  {
    id: 24,
    name: "Building Blocks",
    price: 35,
    colors: ["Multi"],
    category: "Toys",
    brand: "PlayFun",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1661558951515-47f7706fd9c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnVpbGRpbmclMjBCbG9ja3N8ZW58MHx8MHx8fDA%3D",
    description: "Creative building blocks for kids."
  },
  {
    id: 25,
    name: "Baby Stroller",
    price: 199,
    colors: ["Gray", "Blue"],
    category: "Toys",
    brand: "TinyRide",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1635847152960-491679db3f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFieSUyMFN0cm9sbGVyfGVufDB8fDB8fHww",
    description: "Lightweight baby stroller with safety harness."
  },

  // ================================
  // GROCERIES
  // ================================
  {
    id: 26,
    name: "Organic Honey",
    price: 12,
    colors: ["Golden"],
    category: "Groceries",
    brand: "NaturePure",
    rating: 4.8,
    image: "https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.webp?a=1&b=1&s=612x612&w=0&k=20&c=BLpDU1478KYyFQWs8wcHq44K84A1KtrZ9XgiyFeRqbM=",
    description: "Pure organic honey from natural farms."
  },
  {
    id: 27,
    name: "Olive Oil",
    price: 15,
    colors: ["Green"],
    category: "Groceries",
    brand: "FreshFarm",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T2xpdmUlMjBPaWx8ZW58MHx8MHx8fDA%3D",
    description: "Extra virgin olive oil for cooking and salad."
  }
];

export default products;
