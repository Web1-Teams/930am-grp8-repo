import React, { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import './CartSummary.css';
import productsData from '../../data/products.json';

const CartSummary = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.item-box');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      {productsData.products.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartSummary;
