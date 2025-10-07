import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, MapPin, ChevronDown } from "lucide-react";
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
          <ChevronDown className="text-xl" />
        </div>

        {/* Account & Lists */}
        <div
          className="hidden md:flex flex-col relative flex-shrink-0 cursor-pointer min-w-fit"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span
            className="text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]"
            title={
              user
                ? `Hello, ${user.name || user.user?.name || "User"}`
                : "Hello, sign in"
            }
          >
            {user ? `Hello, ${getUserName()}` : "Hello, sign in"}
          </span>
          <span className="text-sm font-semibold flex items-center whitespace-nowrap">
            Account & Lists <ChevronDown className="text-lg ml-1" />
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
                      <li
  onClick={() => (window.location.href = "/account")}
  className="text-sm hover:text-[#f08804] hover:underline cursor-pointer"
>
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
                      className="text-sm text-[#0f6416] hover:text-[#f08804] cursor-pointer font-semibold px-2 py-1 border border-[#0f6416] hover:border-[#f08804] rounded-md transition-all duration-200"
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
                      className="w-full bg-gradient-to-b from-[#0da91f] to-[#05921c] hover:from-[#16da3d] cursor-pointer hover:to-[#14bc22] text-black py-2 px-4 rounded-md shadow-sm font-semibold text-sm transition-all duration-200"
                    >
                      Sign in
                    </button>
                    <p className="text-xs text-gray-600 mt-2">
                      New customer?{" "}
                      <span
                        onClick={navigateToRegister}
                        className="text-[#0066c0] hover:text-[#13760a] hover:underline cursor-pointer"
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
                      <li
  onClick={() => (window.location.href = "/account")}
  className="text-sm hover:text-[#f08804] hover:underline cursor-pointer"
>
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

        <span className="ml-auto text-yellow-400 font-semibold whitespace-nowrap text-xs md:text-sm">
          Great Indian Festival Live now
        </span>
      </div>
    </div>
  );
};

export default Navbar;
