import React, { useState, useEffect } from "react";
import { X, SlidersHorizontal } from "lucide-react";

const SidebarFilter = ({ products = [], onFilter }) => {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    price: 50000,
    rating: null,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Checkbox handler
  const handleCheckboxChange = (type, value) => {
    setFilters(prev => {
      const newValues = prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newValues };
    });
  };

  // Price slider handler
  const handlePriceChange = e => {
    setFilters(prev => ({ ...prev, price: Number(e.target.value) }));
  };

  // Rating handler
  const handleRatingChange = rate => {
    setFilters(prev => ({ 
      ...prev, 
      rating: prev.rating === rate ? null : rate 
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      category: [],
      brand: [],
      color: [],
      price: 50000,
      rating: null,
    });
  };

  // Filter products
  const filteredProducts = (products || []).filter(p => {
    const categoryMatch = !filters.category.length || filters.category.includes(p.category);
    const brandMatch = !filters.brand.length || filters.brand.includes(p.brand);
    const colorMatch = !filters.color.length || filters.color.includes(p.color);
    const priceMatch = p.price <= filters.price;
    const ratingMatch = !filters.rating || p.rating >= filters.rating;
    return categoryMatch && brandMatch && colorMatch && priceMatch && ratingMatch;
  });

  // Send filtered products to parent
  useEffect(() => {
    onFilter(filteredProducts);
  }, [filters, products]);

  // Get unique values with counts
  const categories = [...new Set((products || []).map(p => p.category))];
  const brands = [...new Set((products || []).map(p => p.brand))];
  const colors = [...new Set((products || []).map(p => p.color))];

  // Count active filters
  const activeFiltersCount = 
    filters.category.length + 
    filters.brand.length + 
    filters.color.length + 
    (filters.rating ? 1 : 0) +
    (filters.price < 50000 ? 1 : 0);

  const FilterContent = () => (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-gray-700" />
          <h2 className="text-lg font-bold text-gray-800">Filters</h2>
          {activeFiltersCount > 0 && (
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
            Categories
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map(c => (
              <label key={c} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  checked={filters.category.includes(c)}
                  onChange={() => handleCheckboxChange("category", c)}
                />
                <span className="text-sm text-gray-700">{c}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Brands */}
      {brands.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
            Brands
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map(b => (
              <label key={b} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  checked={filters.brand.includes(b)}
                  onChange={() => handleCheckboxChange("brand", b)}
                />
                <span className="text-sm text-gray-700">{b}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Colors */}
      {colors.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
            Colors
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {colors.map(c => (
              <label key={c} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  checked={filters.color.includes(c)}
                  onChange={() => handleCheckboxChange("color", c)}
                />
                <span className="text-sm text-gray-700">{c}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
          Price Range
        </h3>
        <div className="px-1">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">₹0</span>
            <span className="text-lg font-semibold text-blue-600">
              ₹{filters.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-gray-600">₹50k</span>
          </div>
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            value={filters.price}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
          Customer Rating
        </h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rate => (
            <label key={rate} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
              <input
                type="radio"
                name="rating"
                className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                checked={filters.rating === rate}
                onChange={() => handleRatingChange(rate)}
              />
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(rate)}{"☆".repeat(5 - rate)}
                </div>
                <span className="text-sm text-gray-600">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden w-full flex items-center justify-center gap-2 p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <SlidersHorizontal className="w-5 h-5" />
        <span className="font-medium">
          {sidebarOpen ? "Close Filters" : "Show Filters"}
        </span>
        {activeFiltersCount > 0 && (
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:relative md:w-full md:shadow-none md:border md:border-gray-200 md:rounded-lg`}
      >
        {/* Mobile Close Button */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <FilterContent />
      </div>
    </>
  );
};

export default SidebarFilter;