import axios from 'axios';

const API = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add auth token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API
export const authAPI = {
  // Login
  login: async (credentials) => {
    try {
      const response = await API.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Register
  register: async (userData) => {
    try {
      const response = await API.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Get profile
  getProfile: async () => {
    try {
      const response = await API.get('/auth/profile');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
  },

  // Update profile
  updateProfile: async (userData) => {
    try {
      const response = await API.put('/auth/profile', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  },

  // Change password
  changePassword: async (passwordData) => {
    try {
      const response = await API.put('/auth/change-password', passwordData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to change password');
    }
  },

  // Logout
  logout: async () => {
    try {
      const response = await API.post('/auth/logout');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
  },

  // Verify token
  verifyToken: async () => {
    try {
      const response = await API.get('/auth/verify-token');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Token verification failed');
    }
  }
};

// Products API
export const productsAPI = {
  // Get all products
  getProducts: async (params = {}) => {
    try {
      const response = await API.get('/products', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  },

  // Get product by ID
  getProduct: async (id) => {
    try {
      const response = await API.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
  },

  // Search products
  searchProducts: async (query, filters = {}) => {
    try {
      const response = await API.get('/products/search', { 
        params: { q: query, ...filters } 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search products');
    }
  },

  // Get featured products
  getFeaturedProducts: async () => {
    try {
      const response = await API.get('/products/featured');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch featured products');
    }
  },

  // Get products by category
  getProductsByCategory: async (categoryId, params = {}) => {
    try {
      const response = await API.get(`/products/category/${categoryId}`, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products by category');
    }
  }
};

// Categories API
export const categoriesAPI = {
  // Get all categories
  getCategories: async () => {
    try {
      const response = await API.get('/categories');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch categories');
    }
  },

  // Get category by ID
  getCategory: async (id) => {
    try {
      const response = await API.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch category');
    }
  }
};

// Orders API
export const ordersAPI = {
  // Get user orders
  getUserOrders: async () => {
    try {
      const response = await API.get('/orders/user');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch orders');
    }
  },

  // Create order
  createOrder: async (orderData) => {
    try {
      const response = await API.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create order');
    }
  },

  // Get order by ID
  getOrder: async (id) => {
    try {
      const response = await API.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch order');
    }
  },

  // Update order status
  updateOrderStatus: async (id, status) => {
    try {
      const response = await API.put(`/orders/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update order status');
    }
  }
};

// Cart API
export const cartAPI = {
  // Get cart
  getCart: async () => {
    try {
      const response = await API.get('/cart');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch cart');
    }
  },

  // Add to cart
  addToCart: async (productId, quantity = 1) => {
    try {
      const response = await API.post('/cart/add', { productId, quantity });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add to cart');
    }
  },

  // Update cart item
  updateCartItem: async (productId, quantity) => {
    try {
      const response = await API.put(`/cart/${productId}`, { quantity });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update cart item');
    }
  },

  // Remove from cart
  removeFromCart: async (productId) => {
    try {
      const response = await API.delete(`/cart/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to remove from cart');
    }
  },

  // Clear cart
  clearCart: async () => {
    try {
      const response = await API.delete('/cart');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to clear cart');
    }
  }
};

// Wishlist API
export const wishlistAPI = {
  // Get wishlist
  getWishlist: async () => {
    try {
      const response = await API.get('/wishlist');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch wishlist');
    }
  },

  // Add to wishlist
  addToWishlist: async (productId) => {
    try {
      const response = await API.post('/wishlist/add', { productId });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add to wishlist');
    }
  },

  // Remove from wishlist
  removeFromWishlist: async (productId) => {
    try {
      const response = await API.delete(`/wishlist/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to remove from wishlist');
    }
  }
};

// Real-time data fetching with caching
export const realTimeAPI = {
  // Get dashboard stats
  getDashboardStats: async () => {
    try {
      const response = await API.get('/dashboard/stats');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch dashboard stats');
    }
  },

  // Get live updates
  getLiveUpdates: async () => {
    try {
      const response = await API.get('/live/updates');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch live updates');
    }
  }
};

// Generic API functions for backward compatibility
export const apiGet = async (url, config = {}) => {
  try {
    const response = await API.get(url, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};

export const apiPost = async (url, data = {}, config = {}) => {
  try {
    const response = await API.post(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};

export const apiPut = async (url, data = {}, config = {}) => {
  try {
    const response = await API.put(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};

export const apiDelete = async (url, config = {}) => {
  try {
    const response = await API.delete(url, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request failed');
  }
};

export default API;