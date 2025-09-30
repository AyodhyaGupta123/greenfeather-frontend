import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { homeMenu } from "../../data/homeMenu";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";

import {
  RiSearchLine,
  RiSearchFill,
  RiShoppingCartLine,
  RiShoppingCartFill,
  RiHeartLine,
  RiHeartFill,
  RiUserLine,
  RiUserFill,
} from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [auth, setAuth] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);


  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 10);

    if (currentScrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth");
      setAuth(raw ? JSON.parse(raw) : null);
    } catch {
      setAuth(null);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-gradient-to-r from-green-100 via-green-50 to-green-100 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-5">
          <Link
            to="/"
            className="text-3xl font-medium cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-500 hover:from-green-600 hover:via-green-500 hover:to-green-400 transition-colors"
          >
            GreenFeather
          </Link>

          {/*== Desktop Menu with Products Hover ==*/}
          <div className="hidden md:flex space-x-12 relative">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`relative font-normal cursor-pointer flex items-center space-x-1 pb-1 ${isActive(item.path) ? "text-green-700" : "text-slate-800"}group`} >
                  <span className="relative">
                    {item.label}

                    <span
                      className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {(item.label === "Products" || item.label === "Home") && (
                    <FaChevronDown className="text-sm ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* ===== Home Dropdown ===== */}
                {item.label === "Home" && (
                  <div className="  absolute left-1/2 transform -translate-x-1/2 top-12 w-[70vw] max-w-6xl bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[999] p-6 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-6">
                      {homeMenu.map((section, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 text-base mb-3 border-b border-gray-200 pb-1">
                            {section.title}
                          </h3>

                          <div className="flex flex-col space-y-2">
                            {section.subcategories.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={`/home/${section.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}/${sub
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-sm text-gray-600 hover:text-green-700 transition-colors"
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ===== Products Dropdown ===== */}
                {item.label === "Products" && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-[70vw] max-w-6xl bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[999] p-6 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-6">
                      {categories.map((cat, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 text-base mb-3 border-b border-gray-200 pb-1">
                            {cat.title}
                          </h3>
                          <div className="flex flex-col space-y-2">
                            {cat.subcategories.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={`/category/${cat.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}/${sub
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-sm text-gray-600 hover:text-green-700 transition-colors"
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/*== Right Side Icons */}
          <div className="flex items-center text-gray-700">
            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setShowSearch(true)}
                className="group relative p-2 rounded-full hover:bg-green-50 text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/30 group-hover:text-green-700"
                aria-label="Open search"
                title="Search"
              >
                <RiSearchLine className="text-[20px] group-hover:hidden" />
                <RiSearchFill className="text-[20px] hidden group-hover:block" />
              </button>

              <Link to="/cart">
                <button
                  type="button"
                  className="group relative p-2 rounded-full hover:bg-green-50 text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/30 group-hover:text-green-700"
                  aria-label="View cart"
                  title="Cart"
                >
                  <RiShoppingCartLine className="text-[20px] group-hover:hidden" />
                  <RiShoppingCartFill className="text-[20px] hidden group-hover:block" />
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1.5 text-[10px] leading-[16px] text-white bg-green-600 rounded-full text-center">
                    0
                  </span>
                </button>
              </Link>

              {auth && (
                <Link
                  to="/wishlist"
                  className="group relative p-2 rounded-full hover:bg-emerald-50 text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/30 group-hover:text-emerald-600"
                  aria-label="View wishlist"
                  title="Wishlist"
                >
                  <RiHeartLine className="text-[20px] group-hover:hidden" />
                  <RiHeartFill className="text-[20px] hidden group-hover:block" />
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1.5 text-[10px] leading-[16px] text-white bg-pink-600 rounded-full text-center">
                    0
                  </span>
                </Link>
              )}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowAccountMenu((v) => !v)}
                  className="group relative p-2 rounded-full hover:bg-green-50 text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/30 group-hover:text-green-700"
                  aria-label="Account"
                  title="Account"
                >
                <RiUserLine className="text-[20px] group-hover:hidden" />
                <RiUserFill className="text-[20px] hidden group-hover:block" />
                </button>
                {showAccountMenu && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {auth ? (
                      <>
                        <div className="px-4 py-3 border-b">
                          <div className="text-sm text-gray-500">Signed in as</div>
                          <div className="text-sm font-medium text-gray-900 truncate">{auth?.name || auth?.email}</div>
                        </div>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50"
                          onClick={() => { setShowAccountMenu(false); navigate("/wishlist"); }}
                        >
                          Wishlist
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50"
                          onClick={() => { setShowAccountMenu(false); navigate("/cart"); }}
                        >
                          Cart
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50"
                          onClick={() => {
                            localStorage.removeItem("auth");
                            setAuth(null);
                            setShowAccountMenu(false);
                            navigate("/login");
                          }}
                        >
                          Sign out
                        </button>
                      </>
                    ) : (
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50"
                        onClick={() => { setShowAccountMenu(false); navigate("/login"); }}
                      >
                        Sign in
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-200 mx-2" />

            {/*== Mobile Menu Toggle== */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-green-50 text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/30"
              aria-label="Toggle menu"
              title="Menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-[20px]" />
              ) : (
                <FaBars className="text-[20px]" />
              )}
            </button>
          </div>
        </div>

        {/*== Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 px-4 rounded-lg font-semibold transition-colors ${
                    isActive(item.path)
                      ? "text-green-700 bg-green-50"
                      : "hover:text-green-700 hover:bg-green-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/*== Full-screen Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col items-center justify-start pt-24 p-8 transition-all duration-500">
          <button
            className="absolute top-8 right-8 text-3xl text-gray-700 hover:text-green-500 transition-colors"
            onClick={() => setShowSearch(false)}
            aria-label="Close search"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center w-full max-w-3xl">
            <div className="flex items-center w-full border-b-2 border-gray-300 focus-within:border-green-500 transition-colors">
              <FaSearch className="text-gray-400 mr-3 text-xl" />
              <input
                type="text"
                autoFocus
                placeholder="Search for products..."
                className="w-full py-3 text-lg md:text-xl placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-gray-700">
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-500 transition-colors">
                <FaShoppingCart className="text-green-600" />
                <span>Best Sellers</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-500 transition-colors">
                <FaHeart className="text-pink-500" />
                <span>Eco-Friendly Picks</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer hover:text-green-500 transition-colors">
                <FaUser className="text-blue-500" />
                <span>New Arrivals</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
