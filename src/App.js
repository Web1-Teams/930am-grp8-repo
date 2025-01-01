import React, { useState } from 'react';
import products  from './data/productdata';
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';
import Notification from './components/Notification';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  const addToCart = (product) => {
    const newItem = {
      id: Date.now(),
      name: product.name,
      price: product.price
    };
    setCartItems([...cartItems, newItem]);
    showNotification(`${product.name} added to cart`);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    showNotification('Item removed from cart');
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-vh-100 bg-dark py-4">
      <div className="container bg-white rounded-3 shadow-sm p-4">
        <header className="text-center py-4 border-bottom">
          <h1 className="text-primary fw-bold mb-2">المنتجات</h1>
          <p className="text-muted">طريقك الافضل لعالم التكنولوجيا 🔥</p>
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map(product => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="btn btn-warning position-fixed bottom-5 end-5 rounded-circle p-3 shadow-lg"
        >
          🛒
        </button>

        <Cart
          items={cartItems}
          total={cartTotal}
          onRemoveItem={removeFromCart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        {notification && (
          <Notification 
            message={notification} 
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;