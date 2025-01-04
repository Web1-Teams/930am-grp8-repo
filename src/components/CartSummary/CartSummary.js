import React, { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import './CartSummary.css';
import productsData from '../../data/products.json';

const CartSummary = () => {
  const [cartItems, setCartItems] = useState(
    productsData.products.map((product) => ({
      ...product,
      quantity: 1, 
    }))
  );

  useEffect(() => {
    const items = document.querySelectorAll('.item-box');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); 
  }, []);

  
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

 
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
    </div>
  );
};

export default CartSummary;
