import React from 'react';
import './CartItem.css';

const CartItem = ({ image, title, price, quantity, onQuantityChange, onRemove }) => {
  return (
    <div className="item-box">
      <img src={image} alt={title} />
      <div className="item-info">
        <h3>{title}</h3>
        <p>{price} ₪</p>
        <div className="item-controls">
          <button 
            className="quantity-btn"
            onClick={() => onQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            className="quantity-btn"
            onClick={() => onQuantityChange(quantity + 1)}
          >
            +
          </button>
          <button 
            className="remove-btn"
            onClick={onRemove}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;