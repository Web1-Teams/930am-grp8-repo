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
  const [notificationTimeout, setNotificationTimeout] = useState(null);

  const showNotification = (message) => {
    if (notificationTimeout) {
      clearTimeout(notificationTimeout);
    }
    setNotification(message);
    const timeout = setTimeout(() => setNotification(null), 2000);
    setNotificationTimeout(timeout);
  };

  const addToCart = (product) => {
    const newItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    showNotification(`${product.name} added to cart`);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    showNotification('Item removed from cart');
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 bg-white rounded-2xl">
        <header className="text-center py-16 border-b border-gray-200">
          <h1 className="text-4xl font-bold mb-2 text-black uppercase">المنتجات</h1>
          <p className="text-xl text-gray-600">طريقك الافضل لعالم التكنولوجيا 🔥</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        <button
          onClick={() => setIsCartOpen((prev) => !prev)}
          className="fixed bottom-5 right-5 w-14 h-14 bg-yellow-400 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 text-2xl"
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

        {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
      </div>
    </div>
  );
};

export default App;
