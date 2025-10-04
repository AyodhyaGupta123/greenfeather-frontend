import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; 
import Layout from "../components/layout/Layout";
import SidebarFilter from "../common/SidebarFilter";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex gap-6">
            <aside className="w-64 flex-shrink-0 hidden md:block">
              <div className="sticky top-20">
                <SidebarFilter 
                  products={products} 
                  onFilter={handleFilter} 
                />
              </div>
            </aside>

            {/* Mobile Filter */}
            <div className="md:hidden w-full mb-4">
              <SidebarFilter 
                products={products} 
                onFilter={handleFilter} 
              />
            </div>

            {/* Product Grid */}
            <main className="flex-1">
              {/* Results Count */}
              <div className="mb-4 text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col"
                    >
                      <Link to={`/products/${product.id}`} className="flex flex-col h-full">
                        <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="mt-3 flex-grow">
                          <h3 className="text-sm font-medium text-gray-700 leading-tight line-clamp-2">
                            {product.name}
                          </h3>
                          
                          {/* Rating */}
                          {product.rating && (
                            <div className="flex items-center mt-2">
                              <div className="flex text-yellow-400 text-xs">
                                {"★".repeat(Math.floor(product.rating))}
                                {"☆".repeat(5 - Math.floor(product.rating))}
                              </div>
                              <span className="ml-1 text-xs text-gray-500">
                                ({product.rating})
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mt-2 text-lg font-semibold text-gray-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters to see more results
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;