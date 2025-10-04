import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    "Sell",
    "Bestsellers",
    "Today's Deals",
    "Mobiles",
    "Electronics",
    "New Releases",
    "Customer Service",
    "Fashion",
    "Home & Kitchen",
  ];

  const getUserName = () => {
    if (!user) return null;
    return user.name || user.user?.name || "User";
  };

  return (
    <div className="w-full">
      <div className="bg-[#0f6416] text-white px-2 md:px-6 py-2 md:py-0 flex flex-wrap md:flex-nowrap items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div
          onClick={() => (window.location.href = "/")}
          className="flex items-center space-x-2 md:space-x-4 cursor-pointer mb-2 md:mb-0"
        >
          <img
            src="/imgs/navlogo.png"
            alt="GreenFeather Logo"
            className="h-8 md:h-15 bg-[#1d6123] transform  transition-transform duration-300"
          />
        </div>

        <div className="flex items-center ml-0 md:ml-6 mb-2 md:mb-0">
          <FaMapMarkerAlt className="text-xl mr-1" />
          <div className="leading-tight">
            <p className="text-xs md:text-sm text-gray-300">Delivering to India</p>
            <p className="text-sm md:text-base font-semibold">Update location</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex w-1/2 h-10 md:h-10 overflow-hidden shadow-lg rounded-lg border transition-all duration-300 hover:shadow-2xl bg-white mb-2 md:mb-0">
          <motion.select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="bg-gray-100 text-black px-2 md:px-3 text-sm md:text-base font-semibold outline-none cursor-pointer transition-colors duration-300"
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
            className="flex-1 px-2 md:px-4 text-black text-sm md:text-md outline-none bg-white font-thin placeholder-black"
          />

          <motion.button
            onClick={handleSearch}
            className="px-3 md:px-5 flex items-center justify-center bg-gradient-to-r from-[#f4ae4c] to-[#f3a847] text-black font-semibold rounded-r-lg shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSearch className="text-md" />
          </motion.button>
        </div>

        {/* Language */}
        <div className="flex items-center space-x-1 mb-2 md:mb-0 cursor-pointer">
          <img
            src="https://flagcdn.com/w20/in.png"
            alt="India Flag"
            className="h-4"
          />
          <span className="text-sm md:text-base font-semibold">EN</span>
          <RiArrowDropDownLine className="text-xl" />
        </div>

        {/* Account & Lists */}
        <div
          className="flex flex-col mx-2 relative mb-2 md:mb-0 cursor-pointer"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="text-sm font-bold">
            {user ? `Hello, ${getUserName()}` : "Hello, sign in"}
          </span>
          <span className="text-sm font-semibold flex items-center">
            Account & Lists <RiArrowDropDownLine className="text-lg" />
          </span>

          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black w-[280px] md:w-[480px] shadow-2xl rounded-lg border border-gray-200 z-50"
            >
              {user ? (
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-base mb-3 text-red-800 underline underline-offset-4">
                        Your Lists
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Create a List
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Find a List or Registry
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-3 text-red-800 underline underline-offset-4">
                        Your Account
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Account
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Orders
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Recommendations
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Watchlist
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Content & Devices
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Subscribe & Save Items
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Memberships & Subscriptions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={handleLogout}
                      className="text-sm text-[#0f6416] hover:text-[#f08804] cursor-pointer hover:underline font-semibold"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <button
                      onClick={navigateToLogin}
                      className="w-full bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] hover:from-[#f5d78e] hover:to-[#e7b731] text-black py-2 px-4 rounded-md shadow-sm font-semibold text-sm transition-all duration-200"
                    >
                      Sign in
                    </button>
                    <p className="text-xs text-gray-600 mt-2">
                      New customer?{" "}
                      <span
                        onClick={navigateToRegister}
                        className="text-[#0066c0] hover:text-[#f08804] hover:underline cursor-pointer"
                      >
                        Start here.
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-4">
                    <div>
                      <h3 className="font-bold text-base mb-3 text-red-800 underline underline-offset-4">
                        Your Lists
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Create a List
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Find a List or Registry
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-base mb-3 text-red-800 underline underline-offset-4">
                        Your Account
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Account
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Orders
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Recommendations
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Watchlist
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Kindle Unlimited
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Content & Devices
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Subscribe & Save Items
                        </li>
                        <li className="text-sm hover:text-[#f08804] hover:underline cursor-pointer">
                          Memberships & Subscriptions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Orders */}
        <div className="flex flex-col mx-2 mb-2 md:mb-0 cursor-pointer">
          <span className="text-xs md:text-sm">Returns</span>
          <span className="text-sm md:text-base font-semibold">& Orders</span>
        </div>

        {/* Cart */}
        <div
          onClick={() => (window.location.href = "/cart")}
          className="relative flex items-center mx-2 mb-2 md:mb-0 cursor-pointer"
        >
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-[#f08804] text-black rounded-full text-xs px-1">
              0
            </span>
          </div>
          <span className="ml-1 md:ml-2 font-semibold text-sm md:text-base">Cart</span>
        </div>
      </div>

      {/* Top Menu */}
      <div className="bg-[#073903] text-white px-2 md:px-6 py-2 flex flex-wrap md:flex-nowrap items-center space-x-2 md:space-x-6 text-sm overflow-x-auto mt-[60px]">
        <button className="flex items-center font-semibold whitespace-nowrap">☰ All</button>
        {topMenu.map((item, idx) => (
          <span key={idx} className="hover:underline cursor-pointer whitespace-nowrap text-xs md:text-sm">
            {item}
          </span>
        ))}
        <span className="ml-auto text-yellow-400 font-semibold whitespace-nowrap text-xs md:text-sm">
          Great Indian Festival Live now
        </span>
      </div>
    </div>
  );
};

export default Navbar;
