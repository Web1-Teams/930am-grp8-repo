import React, { useState } from 'react';
import products from './data/productdata'; // Your products data
import ProductItem from './components/ProductItem'; // Your ProductItem component
import Cart from './components/Cart'; // Your Cart component
import Notification from './components/Notification'; // Your Notification component
import './App.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

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
  className="fixed bottom-5 right-5 w-14 h-14 bg-gold text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300 text-2xl flex justify-center items-center"
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
