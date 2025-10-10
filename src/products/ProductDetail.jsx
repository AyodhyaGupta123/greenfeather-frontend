import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import products from "../data/products";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { ShoppingCart, Heart, Star, Truck, RotateCcw, Shield } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addItem } = useCart();
  const { add: addToWishlist, remove: removeFromWishlist, has: isWishlisted } = useWishlist();
  const navigate = useNavigate();
  const product = (location.state && location.state.product) || products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || product?.color || "Black"
  );
  const [wishAnimate, setWishAnimate] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found!</h2>
          <Link to="/products" className="text-green-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, color: selectedColor }, quantity);
  };

  const handleBuyNow = () => {
    addItem({ ...product, color: selectedColor }, quantity);
    navigate("/cart");
  };

  const toggleWishlist = () => {
    if (!product) return;
    setWishAnimate(true);
    setTimeout(() => setWishAnimate(false), 300); 
    if (isWishlisted(product.id)) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") setQuantity(prev => prev + 1);
    else if (type === "decrement" && quantity > 1) setQuantity(prev => prev - 1);
  };

  const totalPrice = product.price * quantity;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="mb-4 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-gray-900">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
                <button
                  onClick={toggleWishlist}
                  className={`absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full text-white transition-transform transform ${
                    wishAnimate ? "scale-125" : "scale-100"
                  } ${isWishlisted(product.id) ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 hover:bg-gray-400"}`}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 text-white py-2 font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
              )}

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-1">Inclusive of all taxes</p>
              </div>

              {product.description && (
                <p className="text-gray-600 text-sm">{product.description}</p>
              )}

              {/* Color Selection */}
              {(product.colors || product.color) && (
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    Color: <span className="text-gray-900 font-semibold">{selectedColor}</span>
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {(product.colors || [product.color]).map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === color
                            ? "border-green-600 scale-110 shadow-lg"
                            : "border-gray-300 hover:border-gray-400 hover:scale-105"
                        }`}
                        style={{
                          backgroundColor:
                            color.toLowerCase() === "black" ? "#000000" :
                            color.toLowerCase() === "white" ? "#FFFFFF" :
                            color.toLowerCase() === "blue" ? "#3B82F6" :
                            color.toLowerCase() === "red" ? "#EF4444" :
                            color.toLowerCase() === "green" ? "#10B981" :
                            color.toLowerCase() === "yellow" ? "#FCD34D" :
                            color.toLowerCase() === "pink" ? "#EC4899" :
                            color.toLowerCase() === "gray" || color.toLowerCase() === "grey" ? "#6B7280" :
                            color.toLowerCase() === "purple" ? "#A855F7" :
                            color.toLowerCase() === "orange" ? "#F97316" :
                            color.toLowerCase()
                        }}
                        title={color}
                      >
                        {color.toLowerCase() === "white" && (
                          <span className="absolute inset-0 rounded-full border border-gray-300"></span>
                        )}
                        {selectedColor === color && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      className="px-3 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-semibold border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      className="px-3 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    Total: <span className="font-bold text-gray-900">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Free Delivery on orders above ₹499</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">7 Days Return & Exchange</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">100% Secure Payment</span>
                </div>
              </div>

              <Link to="/products" className="text-green-600 hover:underline text-sm inline-block">
                ← Back to Products
              </Link>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex text-sm border-b border-gray-200 py-2">
                    <span className="font-semibold text-gray-700 w-1/3">{key}:</span>
                    <span className="text-gray-600 w-2/3">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
