import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
<<<<<<< HEAD
=======
import { WishlistProvider } from './context/WishlistContext.jsx'
>>>>>>> ayodhya

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
<<<<<<< HEAD
        <App />
=======
        <WishlistProvider>
          <App />
        </WishlistProvider>
>>>>>>> ayodhya
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
