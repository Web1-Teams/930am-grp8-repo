import React, { useState } from 'react';
import products from './data/productdata'; 
import ProductItem from './components/ProductItem';
import Cart from './components/Cart'; 
import Notification from './components/Notification'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CartButton.css';

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
    <div className="min-h-screen bg-black py-8">
      <div className="nzxt-page">
        <header className="page-header">
          <h1>المنتجات</h1>
          <p>طريقك الافضل لعالم التكنولوجيا 🔥</p>
        </header>

        <div className="product-grid">
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
  className="cart-button">
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
