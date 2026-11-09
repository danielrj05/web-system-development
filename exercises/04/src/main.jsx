import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Layout from './components/Layout';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import './App.css';

// Routes of the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // Unknown URLs show the 404 page
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Catalog /> },
      { path: 'products/:id', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

// CartProvider wraps the router so every page shares the cart
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
