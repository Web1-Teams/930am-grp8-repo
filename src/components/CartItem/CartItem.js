import React from 'react';
import './CartItem.css';

const CartItem = ({ image, title, price }) => {
  return (
    <div className="item-box">
      <img src={image} alt={title} />
      <div className="item-info">
        <h3>{title}</h3>
        <p>{price} ₪</p>
      </div>
    </div>
  );
};

export default CartItem;