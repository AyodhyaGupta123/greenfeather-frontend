import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Wishlist from "./pages/WishList";
import Cart from "./pages/Cart";
import ProductDetail from "./products/ProductDetail";
import ProductList from "./products/ProductList";
import OrderSummary from "./pages/OrderSummary";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages with Layout */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop /> }/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/order-summary" element={<ProtectedRoute><OrderSummary /></ProtectedRoute>} />

        {/* Product pages */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Authentication pages without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
