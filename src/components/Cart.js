import React from 'react';
import CartItem from './CartItem'; // Import CartItem component

const Cart = ({ items, total, onRemoveItem, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 end-0 p-4 bg-white rounded-3 shadow-lg w-25 z-50">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Shopping Cart</h5>
        <button className="btn-close" onClick={onClose}></button>
      </div>
      
      <div className="max-height-50 overflow-auto mb-3">
        {items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={onRemoveItem} 
          />
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <strong>Total:</strong>
        <span className="text-success">₪{total.toFixed(2)}</span>
      </div>

      <button 
        className={`btn btn-primary w-100 ${items.length === 0 ? 'disabled' : ''}`}
        disabled={items.length === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
