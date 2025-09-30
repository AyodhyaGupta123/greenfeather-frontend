import React from "react";
import { useCart } from "../../context/CartContext";
 

const FeaturedProducts = () => {
  const { addItem } = useCart();

  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, image: "/images/headphones.jpg" },
    { id: 2, name: "Smart Watch", price: 2999, image: "/images/watch.jpg" },
    { id: 3, name: "Gaming Mouse", price: 1499, image: "/images/mouse.jpg" },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Deals & Offers section */}
      <DealsOffers />
    </section>
  );
};

const DealsOffers = () => {
  const { items } = useCart(); 

  return (
    <div className="deals-offers">
      <h2>Deals & Offers</h2>
      <p>Items currently in your cart: {items.length}</p>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity} — ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeaturedProducts;
