// src/data/products.jsx

const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499,
      image: "https://images.unsplash.com/photo-1707438095940-1eee18e85400?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
      description: "Latest smartphone with high-end specs."
    },
    {
      id: 2,
      name: "Laptop",
      price: 999,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      description: "High performance laptop for work and gaming."
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 199,
      image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNtYXJ0V2F0Y2h8ZW58MHx8MHx8fDA%3D",
      description: "Stylish smartwatch with fitness tracking."
    },
    {
      id: 4,
      name: "Headphones",
      price: 149,
      image: "https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lcyUyMGFwcGxlfGVufDB8fDB8fHww",
      description: "Noise-cancelling over-ear headphones."
    },
    {
      id: 5,
      name: "Camera",
      price: 699,
      image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      description: "High-resolution DSLR camera."
    },
    {
      id: 6,
      name: "Tablet",
      price: 299,
      image: "https://images.unsplash.com/photo-1621009063622-4467e453c3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fFRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Lightweight tablet for entertainment and work."
    },
    {
      id: 7,
      name: "Speaker",
      price: 99,
      image: "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
      description: "Portable Bluetooth speaker."
    },
    {
      id: 8,
      name: "Charger",
      price: 29,
      image: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fENoYXJnZXJ8ZW58MHx8MHx8fDA%3D",
      description: "Fast charging USB-C charger."
    },
    {
      id: 9,
      name: "Router",
      price: 79,
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um91dGVyfGVufDB8fDB8fHww",
      description: "High-speed Wi-Fi router."
    },
    {
      id: 10,
      name: "Monitor",
      price: 199,
      image: "https://images.unsplash.com/photo-1594400344473-cf8b48733c1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjBtb25pdG9yfGVufDB8fDB8fHww",
      description: "Full HD monitor with vibrant display."
    },
    {
      id: 11,
      name: "Keyboard",
      price: 49,
      image: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEtleWJvYXJkfGVufDB8fDB8fHww",
      description: "Mechanical keyboard with RGB lighting."
    },
    {
      id: 12,
      name: "Mouse",
      price: 39,
      image: "https://images.unsplash.com/photo-1551515300-2d3b7bb80920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE1vdXNlfGVufDB8fDB8fHww",
      description: "Ergonomic wireless mouse."
    },
    {
      id: 13,
      name: "Power Bank",
      price: 59,
      image: "https://images.unsplash.com/photo-1644571669401-9ab344866592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG93ZXIlMjBCYW5rfGVufDB8fDB8fHww",
      description: "10000mAh portable power bank."
    },
    {
      id: 14,
      name: "Gaming Console",
      price: 399,
      image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2FtaW5nJTIwQ29uc29sZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Next-gen gaming console."
    },
    {
      id: 15,
      name: "Fitness Band",
      price: 99,
      image: "https://images.unsplash.com/photo-1758348844355-2ef28345979d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Rml0bmVzcyUyMEJhbmR8ZW58MHx8MHx8fDA%3D",
      description: "Track your daily fitness activities."
    },
    {
      id: 16,
      name: "Smart TV",
      price: 799,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoaW5nJTIwdHZ8ZW58MHx8MHx8fDA%3D",
      description: "4K Smart TV with streaming apps."
    },
    {
      id: 17,
      name: "Printer",
      price: 129,
      image: "https://images.unsplash.com/photo-1650696868612-4b836291b323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJpbnRlci58ZW58MHx8MHx8fDA%3D",
      description: "All-in-one wireless printer."
    },
    {
      id: 18,
      name: "VR Headset",
      price: 349,
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VlIlMjBIZWFkc2V0fGVufDB8fDB8fHww",
      description: "Immersive virtual reality headset."
    },
    {
      id: 19,
      name: "Wireless Earbuds",
      price: 89,
      image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww",
      description: "True wireless earbuds with charging case."
    },
    {
      id: 20,
      name: "Camera Lens",
      price: 249,
      image: "https://images.unsplash.com/photo-1582994254571-52c62d96ebab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FtZXJhJTIwTGVuc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Professional camera lens for DSLR."
    },
  ];
  
  export default products;
  