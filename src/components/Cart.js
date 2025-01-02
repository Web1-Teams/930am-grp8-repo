import React from 'react';
import CartItem from './CartItem'; // Import CartItem component
import'./Cart.css';
const Cart = ({ items, total, onRemoveItem, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h5>Shopping Cart</h5>
        <button className="btn-close" onClick={onClose}></button>
      </div>

      <div className="cart-items">
        {items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={onRemoveItem} 
          />
        ))}
      </div>

      <div className="cart-footer">
        <strong>Total:</strong>
        <span className="text-success">₪{total.toFixed(2)}</span>
      </div>

      <button 
        className={`checkout-btn ${items.length === 0 ? 'disabled' : ''}`}
        disabled={items.length === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
