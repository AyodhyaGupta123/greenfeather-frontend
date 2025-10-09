import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Award,
  Zap,
  Package,
  Heart,
  Ticket,
  Gift,
  Bell,
  LogOut,
  Store,
  Search,
  ShoppingCart,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const Navbar = () => {
  const { items, getTotalItems } = useCart();
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Location states
  const [location, setLocation] = useState("Delivering to India");
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setLocation(place.formatted_address);
      }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
              import.meta.env.VITE_GOOGLE_MAPS_API_KEY
            }`
          );
          const data = await res.json();
          if (data.status === "OK" && data.results.length > 0) {
            setLocation(data.results[0].formatted_address);
          }
        } catch (err) {
          console.error("Geocoding error:", err);
        }
      });
    }
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      // localStorage use kar rahe hain instead of sessionStorage
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

    // Initial check
    checkAuth();

    // Listen for storage events (works across tabs)
    window.addEventListener("storage", checkAuth);

    // Custom event for same-tab updates
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const params = new URLSearchParams();
      params.set("search", searchTerm.trim());
      if (searchCategory && searchCategory !== "All")
        params.set("category", searchCategory);
      window.location.href = `/products?${params.toString()}`;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setUser(null);

    // Trigger custom event
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
    { name: "Sell", link: "/sell" },
    { name: "Bestsellers", link: "/bestsellers" },
    { name: "Today's Deals", link: "/deals" },
    { name: "Mobiles", link: "/products" },
    { name: "Electronics", link: "/electronics" },
    { name: "New Releases", link: "/trends" },
    { name: "Customer Service", link: "/customer-service" },
    { name: "Fashion", link: "/fashion" },
    { name: "Home & Kitchen", link: "/home-kitchen" },
  ];

  const getUserName = () => {
    if (!user) return null;
    const name = user.name || user.user?.name || "User";
    return name.length > 12 ? name.substring(0, 12) + "..." : name;
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {
      setUser(null);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="bg-[#0f6416] text-white px-3 md:px-6 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50 gap-2 md:gap-4">
        <div
          onClick={() => (window.location.href = "/")}
          className="flex-shrink-0 cursor-pointer"
        >
          <h2>GreenFeather</h2>
        </div>

        {/* Location with Google Maps Autocomplete */}
        <div className="hidden lg:flex items-center flex-shrink-0 max-w-[155px]">
          <MapPin className="text-lg" />
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            libraries={["places"]}
          >
            <Autocomplete
              onLoad={(auto) => setAutocomplete(auto)}
              onPlaceChanged={handlePlaceChanged}
            >
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-2 py-1 text-white text-sm font-semibold rounded w-full whitespace-normal break-words"
              />
            </Autocomplete>
          </LoadScript>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-3xl h-10 overflow-hidden shadow-lg rounded-lg border transition-all duration-300 hover:shadow-2xl bg-white">
          <motion.select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="bg-gray-100 text-black px-2 md:px-3 text-xs md:text-sm font-semibold outline-none cursor-pointer transition-colors duration-300"
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
            className="flex-1 px-2 md:px-4 text-black text-xs md:text-sm outline-none bg-white font-thin placeholder-gray-500"
          />

          <motion.button
            onClick={handleSearch}
            className="px-3 md:px-5 flex items-center justify-center bg-gradient-to-r from-[#f4ae4c] to-[#f3a847] text-black font-semibold rounded-r-lg shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="text-sm md:text-base" />
          </motion.button>
        </div>

        {/* Language - Hidden on small screens */}
        <div className="hidden md:flex items-center space-x-1 flex-shrink-0 cursor-pointer">
          <img
            src="https://flagcdn.com/w20/in.png"
            alt="India Flag"
            className="h-4"
          />
          <span className="text-sm font-semibold">EN</span>
        </div>

        {/* Account & Lists */}
        <div
          className="hidden md:flex items-center relative flex-shrink-0 cursor-pointer min-w-fit"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {user ? (
            <div className="flex items-center gap-2 border border-gray-400  hover:text-white px-3 py-1.5 rounded-md">
              <User className="w-5 h-5" />
              <span className="text-sm font-semibold">{getUserName()}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          ) : (
            <button
              onClick={navigateToLogin}
              className="bg-[#0f6416] text-white font-semibold px-8 py-1.5 rounded-md text-sm border-1 cursor-pointer"
            >
              Login
            </button>
          )}

          {dropdownOpen && user && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-white text-black w-64 shadow-2xl rounded-lg border border-gray-200 z-50 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-semibold truncate">
                  Hello, {user.name || user.user?.name || "User"}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email || user.user?.email}
                </p>
              </div>

              <ul className="py-2">
                {[
                  {
                    icon: <User className="w-5 h-5 text-blue-600" />,
                    label: "My Profile",
                    link: "/account",
                  },
                  {
                    icon: <Package className="w-5 h-5 text-blue-600" />,
                    label: "Orders",
                    link: "/orders",
                  },
                  {
                    icon: <Heart className="w-5 h-5 text-red-500" />,
                    label: "Wishlist",
                    link: "/wishlist",
                  },
                  {
                    icon: <Ticket className="w-5 h-5 text-green-500" />,
                    label: "Coupons",
                    link: "/coupons",
                  },
                  {
                    icon: <Gift className="w-5 h-5 text-pink-500" />,
                    label: "Gift Cards",
                    link: "/giftcards",
                  },
                  {
                    icon: <Bell className="w-5 h-5 text-gray-600" />,
                    label: "Notifications",
                    link: "/notifications",
                  },
                ].map((item) => (
                  <li key={item.label} className="hover:bg-gray-100">
                    <a
                      href={item.link}
                      className="flex items-center gap-4 px-4 py-2.5 text-sm"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Logout Button */}
              <div className="border-t border-gray-200 p-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 px-4 py-2.5 text-sm hover:bg-gray-100 rounded-md"
                >
                  <LogOut className="w-5 h-5 text-gray-600" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Orders - Hidden on small screens */}
        <div className="hidden md:flex flex-col flex-shrink-0 cursor-pointer">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-semibold whitespace-nowrap">
            & Orders
          </span>
        </div>

        {/* Cart */}
        <div
          onClick={() => (window.location.href = "/cart")}
          className="relative flex items-center flex-shrink-0 cursor-pointer"
        >
          <div className="relative">
            <ShoppingCart className="text-xl md:text-2xl" />
            <span className="absolute -top-2 -right-2 bg-[#f08804] text-black rounded-full text-xs px-1">
              {getTotalItems()}
            </span>
          </div>
          <span className="hidden sm:inline ml-2 font-semibold text-sm whitespace-nowrap">
            Cart
          </span>
        </div>
      </div>

      {/* Top Menu */}
      <div className="bg-[#073903] text-white px-3 md:px-6 py-2 flex items-center space-x-4 md:space-x-6 text-sm overflow-x-auto mt-[52px] md:mt-[56px]">
        <button className="flex items-center font-semibold whitespace-nowrap">
          ☰ All
        </button>
        {topMenu.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="hover:underline cursor-pointer whitespace-nowrap text-xs md:text-sm"
          >
            {item.name}
          </a>
        ))}

        <span className="ml-auto flex items-center gap-1 text-yellow-400 font-semibold whitespace-nowrap text-xs md:text-sm cursor-pointer">
          <Store className="w-4 h-4" />
          <a href="#" className="hover:underline">
            Become a Seller
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
