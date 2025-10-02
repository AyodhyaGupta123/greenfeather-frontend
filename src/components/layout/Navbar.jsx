import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const { items } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem("auth");
      if (authData) {
        try {
          const parsedAuth = JSON.parse(authData);
          setUser(parsedAuth);
        } catch (err) {
          console.error("Error parsing auth data:", err);
          localStorage.removeItem("auth");
        }
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm, "in", searchCategory);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    window.location.href = "/";
  };

  const navigateToLogin = () => {
    window.location.href = "/login";
  };

  const navigateToRegister = () => {
    window.location.href = "/register";
  };

  const topMenu = [
    { label: "Sell", href: "/shop" },
    { label: "Bestsellers", href: "/trends" },
    { label: "Today's Deals", href: "/deals" },
    { label: "Mobiles", href: "/products" },
    { label: "Electronics", href: "/products" },
    { label: "New Releases", href: "/trends" },
    { label: "Customer Service", href: "/contact" },
    { label: "Fashion", href: "/trends" },
    { label: "Home & Kitchen", href: "/shop" },
  ];

  const getUserName = () => {
    if (!user) return null;
    return user.name || user.user?.name || "User";
  };

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <div className="bg-[#0f6416] text-white px-4 md:px-8 py-2 backdrop-blur supports-[backdrop-filter]:bg-[#0f6416]/95 flex flex-col md:flex-row items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex items-center space-x-2 w-full md:w-auto justify-between">
          {/* Logo */}
          <div
            onClick={() => (window.location.href = "/")}
            className="cursor-pointer"
          >
            <h1>GreenFeather</h1>
          </div>

          {/* Location (mobile shrink) */}
          <div className="flex items-center ml-5 sm:ml-4 cursor-pointer">
            <FaMapMarkerAlt className="text-xl mr-1" />
            <div className="leading-tight text-xs sm:text-sm">
              <p className="text-gray-300">Delivering to Bhopal 464993</p>
              <p className="font-semibold">Update location</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-1 mx-0 sm:mx-5 h-12 overflow-hidden shadow-lg rounded-full border border-green-200 transition-all duration-300 hover:shadow-2xl bg-white w-full md:w-auto">
          <motion.select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="bg-gray-100 text-black pl-4 pr-2 sm:px-3 text-sm font-semibold outline-none cursor-pointer transition-colors duration-300 rounded-l-full"
            whileHover={{ scale: 1 }}
            whileFocus={{ scale: 1 }}
          >
            <option>All</option>
            <option>Appliances</option>
            <option>Mobiles</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </motion.select>

          <motion.input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GreenFeather"
            className="flex-1 px-2 sm:px-4 text-black text-sm sm:text-md outline-none bg-white font-thin placeholder-black focus:ring-2 focus:ring-green-500"
          />

          <motion.button
            onClick={handleSearch}
            className="px-4 sm:px-6 flex items-center justify-center bg-gradient-to-r from-[#f4ae4c] to-[#f3a847] text-black font-semibold rounded-r-full shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSearch className="text-md" />
          </motion.button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3 mt-2 md:mt-0">
          {/* Language */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India Flag"
              className="h-4"
            />
            <span className="text-sm font-semibold">EN</span>
            <RiArrowDropDownLine className="text-xl" />
          </div>

          {/* Account */}
          <div
            className="flex flex-col relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setMobileOpen((p) => !p)}
          >
            <span className="text-sm font-bold">
              {user ? `Hello, ${getUserName()}` : "Hello, sign in"}
            </span>
            <span className="text-sm font-semibold flex items-center">
              Account & Lists <RiArrowDropDownLine className="text-lg" />
            </span>

            {(dropdownOpen || mobileOpen) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                ref={dropdownRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 
               bg-white text-black w-[52vw] sm:w-[600px] lg:w-[780px] 
               shadow-2xl rounded-lg border border-gray-200 z-50"
              >
                {/* Arrow */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 
                    bg-white rotate-45 border-t border-l border-gray-200"
                />

                <div className="p-6">
                  {/* Top Sign In / Hello */}
                  {!user ? (
                    <div className="mb-6 text-center">
                      <button
                        onClick={navigateToLogin}
                        className="px-6 py-2 bg-yellow-400 text-black rounded-md font-semibold"
                      >
                        Sign in
                      </button>
                      <p className="text-sm mt-2">
                        New customer?{" "}
                        <button
                          onClick={navigateToRegister}
                          className="text-green-700 hover:underline"
                        >
                          Start here.
                        </button>
                      </p>
                    </div>
                  ) : (
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-semibold">
                        Hello, {getUserName()}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}

                  {/* Two-Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    {/* Left column: Your Lists */}
                    <div>
                      <h4 className="font-semibold mb-2">Your Lists</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <a href="#" className="hover:text-green-700">
                            Create a List
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-700">
                            Find a List or Registry
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Right column: Your Account */}
                    <div>
                      <h4 className="font-semibold mb-2">Your Account</h4>
                      <div className="flex flex-wrap  gap-3">
                        {[
                          "Account",
                          "Orders",
                          "Watchlist",
                          "Kindle Unlimited",
                          "Content & Devices",
                          "Subscribe & Save Items",
                          "Addresses",
                          "Payment options",
                          "Recommendations",,
                        ].map((label) => (
                          <a
                            key={label}
                            href="#"
                            className="px-3 py-1 bg-gray-100 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Orders */}
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs">Returns</span>
            <span className="text-sm font-semibold">& Orders</span>
          </div>

          {/* Cart */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setCartOpen((p) => !p)}
          >
            <FaShoppingCart className="text-2xl" />
            <span className="ml-1 hidden sm:inline text-sm font-semibold">
              Cart
            </span>
            <span className="absolute -top-2 -right-2 bg-[#f08804] text-black rounded-full text-xs px-1">
              {items.reduce((s, i) => s + i.quantity, 0)}
            </span>
            {cartOpen && (
              <div
                ref={cartRef}
                className="absolute right-0 top-full mt-3 w-[92vw] sm:w-96 bg-white text-black shadow-2xl rounded-lg border border-gray-200 z-50"
              >
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200" />
                <div className="p-4 max-h-96 overflow-auto">
                  <h4 className="font-semibold mb-2">Cart</h4>
                  {items.length === 0 ? (
                    <p className="text-sm text-gray-600">Your cart is empty.</p>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {items.map((it) => (
                        <li
                          key={it.id}
                          className="py-2 flex items-center gap-3"
                        >
                          <img
                            src={it.image}
                            alt={it.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium line-clamp-1">
                              {it.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              Qty: {it.quantity} • ₹
                              {(it.price * it.quantity).toLocaleString()}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-3 flex justify-end gap-2">
                    <a
                      href="/cart"
                      className="px-3 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                      View Cart
                    </a>
                    <a
                      href="/order-summary"
                      className="px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Top Menu */}
      <div className="bg-[#0b3d0f] text-white px-2 sm:px-6 py-3 flex items-center space-x-3 sm:space-x-6 text-sm overflow-x-auto mt-48 md:mt-20 sticky top-[56px] md:top-[56px] z-40">
        <button className="flex items-center font-semibold whitespace-nowrap">
          ☰ All
        </button>
        {topMenu.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="hover:underline cursor-pointer whitespace-nowrap hover:text-green-300"
          >
            {item.label}
          </a>
        ))}
        <span className="ml-auto text-yellow-400 font-semibold whitespace-nowrap">
          Great Indian Festival Live now
        </span>
      </div>
    </div>
  );
};

export default Navbar;
